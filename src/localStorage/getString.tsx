export default function getString(): string {
  return localStorage.getItem('search') ?? '';
}
