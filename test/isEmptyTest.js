import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";
describe("isEmpty", () => {
  it("should return true for an empty array", () => {
    expect(isEmpty([])).to.equal(true);
  });
  it("should return true for an empty object", () => {
    expect(isEmpty({})).to.equal(true);
  });
  it("should return false for an unempty array", () => {
    expect(isEmpty(["foo"])).to.equal(false);
  });
  it("should return false for an unempty object", () => {
    expect(isEmpty({ foo: "bar" })).to.equal(false);
  });
  it("should return true for a null value", () => {
    expect(isEmpty(null)).to.equal(true);
  });
  it("should return false for a string", () => {
    expect(isEmpty("foo")).to.equal(false);
  });
  it("should return false for a string value", () => {
    expect(isEmpty("foo")).to.equal(false);
  });
  it("should return true for an empty arguments", () => {
    expect(
      isEmpty(
        (function () {
          return arguments;
        })()
      )
    ).to.equal(true);
  });
  it("should return true for empty Set object", () => {
    expect(isEmpty(new Set())).to.equal(true);
  });
  it("should return true for empty Map object", () => {
    expect(isEmpty(new Map())).to.equal(true);
  });
  function Person(name) {
    this.name = name;
  }
  it("should return true for an empty Prototype object", () => {
    expect(isEmpty(Object.prototype)).to.equal(true);
  });
});
