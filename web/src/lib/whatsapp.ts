export const MENSAJE_WHATSAPP_POR_DEFECTO = 'Hola, quiero cotizar un proyecto con Agente Digital.';

export function whatsappUrl(numero: string, mensaje: string = MENSAJE_WHATSAPP_POR_DEFECTO): string {
  return `https://wa.me/${numero.replace(/\D/g, '')}?text=${encodeURIComponent(mensaje)}`;
}
