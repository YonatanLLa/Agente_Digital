import type { ServicioId } from './servicios';

export interface Paquete {
  nombre: 'Básico' | 'Pro' | 'Premium';
  /** null = se cotiza a medida */
  precio: number | null;
  plazo: string;
  destacado?: boolean;
  incluye: string[];
}

// Precios y entregables de ejemplo dentro de los rangos del README.
// Reemplazar con los de docs/02_SERVICIOS_Y_PRECIOS.md cuando exista.
export const paquetes: Record<ServicioId, Paquete[]> = {
  landing: [
    {
      nombre: 'Básico',
      precio: 900,
      plazo: '7 días',
      incluye: ['1 página con hasta 6 secciones', 'Formulario + botón de WhatsApp', 'Hosting y dominio .com por 1 año', '1 ronda de cambios'],
    },
    {
      nombre: 'Pro',
      precio: 1600,
      plazo: '10 días',
      destacado: true,
      incluye: ['Todo lo del Básico', 'Redacción persuasiva (copywriting)', 'Google Analytics y píxel de Meta', 'Optimización de velocidad', '2 rondas de cambios'],
    },
    {
      nombre: 'Premium',
      precio: 2500,
      plazo: '15 días',
      incluye: ['Todo lo del Pro', 'Versión A/B para pruebas', 'Integración con CRM o correo', 'Reporte de conversiones el primer mes', '3 rondas de cambios'],
    },
  ],
  'web-corporativa': [
    {
      nombre: 'Básico',
      precio: 2500,
      plazo: '3 semanas',
      incluye: ['Hasta 5 secciones', 'Diseño responsive', 'Formulario y WhatsApp', 'SEO básico'],
    },
    {
      nombre: 'Pro',
      precio: 4000,
      plazo: '4 semanas',
      destacado: true,
      incluye: ['Hasta 8 secciones', 'Panel autoadministrable', 'Blog de noticias', 'SEO técnico y analítica'],
    },
    {
      nombre: 'Premium',
      precio: 6000,
      plazo: '6 semanas',
      incluye: ['Hasta 12 secciones', 'Multi-idioma', 'Integraciones a medida', 'Capacitación al equipo'],
    },
  ],
  ecommerce: [
    {
      nombre: 'Básico',
      precio: 4000,
      plazo: '4 semanas',
      incluye: ['Hasta 50 productos', '1 pasarela de pago', 'Gestión de pedidos', 'Zonas de envío'],
    },
    {
      nombre: 'Pro',
      precio: 8500,
      plazo: '6 semanas',
      destacado: true,
      incluye: ['Productos ilimitados', 'Culqi, Niubiz, Izipay y Yape', 'Cupones y variantes', 'Boleta y factura electrónica'],
    },
    {
      nombre: 'Premium',
      precio: 15000,
      plazo: '8–10 semanas',
      incluye: ['Todo lo del Pro', 'Integración con ERP o inventario', 'Programa de fidelización', 'Diseño 100 % a medida'],
    },
  ],
  crm: [
    {
      nombre: 'Básico',
      precio: 8000,
      plazo: '6 semanas',
      incluye: ['Clientes y embudo de ventas', 'Tareas y recordatorios', 'Hasta 5 usuarios', 'Reportes básicos'],
    },
    {
      nombre: 'Pro',
      precio: 15000,
      plazo: '8–10 semanas',
      destacado: true,
      incluye: ['Todo lo del Básico', 'Cotizaciones en PDF', 'Integración con WhatsApp', 'Hasta 20 usuarios'],
    },
    {
      nombre: 'Premium',
      precio: 25000,
      plazo: '12 semanas',
      incluye: ['Todo lo del Pro', 'Automatizaciones a medida', 'Integración con facturación', 'Usuarios ilimitados'],
    },
  ],
  apps: [
    {
      nombre: 'Básico',
      precio: 15000,
      plazo: '2–3 meses',
      incluye: ['App web progresiva (PWA)', 'Login y roles', 'Panel de administración', 'Publicación en servidor'],
    },
    {
      nombre: 'Pro',
      precio: 25000,
      plazo: '3–4 meses',
      destacado: true,
      incluye: ['App Android e iOS', 'Notificaciones push', 'Integración con APIs', 'Publicación en tiendas'],
    },
    {
      nombre: 'Premium',
      precio: null,
      plazo: 'Según alcance',
      incluye: ['Sistemas complejos o multiempresa', 'Arquitectura escalable', 'Equipo dedicado', 'SLA de soporte a medida'],
    },
  ],
};
