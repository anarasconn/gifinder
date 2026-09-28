import type { Gif } from '../models/gif.interface';

export function renderGifDetail(gif: Gif): string {
  return `
    <section class="gif-detail">
      <img src="${gif.url}" alt="${gif.title}" />
      <h2>${gif.title}</h2>
      <p>${gif.username ?? 'Autor no disponible'} - Clasificación ${gif.rating.toUpperCase()}</p>
      <p class="tags">${gif.tags.map(tag => `#${tag}`).join(' ')}</p>
      <button id="close-detail">Cerrar</button>
    </section>
  `;
}
