declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Envía un evento a GA4 si está cargado; si no hay PUBLIC_GA_ID no hace nada. */
export function track(evento: string, params: Record<string, unknown> = {}): void {
  window.gtag?.('event', evento, params);
}
