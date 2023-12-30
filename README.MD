# Reverse Roman

This small script was created to practice Test Driven Developemtn (TDD). It allows you to input any roman numeral and it will convert it to the equivalent arabic number. Example:

- "I" will be trasnformed to 1
- "XV" will be transformed to 15

It has validations to avoid users trying to use badly formatted Roman numerals like "VIIII" for 9 instead of "IX"

## Instalation

1. Clone this repository.
1. Install using `npm install` (requires Node 14 or higher)
1. Test it using `vite test`
1. You can convert any number using the console like `console.log(reverseRoman("XV")); // output: 15`
