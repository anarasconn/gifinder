import './styles/style.css';

import { createGifCard } from './components/gallery';
import { renderGifDetail } from './components/gif-details';
import { renderStatus } from './components/status';
import { searchGifs, findGifById } from './services/gif.service';
import type { RequestStatus } from './models/request-status.enum';
import type { Gif } from './models/gif.interface';

const form = document.querySelector<HTMLFormElement>('#search-form');
const input = document.querySelector<HTMLInputElement>('#search-input');
const gallery = document.querySelector<HTMLDivElement>('#gallery');
const detail = document.querySelector<HTMLDivElement>('#detail');
const status = document.querySelector<HTMLParagraphElement>('#status');

if (!form || !input || !gallery || !detail || !status) {
  throw new Error('No se encontraron los elementos del DOM necesarios para GIFinder.');
}

const formEl = form;
const inputEl = input;
const galleryEl = gallery;
const detailEl = detail;
const statusEl = status;

function updateStatus(state: RequestStatus) {
  statusEl.textContent = renderStatus(state);
}

function renderGallery(gifs: Gif[]) {
  galleryEl.innerHTML = gifs.map(createGifCard).join('');
}

function clearDetail() {
  detailEl.innerHTML = '';
}

formEl.addEventListener('submit', event => {
  event.preventDefault();
  clearDetail();
  updateStatus('Loading');

  try {
    const results = searchGifs(inputEl.value);
    if (results.length === 0) {
      updateStatus('Empty');
      galleryEl.innerHTML = '';
    } else {
      updateStatus('Success');
      renderGallery(results);
    }
  } catch {
    updateStatus('Error');
  }
});

galleryEl.addEventListener('click', event => {
  const target = event.target as HTMLElement;
  if (target.matches('.detail-btn')) {
    const id = target.getAttribute('data-gif-id');
    if (!id) return;

    const gif = findGifById(id);
    if (gif) {
      detailEl.innerHTML = renderGifDetail(gif);

      const closeBtn = document.querySelector<HTMLButtonElement>('#close-detail');
      closeBtn?.addEventListener('click', () => {
        clearDetail();
      });
    }
  }
});

updateStatus('Initial');
renderGallery(searchGifs(''));
