export function formatDate(date: any, local: any) {
  const d = new Date(date);
  const options: any = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  };
  const res = d.toLocaleDateString(local, options);
  return res;
}
