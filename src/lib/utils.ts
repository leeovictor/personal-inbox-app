/**
 * Combines multiple class strings, filtering out falsy values
 * @param classes - class strings, arrays, or falsy values
 * @returns combined class string
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter(Boolean)
    .join(' ')
    .trim();
}
