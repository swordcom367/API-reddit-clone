const { TestResult } = require("@jest/types");

const im = require('../../databace interactions/interactionManiger')
test("this should grab the databe",async() => {
    try {
    const data =await im.grabTimeline();
    expect(data.length).toBe(3);
    } catch(err) {
        expect(err).toMatch('error');
    }
})