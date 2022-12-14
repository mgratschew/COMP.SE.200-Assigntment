import { expect } from "chai";
import toString from "../src/toString.js";
describe("toString", () => {
  it("should return string for string", () => {
    expect(toString("foo")).to.equal("foo");
  });
  it("should return empty string for null", () => {
    expect(toString(null)).to.equal("");
  });
  it("should return empty string for undefined", () => {
    expect(toString(undefined)).to.equal("");
  });
  it("should return string with elements separated by commas for array of numbers", () => {
    expect(toString([1, 2, 3])).to.equal("1,2,3");
  });
  const sym = Symbol("foo");
  it("should return string for a Symbol type", () => {
    expect(toString(sym)).to.equal("Symbol(foo)");
  });
  it("should return empty string for null array", () => {
    expect(toString([null])).to.equal("");
  });
});
