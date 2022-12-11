import { expect } from "chai";
import filter from "../src/filter.js";

const users = [
   { 'user': 'barney', 'active': true },
   { 'user': 'fred',   'active': false } 
];


describe("Filter", () => {
    it("shoud return an empty array for an empty array", function () {
        expect(filter([[]], ({ active }) => active)).to.eql([[]]);
    });
    it("should return input array if predicate is not given", function () {
        expect(filter(users).to.eql(users));
    });
    it("shoud return an empty array for a non-array", function () {
        expect(filter("foo", ({ passive }) => passive)).to.eql([[]]);
    });
    it("return all active users", function () {
        expect(filter(users, ({ active }) => active)).to.eql([{ 'user': 'barney', 'active': true }]);
    });
    it("should return empty array if predicate doesn't match", function () {
        expect(filter(users, ({passive}) => passive)).to.eql([[]]);
    });
    it("should return empty array with no array", function () {
        expect(filter()).to.eql([[]]);
    });
});