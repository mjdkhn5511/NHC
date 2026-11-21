import https from 'node:https';

https.get('https://www.nadwahealthcare.com/treatments/kidney-urology', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const rootStart = data.indexOf('<div id="root">');
    console.log('--- ROOT CONTENT PREVIEW ---');
    console.log(data.slice(rootStart, rootStart + 2500));
  });
});
