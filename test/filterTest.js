import { expect } from "chai";
import filter from "../src/filter.js";

const testArray = [
    {'name': 'potato', 'price': 1.00, 'year': 2022},
    {'name': 'fridge', 'price': 200.00, 'year': 2000},
    {'name': 'potato', 'price': 1.00, 'year': 2022},
    {'name': 'potato', 'price': 1.00, 'year': 2022},
    {'name': 'potato', 'price': 1.00, 'year': 2022},
    {'name': 'potato', 'price': 1.00, 'year': 2022},
    {'name': 'potato', 'price': 1.00, 'year': 2022},
    {'name': 'potato', 'price': 1.00, 'year': 2022},
    {'name': 'potato', 'price': 1.00, 'year': 2022},
    {'name': 'potato', 'price': 1.00, 'year': 2022},
];


    describe("Filter", () => {
        it("shoud return an empty array for an empty array", function () {
            expect(filter([], ({ price }) => price > 0.00)).to.equal([[]]);
        });
});