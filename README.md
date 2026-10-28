# Agente Digital

Agencia digital en Perú: landing pages, webs corporativas, ecommerce, CRM a medida y apps/sistemas. Precios en soles (PEN).

Este repositorio tendrá:
1. El **plan de negocio completo** (`docs/`).
2. La **web de la agencia** (`web/`, Astro) con una **API de leads** (`api/`, NestJS + PostgreSQL), desplegada con Docker.

## Servicios y rangos de precio (referencial)
| Servicio | Rango |
|---|---|
| Landing page | S/ 900 – 2,500 |
| Web corporativa | S/ 2,500 – 6,000 |
| Ecommerce (Culqi, Niubiz, Izipay, Yape) | S/ 4,000 – 15,000 |
| CRM a medida | S/ 8,000 – 25,000 |
| Apps / sistemas | desde S/ 15,000 |
| Mensualidades (hosting, soporte, SEO, ads) | S/ 150 – 1,500 / mes |

Cada servicio tendrá paquetes Básico / Pro / Premium.

## Plan de negocio (`docs/`)
| Archivo | Contenido |
|---|---|
| `01_RESUMEN_EJECUTIVO.md` | Misión, visión, propuesta de valor, público objetivo (pymes, emprendedores, retail, servicios de Lima y provincias) |
| `02_SERVICIOS_Y_PRECIOS.md` | Catálogo con paquetes, entregables y plazos |
| `03_PROCESOS.md` | Embudo comercial (lead → diagnóstico → propuesta → contrato 50/50 → kickoff), entrega por sprints, QA, garantía, soporte con SLA |
| `04_EQUIPO_Y_ROLES.md` | Fase 1 (fundador + freelancers), fase 2 (PM, devs, diseñador UI, marketing), costos |
| `05_MARKETING.md` | Marca, canales (Google Ads, Meta, LinkedIn, TikTok, referidos), contenido, metas de leads |
| `06_FINANZAS.md` | Inversión inicial, costos fijos, punto de equilibrio, proyección a 12 meses, formalización (RUC, RMT/MYPE, facturación electrónica SUNAT) |
| `07_STACK_TECNICO.md` | Plantillas reutilizables, infraestructura Docker/Portainer, estándares, seguridad |
| `08_ROADMAP.md` | Hitos a 30/60/90 días y a 6/12 meses |

## Web de la agencia
```
web/      Astro 7 (TypeScript, Tailwind 4, sitio estático servido por nginx)
api/      NestJS 11 + TypeORM + PostgreSQL (leads)
docker-compose.yml   .env.example   docs/
```
- **Landing de una página:** hero, servicios, paquetes Básico/Pro/Premium, proceso, beneficios, portafolio, testimonios, preguntas frecuentes y contacto (formulario → `POST /api/leads`, con WhatsApp como alternativa). Además `/gracias`, `/privacidad` y 404. SEO (metadata, sitemap, robots, Open Graph, JSON-LD) y diseño responsive.
- **Contenido editable** en `web/src/data/*.ts` (servicios, precios, FAQ, etc.). El portafolio y los testimonios marcados `ejemplo: true` solo se ven en desarrollo, nunca en producción.
- **API:** `GET /api/salud` · `POST /api/leads` (validación + rate-limit) · `GET /api/leads` (protegido con `ADMIN_API_KEY`).
- **Docker:** `agente-db` (postgres:17-alpine), `agente-api`, `agente-web`; secretos obligatorios en `.env` (solo se versiona `.env.example`).

### Desarrollo de la web
Requiere Node ≥ 22.23.4 y pnpm.
```bash
cd web
pnpm install
cp .env.example .env   # completar PUBLIC_WHATSAPP_NUMBER, etc.
pnpm dev               # http://localhost:4321 (proxy /api -> localhost:3000)
pnpm build             # astro check + build estático en dist/
```
Con Docker: `docker compose up --build agente-web` → http://localhost:8080

## Roadmap de construcción
1. Estructura base
2. Documentos del plan de negocio
3. API NestJS (salud, leads)
4. Web Astro
5. docker-compose y prueba local
6. Despliegue
