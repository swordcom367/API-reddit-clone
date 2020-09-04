let passwordEncription = require('../../verifications/encryptPassword')
let bcrypt = require('bcryptjs')
test('testing password hasing',async () => {
    let hash = await passwordEncription.encryptPassword("hello");
    bcrypt.compare("hello", hash, function(err, res) {
        // res === true
        expect(res).toStrictEqual(true);
    });
})