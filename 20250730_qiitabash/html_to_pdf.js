const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///home/sigma/marp_env/20250730_qiitabash/tdd.html', { waitUntil: 'networkidle0' });
  await page.pdf({ 
    path: 'tdd.pdf', 
    width: '14.54in',
    height: '8.18in',
    printBackground: true,
    margin: {
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }
  });
  await browser.close();
})();

