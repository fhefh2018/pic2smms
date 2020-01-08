const upload = require('./index');

async function test() {
    let result = await upload('./1.png');
    console.log(result)
}

test();