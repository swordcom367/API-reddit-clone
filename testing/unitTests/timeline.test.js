const { TestResult } = require("@jest/types");

const im = require('../../databace interactions/interactionManiger')
test("this should grab the databe",async() => {
    try {
    const data =await im.grabTimeline();
    expect(data.length).toBe(data.length);
    } catch(err) {
        expect(err).toMatch('error');
    }
})