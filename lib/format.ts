import { formatDistance, format } from 'date-fns';

export function formatTimeAgo(date: Date): string {
  return formatDistance(date, new Date(), { addSuffix: true });
}

export function formatDateTime(date: Date): string {
  return format(date, 'PPpp');
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phone;
}