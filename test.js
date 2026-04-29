const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(`
    <style>
      body { background: white; margin: 100px; }
      .btn {
        position: fixed;
        width: 100px; height: 100px;
        background: red;
        z-index: 10;
        box-shadow: 0 0 0 20px black;
      }
      .btn::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,255,0,0.5);
        z-index: -1;
        transform: scale(1.5);
      }
    </style>
    <div class="btn">Text</div>
  `);
  await page.screenshot({path: 'test.png'});
  await browser.close();
})();
