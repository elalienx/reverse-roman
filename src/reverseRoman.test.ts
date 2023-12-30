// Node modules
import { test, expect } from "vitest";

// Project files
import reverseRoman from "./reverseRoman";

test("Shows error if empty", () => {
  // Arrange
  const string1 = "";
  const string2 = " "; // invisible empty space

  // Act
  const test1 = () => reverseRoman(string1);
  const test2 = () => reverseRoman(string2);

  // Assert
  expect(test1).toThrowError();
  expect(test2).toThrowError();
});

test("Shows error if has invalid characters", () => {
  // Arrange
  const string1 = "@";
  const string2 = "0";
  const string3 = "A";

  // Act
  const test1 = () => reverseRoman(string1);
  const test2 = () => reverseRoman(string2);
  const test3 = () => reverseRoman(string3);

  // Assert
  expect(test1).toThrowError();
  expect(test2).toThrowError();
  expect(test3).toThrowError();
});

test("Counts the digits 1-50", () => {
  // 1-10
  expect(reverseRoman("i")).toBe(1);
  expect(reverseRoman("ii")).toBe(2);
  expect(reverseRoman("iii")).toBe(3);
  expect(reverseRoman("iv")).toBe(4);
  expect(reverseRoman("v")).toBe(5);
  expect(reverseRoman("vi")).toBe(6);
  expect(reverseRoman("vii")).toBe(7);
  expect(reverseRoman("viii")).toBe(8);
  expect(reverseRoman("ix")).toBe(9);
  expect(reverseRoman("x")).toBe(10);

  // 11-20
  expect(reverseRoman("xi")).toBe(11);
  expect(reverseRoman("xii")).toBe(12);
  expect(reverseRoman("xiii")).toBe(13);
  expect(reverseRoman("xiv")).toBe(14);
  expect(reverseRoman("xv")).toBe(15);
  expect(reverseRoman("xvi")).toBe(16);
  expect(reverseRoman("xvii")).toBe(17);
  expect(reverseRoman("xviii")).toBe(18);
  expect(reverseRoman("xix")).toBe(19);
  expect(reverseRoman("xx")).toBe(20);

  // 21-30
  expect(reverseRoman("xxi")).toBe(21);
  expect(reverseRoman("xxii")).toBe(22);
  expect(reverseRoman("xxiii")).toBe(23);
  expect(reverseRoman("xxiv")).toBe(24);
  expect(reverseRoman("xxv")).toBe(25);
  expect(reverseRoman("xxvi")).toBe(26);
  expect(reverseRoman("xxvii")).toBe(27);
  expect(reverseRoman("xxviii")).toBe(28);
  expect(reverseRoman("xxix")).toBe(29);
  expect(reverseRoman("xxx")).toBe(30);

  // 31-40
  expect(reverseRoman("xxxi")).toBe(31);
  expect(reverseRoman("xxxii")).toBe(32);
  expect(reverseRoman("xxxiii")).toBe(33);
  expect(reverseRoman("xxxiv")).toBe(34);
  expect(reverseRoman("xxxv")).toBe(35);
  expect(reverseRoman("xxxvi")).toBe(36);
  expect(reverseRoman("xxxvii")).toBe(37);
  expect(reverseRoman("xxxviii")).toBe(38);
  expect(reverseRoman("xxxix")).toBe(39);
  expect(reverseRoman("xl")).toBe(40);

  // 41-50
  expect(reverseRoman("xli")).toBe(41);
  expect(reverseRoman("xlii")).toBe(42);
  expect(reverseRoman("xliii")).toBe(43);
  expect(reverseRoman("xliv")).toBe(44);
  expect(reverseRoman("xlv")).toBe(45);
  expect(reverseRoman("xlvi")).toBe(46);
  expect(reverseRoman("xlvii")).toBe(47);
  expect(reverseRoman("xlviii")).toBe(48);
  expect(reverseRoman("xlix")).toBe(49);
  expect(reverseRoman("l")).toBe(50);
});

test("Knows how to handle substraction", () => {
  // Arrange
  const string1 = "iv";
  const string2 = "ix";
  const result1 = 4;
  const result2 = 9;

  // Act
  const test1 = reverseRoman(string1);
  const test2 = reverseRoman(string2);

  // Assert
  expect(test1).toBe(result1);
  expect(test2).toBe(result2);
});

test("Does not allow to add the same symbol more than 3 times in a row.", () => {
  // Arrange
  const string1 = "iiii";
  const string2 = "xxxviiii";

  // Act
  const test1 = () => reverseRoman(string1);
  const test2 = () => reverseRoman(string2);

  // Assert
  expect(test1).toThrowError();
  expect(test2).toThrowError();
});

test("Does not allow to have the symbol V in a row", () => {
  // Arrange
  const string = "VV"; // bad 10

  // Act
  const test = () => reverseRoman(string);

  // Assert
  expect(test).toThrowError();
});

test("Passes the edge cases challenge", () => {
  // Arrange
  const string1 = "IL"; // bad 49
  const string2 = "IM"; // bad 999

  // Act
  const test1 = () => reverseRoman(string1);
  const test2 = () => reverseRoman(string2);

  // Assert
  expect(test1).toThrowError();
  expect(test2).toThrowError();
});
