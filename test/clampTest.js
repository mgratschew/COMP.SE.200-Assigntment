import {expect} from "chai";
import clamp from "../src/clamp.js"

describe("Clamp", () => {
    it("returns given number when in bounds", () => {
        expect(clamp(1, 0, 2)).to.equal(1);
    });
    it("returns lower bound when given number is equal or less than lower bound", () => {
        expect(clamp(-3, 1, 2)).to.equal(1);
    });
    it("returns upper bound when given number is equal or greater than upper bound", () => {
        expect(clamp(3, 0, 2)).to.equal(2);
    });
    it("returns NaN when lower bound is greater than upperbound", () => {
        expect(clamp(-10, 5, 2)).to.equal(NaN);
    });
    it("returns bound if both bounds are equal", () => {
        expect(clamp(5, 0, 0)).to.equal(0);
    });
    it("returns NaN if no parameters given", () => {
        expect(clamp()).to.eql(NaN);
    });
});