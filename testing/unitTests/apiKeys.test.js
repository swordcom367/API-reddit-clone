// test the auth process and the decoding process auth process
const apiKeyDistributer = require('../../verifications/distributeAPIkey');
const apiKeyDecoder = require('../../verifications/verifyApiKey')
test("testing api key verification and distibutuion",() => {

    let key = apiKeyDistributer.addNewKey("tester");
    key = apiKeyDecoder.verifyFunc(key);
    expect(key).toStrictEqual({ username: 'tester', iat: 1599696496, exp: 1599782896 });
})