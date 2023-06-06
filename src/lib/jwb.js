const jsonwebtoken = require('jsonwebtoken');
const { promisify } = require('util')

const jwb = {
sign: promisify(jsonwebtoken.sign),
verify: promisify(jsonwebtoken.verify)
}

module.exports = jwb;