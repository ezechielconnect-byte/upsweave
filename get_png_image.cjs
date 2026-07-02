const https = require('https');

https.get('https://www.pngegg.com/fr/png-ytmvt', {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    let matches = data.match(/https:\/\/[^"]+\.png/g);
    if(matches) {
       console.log(matches.slice(0, 10).join('\n'));
    }
  });
}).on('error', (err) => console.log(err));



