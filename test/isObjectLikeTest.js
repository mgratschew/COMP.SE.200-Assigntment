import { expect } from "chai";
import isObjectLike from "../src/isObjectLike.js";
describe("isObjectLike", () => {
  it("should return true for an empty object", () => {
    expect(isObjectLike({})).to.equal(true);
  });
  it("should return true for an empty array", () => {
    expect(isObjectLike([])).to.equal(true);
  });
  it("should return true for an un empty object", () => {
    expect(isObjectLike({ foo: "bar" })).to.equal(true);
  });
  it("should return true for an un empty array", () => {
    expect(isObjectLike(["foo", "bar"])).to.equal(true);
  });
  it("should return false for a null value", () => {
    expect(isObjectLike(null)).to.equal(false);
  });
  it("should return false for a function value", () => {
    expect(isObjectLike(Function)).to.equal(false);
  });
});
