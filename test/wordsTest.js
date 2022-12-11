import { expect } from "chai";
import words from "../src/words.js";

describe("Words", () => {
    it("returns individual words", () => {
        expect(words('foo, bar, test')).to.eql(['foo', 'bar', 'test']);
    });
    it("returns empty array for empty string", () => {
        expect(words('')).to.eql([]);
    });
    it("should recognize numbers as words", () => {
        expect(words('0, 15, 314')).to.eql(['0', '15', '314']);
    });
    it("should recognize alphanumeric characters as words", () => {
        expect(words('&, %, ¤')).to.eql(['&', '%', '¤']);
    });
    it("should recognize special letters", () => {
        expect(words('ö, ä, ñ, ü')).to.eql(['ö', 'ä', 'ñ', 'ü']);
    });
    it("returns array for string with a pattern", () => {
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.eql(['fred', 'barney', '&', 'pebbles']);
    });
    it("returns empty array for no input", () => {
        expect(words()).to.eql([]);
    });
    it("returns empty array for empty string with a pattern", () => {
        expect(words('', /[^, ]+/g)).to.eql([]);
    });
});