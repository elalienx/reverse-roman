// Project files
import Roman from "./types/Roman";
import hasText from "./utilities/hasText";

export default function reverseRoman(text: string): number {
  // Safeguards
  if (!hasText(text)) throw Error("Format: Empty text");

  const symbols: Roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const formattedText: string[] = text.toLocaleUpperCase().split("");
  let prev: number = 0;
  let result: number = 0;
  let counter: number = 0;

  for (let key of formattedText) {
    const curr: number = symbols[key];
    let value = curr;

    if (prev < curr) value = curr - prev - prev;
    if (prev !== curr) counter = 0;
    if (curr === undefined) throw Error("Format: Bad symbols");
    if (prev === 5 && curr === 5) throw Error("Count: VV");
    if (prev === 1 && curr > 10) throw Error("Count: IM");
    if (counter === 3) throw Error("Count: IIII");

    counter++;
    prev = curr;
    result += value;
  }

  return result;
}
