import { PUBLIC_API_URL } from 'astro:env/client';
import type { ServicioId } from '../data/servicios';

/**
 * Contrato con la API NestJS: POST /api/leads
 * 201 → creado · 400 → { errores: { campo: mensaje } } · 429 → límite de envíos
 */
export interface Lead {
  nombre: string;
  email: string;
  telefono: string;
  empresa?: string;
  servicio: ServicioId | 'otro';
  presupuesto?: string;
  mensaje: string;
  consentimiento: true;
  origen: 'landing';
  utm?: { source?: string; medium?: string; campaign?: string };
}

export type CampoLead = keyof Lead;

export type ResultadoLead =
  | { ok: true }
  | { ok: false; tipo: 'validacion'; errores: Partial<Record<CampoLead, string>> }
  | { ok: false; tipo: 'limite' }
  | { ok: false; tipo: 'servidor' };

const ENDPOINT = `${PUBLIC_API_URL.replace(/\/$/, '')}/api/leads`;

export async function enviarLead(lead: Lead): Promise<ResultadoLead> {
  let respuesta: Response;
  try {
    respuesta = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    return { ok: false, tipo: 'servidor' };
  }

  if (respuesta.ok) return { ok: true };
  if (respuesta.status === 429) return { ok: false, tipo: 'limite' };
  if (respuesta.status === 400) {
    const cuerpo = (await respuesta.json().catch(() => ({}))) as { errores?: Partial<Record<CampoLead, string>> };
    return { ok: false, tipo: 'validacion', errores: cuerpo.errores ?? {} };
  }
  return { ok: false, tipo: 'servidor' };
}

const CLAVES_UTM = ['source', 'medium', 'campaign'] as const;
const CLAVE_STORAGE = 'agente-utm';

/** Lee los UTM de la URL (o los guardados en la sesión si el visitante navegó a otra página). */
export function leerUtm(): Lead['utm'] {
  const params = new URLSearchParams(location.search);
  const desdeUrl = Object.fromEntries(CLAVES_UTM.flatMap((k) => (params.get(`utm_${k}`) ? [[k, params.get(`utm_${k}`)!]] : [])));

  try {
    if (Object.keys(desdeUrl).length > 0) {
      sessionStorage.setItem(CLAVE_STORAGE, JSON.stringify(desdeUrl));
      return desdeUrl;
    }
    const guardado = sessionStorage.getItem(CLAVE_STORAGE);
    return guardado ? JSON.parse(guardado) : undefined;
  } catch {
    return Object.keys(desdeUrl).length > 0 ? desdeUrl : undefined;
  }
}
