//👉 Write your tests below here:

const survivalOfTheFittest = require('./main.js');

//test to see if the function is defined
test("survivalOfTheFittest is defined", () => {
    expect(survivalOfTheFittest).toBeDefined();
  });

  //test to see if the function returns a number

test("survivalOfTheFittest returns a number", () => {
    expect(typeof survivalOfTheFittest(50, 25, 10)).toBe("number");
  });

  //test to see if the function returns the correct number

test("survivalOfTheFittest returns the correct number", () => {
    expect(survivalOfTheFittest(50, 25, 10)).toBe(68);
  });

  //test to see if the function returns the correct number

test("survivalOfTheFittest returns the correct number", () => {
    expect(survivalOfTheFittest(458, 235, 17)).toBe(564);
  });

test("survivalOfTheFittest returns the correct number", () => {
    expect(survivalOfTheFittest(2357, 898, 133)).toBe(2683);
  });