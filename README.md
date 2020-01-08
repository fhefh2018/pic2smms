# pic2smms
to upload image to the smms picbed

# how to install
`npm i pic2smms`

# how to use

```javascript
//to use it on your server
const upload = require('pic2smms');

async function test1() {
    let result = await upload('./1.png');
    console.log(result)
}
test1()
```
```javascript
//if you are the vip or registered user, you can use the token to save the image for you account
const upload = require('pic2smms');

async function test2() {
    let result = await upload('./1.png', 'your token');
    console.log(result)
}
test2()
```

```javascript
//get the result
const upload = require('pic2smms');

async function test3() {
    let result = await upload('./1.png');
    console.log(result.data)
}

test3()
//show the "console.log" data result
data: {
    success: true,
    code: 'success',
    message: 'Upload success.',
    data: {
      file_id: 0,
      width: 1000,
      height: 966,
      filename: '1.png',
      storename: 'xxxxxxx.png',
      size: 50116,
      path: '/2020/01/08/X284KvEH3xflntk.png',
      hash: 'xxxxxxx',
      url: 'https://i.loli.net/2020/01/08/xxxxxxx.png',
      delete: 'https://sm.ms/delete/xxxxxxx',
      page: 'https://sm.ms/image/xxxxxxx'
    },
    RequestId: 'xxxxxxx-xxxxxxx-xxxxxxx-xxxxxxx-xxxxxxx'
}
```
```javascript
//To get result data, no use async, await
const upload = require('pic2smms');
let result = upload('./1.png');

result.then(data => {
  //show the data
  console.log(data.data);
})
```