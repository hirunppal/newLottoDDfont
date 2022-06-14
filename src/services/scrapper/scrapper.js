import puppeteer from "puppeteer";

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.goto(url);
}

scrapeProduct("https://www.lottery.co.th/lotto/1-06-65");
