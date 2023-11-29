const { computeSummation } = require("../../src/core/computeSummation");
const { sum } = require("../../src/lib/sum");

jest.mock('../../src/lib/sum');

test('mock correctly', () => {
    jest.mocked(sum).mockReturnValue(5);
    expect(computeSummation({ a: 1, b: 2 })).toBe(5);
});
