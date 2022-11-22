import { expect } from "chai";
import isArrayLikeObject from "../src/isArrayLikeObject.js";
describe("isArrayLikeObject", () => {
  it("should return true for an empty array", () => {
    expect(isArrayLikeObject([])).to.equal(true);
  });
  it("should return true for an unempty array", () => {
    expect(isArrayLikeObject(["foo", "bar"])).to.equal(true);
  });
  it("should return false for an empty object", () => {
    expect(isArrayLikeObject({})).to.equal(false);
  });
  it("should return false for an unempty object", () => {
    expect(isArrayLikeObject({ foo: "bar" })).to.equal(false);
  });
  it("should return false for a string value", () => {
    expect(isArrayLikeObject("foo")).to.equal(false);
  });
});
