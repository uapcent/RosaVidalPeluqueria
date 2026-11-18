import { useState } from 'react';
import { srcSetFor } from '../lib/photoSizes.js';

// <img> for a photo. Local photos (public/trabajos/) also offer their smaller
// WebP copies; `sizes` tells the browser how wide the photo is shown, so it
// downloads the smallest copy that looks sharp.
// If the copies fail it uses the original photo, and if that fails too it
// shows a coloured placeholder.
export default function Photo({ src, alt, className = '', loading = 'lazy', sizes = '100vw' }) {
  const [errors, setErrors] = useState(0);
  const srcSet = errors === 0 ? srcSetFor(src) : undefined;
  if (errors > (srcSetFor(src) ? 1 : 0)) return <div className={`photo-fallback ${className}`} role="img" aria-label={alt} />;
  return <img src={src} srcSet={srcSet} sizes={srcSet ? sizes : undefined} alt={alt} className={className} loading={loading} decoding="async" onError={() => setErrors((n) => n + 1)} />;
}
