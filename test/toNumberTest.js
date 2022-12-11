import {expect} from "chai";
import toNumber from "../src/toNumber.js";

describe("toNumber", () => {
    it("input is number, returns number", () => {
        expect(toNumber(3.2)).to.equal(3.2);
    });
    it("input is number as a string, returns number", () => {
        expect(toNumber('3.2')).to.equal(3.2);
    });
    const sym = Symbol(3.2);
    it("input is number as a symbol, returns NaN", () => {
        expect(toNumber(sym)).to.eql(NaN);
    });
    const num = Object(3.2);
    it("input is object, returns number", () => {
        expect(toNumber(num)).to.eql(3.2);
    });
    it("no input, returns NaN", () => {
        expect(toNumber()).to.eql(NaN);
    });
    it("input is string, returns NaN", () => {
        expect(toNumber("three")).to.eql(NaN);
    });
    it("input is array with one number, returns number", () => {
        expect(toNumber([3])).to.eql(3);
    });
    it("input is array with two numbers, returns NaN", () => {
        expect(toNumber([3, 5])).to.eql(NaN);
    });
    it("input is MIN_VALUE", () => {
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
    });
    it("input is MAX_VALUE", () => {
        expect(toNumber(Number.MAX_VALUE)).to.equal(1.7976931348623157e+308);
    });
    it("input is MAX_VALUE + 1", () => {
        expect(toNumber(Number.MAX_VALUE + 1)).to.equal(1.7976931348623157e+308);
    });
    it("input is binary, returns decimal number", () => {
        expect(toNumber(0b11)).to.eql(3);
    });
    it("input is octal, returns decimal number", () => {
        expect(toNumber(0o27)).to.eql(23);
    });
    it("input is hex, returns decimal number", () => {
        expect(toNumber(0xf6)).to.eql(246);
    });
    it("input is Infinity, returns Infinity", () => {
        expect(toNumber(Infinity)).to.eql(Infinity);
    });
});