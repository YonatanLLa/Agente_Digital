export interface Testimonio {
  cita: string;
  nombre: string;
  cargo: string;
  /** Contenido de ejemplo: solo se muestra en desarrollo, nunca en el build de producción. */
  ejemplo?: boolean;
}

// EJEMPLOS: publicar solo testimonios reales con autorización del cliente.
export const testimonios: Testimonio[] = [
  {
    cita: 'Nos explicaron todo sin tecnicismos y cumplieron las fechas. Ahora recibimos pedidos por la web todos los días.',
    nombre: 'Cliente de ejemplo',
    cargo: 'Gerente, tienda online',
    ejemplo: true,
  },
  {
    cita: 'El CRM ordenó a nuestro equipo de ventas. Sabemos en qué etapa está cada cliente.',
    nombre: 'Cliente de ejemplo',
    cargo: 'Jefe comercial, distribuidora',
    ejemplo: true,
  },
  {
    cita: 'La landing quedó rápida y bonita. El botón de WhatsApp nos trae consultas desde el primer día de campaña.',
    nombre: 'Cliente de ejemplo',
    cargo: 'Dueña, clínica estética',
    ejemplo: true,
  },
];

export const testimoniosVisibles = testimonios.filter((t) => !t.ejemplo || import.meta.env.DEV);
