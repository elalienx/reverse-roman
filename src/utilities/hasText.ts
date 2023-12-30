export default function hasText(text: string): boolean {
  const removedSpaces = text.trim();

  return removedSpaces.length !== 0;
}
