const https = require('https');

https.get('https://images.unsplash.com/photo-1504307651254-35680f356f27?auto=format&fit=crop&q=80&w=2000', (res) => {
  console.log(res.statusCode);
});
