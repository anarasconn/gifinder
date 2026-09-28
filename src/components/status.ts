import type { RequestStatus } from '../models/request-status.enum';

export function renderStatus(status: RequestStatus): string {
  switch (status) {
    case 'Initial':
      return 'Escribe una palabra para buscar GIFs.';
    case 'Loading':
      return 'Buscando GIFs...';
    case 'Success':
      return 'Resultados encontrados.';
    case 'Empty':
      return 'No se encontraron GIFs.';
    case 'Error':
      return 'Ocurrió un error en la búsqueda.';
    default:
      return '';
  }
}
