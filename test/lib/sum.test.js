const { sum } = require("../../src/lib/sum");

test('sum(1,2) is 3', () => {
    expect(sum(1, 2)).toBe(3);
})
