import type { Gif } from '../models/gif.interface';
import { normalizeText } from '../utils/text';
import { gifs } from '../data/gifs';

export function searchGifs(value: string): Gif[] {
  const query = normalizeText(value);
  if (!query) return [...gifs];
  return gifs.filter(gif => {
    const searchable = [gif.title, gif.username ?? '', ...gif.tags].join(' ');
    return normalizeText(searchable).includes(query);
  });
}

export function findGifById(id: string): Gif | undefined {
  return gifs.find(gif => gif.id === id);
}