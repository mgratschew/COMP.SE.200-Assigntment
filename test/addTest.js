import { expect } from "chai";
import add from "../src/add.js";

describe("Add", () => {
    it("two positive integers", () => {
        expect(add(5, 6)).to.equal(11);
    });
    it("one positive and one negative integer", () => {
        expect(add(-5, 6)).to.equal(1);
    });
    it("two negative integers", () => {
        expect(add(-5, -6)).to.equal(-11);
    });
    it("no input", () => {
        expect(add()).to.equal(0);
    });
    it("one positive integer", () => {
        expect(add(5)).to.equal(5);
    });
    it("MAX_VALUE + positive integer", () => {
        expect(add(Number.MAX_VALUE, 1)).to.equal(Number.MAX_VALUE);
    });
    it("Infinity + integer", () => {
        expect(add(Infinity, 6)).to.equal(Infinity);
    });
    it("Infinity + Infinity", () => {
        expect(add(Infinity, Infinity)).to.equal(Infinity);
    });
    it("Infinity - Infinity", () => {
        expect(add(Infinity, -Infinity)).to.eql(NaN);
    });
});