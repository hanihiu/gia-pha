/**
 * Tiny helper to confirm env wiring for the frontend.
 * NOTE: NEXT_PUBLIC_* vars are safe to expose to the browser.
 */
export function getApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
}
