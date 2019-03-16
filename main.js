const RetroFMClient = require('./index.js');
const client = new RetroFMClient();

client.login().then(() => {
    console.log('AYUP');
});