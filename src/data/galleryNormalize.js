/**
 * Normalize gallery entries to `{ image, caption? }`, drop non-images (e.g. video),
 * and remove duplicate URLs (first occurrence wins).
 *
 * @param {Array<{ image?: string, imageURL?: string, caption?: string }>} items
 * @returns {Array<{ image: string, caption?: string }>}
 */
export function normalizeGalleryEntries(items) {
  const seen = new Set();
  const out = [];

  for (const item of items) {
    const raw = (item.image ?? item.imageURL ?? "").trim();
    if (!raw) continue;
    if (/\.(mov|mp4|webm)(\?|#|$)/i.test(raw)) continue;

    let canonical;
    try {
      canonical = new URL(raw).href;
    } catch {
      canonical = raw;
    }

    if (seen.has(canonical)) continue;
    seen.add(canonical);

    const cap = item.caption?.trim();
    out.push({
      image: canonical,
      ...(cap ? { caption: cap } : {}),
    });
  }

  return out;
}
