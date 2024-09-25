export function formatDate(date: any, local: any) {
  const d = new Date(date);
  const options: any = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'America/New_York' // Use 'America/New_York' for GMT-4 (Eastern Time)
  };
  const res = d.toLocaleDateString(local, options);
  return res;
}
