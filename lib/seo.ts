export const SITE_URL = "https://theproductbuilders.com";
export const SITE_NAME = "The Product Builders";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}
