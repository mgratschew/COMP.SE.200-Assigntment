import { expect } from "chai";
import capitalize from "../src/capitalize.js";
describe("Capitalize", () => {
  it("should return capitalized string for a lowercase string", function () {
    expect(capitalize("foo")).to.equal("Foo");
  });
  it("should return capitalized text for a capitalized string", function () {
    expect(capitalize("Foo")).to.equal("Foo");
  });
  it("should return an empty string for an empty string", function () {
    expect(capitalize("")).to.equal("");
  });
  it("should return strings of numbers unaffected", function () {
    expect(capitalize("123")).to.equal("123");
  });
});
