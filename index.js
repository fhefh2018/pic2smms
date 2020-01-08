const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');
/**
 * 
 * @param {*} path string path of the picture
 * @param {*} type object the upload result
 */
function pic2smms(path, token = "") {
    let result;
    let form = new FormData();
    form.append('smfile', fs.createReadStream(path));

    result = axios.post(
        'https://sm.ms/api/v2/upload',
        form, {
        headers: {
            ...form.getHeaders(),
            "Authorization": token
        }
    })

    return result;
}

module.exports = pic2smms;