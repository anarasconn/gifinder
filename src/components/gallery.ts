import type { Gif } from '../models/gif.interface';

export function createGifCard(gif: Gif): string {
  const { title, url, username = 'Autor no disponible', tags, rating } = gif;

  return `
    <article class="gif-card" data-gif-id="${gif.id}">
      <img src="${url}" alt="${title}" loading="lazy" />
      <div class="gif-card_content">
        <h2>${title}</h2>
        <p>${username} - Clasificación ${rating.toUpperCase()}</p>
        <p class="tags">${tags.map(tag => `#${tag}`).join(' ')}</p>
        <button class="detail-btn" data-gif-id="${gif.id}">Ver detalle</button>
      </div>
    </article>
  `;
}
