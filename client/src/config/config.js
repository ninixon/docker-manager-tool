const port = 5000
const host = 'localhost'

// makes an object of the form {userJoined: 'userJoined'}
const messageTypes = [
        'refreshNetwork',
    ].reduce(
        (accum, msg) => {
            accum[ msg ] = msg
            return accum
        },
        {}
    )

module.exports = {
    port,
    host,
    messageTypes,
    uri: `${host}:${port}`,
    path: '/ws'
}