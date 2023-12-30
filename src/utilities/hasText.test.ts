// Node modules
import { test, expect } from "vitest";

// Project files
import hasText from "./hasText";

test("Returns TRUE is text is not empty", () => {
  // Arrange
  const normalText = "ABC";
  const spaceOnSides = " XYZ ";

  // Act
  const test1 = hasText(normalText);
  const test2 = hasText(spaceOnSides);

  // Assert
  expect(test1).toBeTruthy();
  expect(test2).toBeTruthy();
});

test("Returns FALSE if text is empty", () => {
  // Arrange
  const emptyText = "";
  const invisibleEmptyCharacter = " ";

  // Act
  const test1 = hasText(emptyText);
  const test2 = hasText(invisibleEmptyCharacter);

  // Assert
  expect(test1).toBeFalsy();
  expect(test2).toBeFalsy();
});
