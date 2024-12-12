import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';

// Launch the browser and open a new blank page
// const options = {
//     headless: false, // ヘッドレスをオフに
//     slowMo: 100  // 動作を遅く
// };

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

// ページを開く
const url = 'https://www.sony.jp/bravia/products/KJ-W500E/';
await page.goto(url, { waitUntil: 'networkidle2' });

// コンテンツをスクレイピング
const data = await page.evaluate(() => {
    const result = {};

    // 製品名を取得
    const productTitle = document.querySelector('h1')?.innerText;
    result.productTitle = productTitle;

    // 概要説明を取得
    const description = document.querySelector('.productOverview p')?.innerText;
    result.description = description;

    // 主な特徴を取得
    const features = Array.from(
        document.querySelectorAll('.features .featureItem')
    ).map((item) => item.innerText.trim());
    result.features = features;

    // 技術スペック情報を取得
    const specs = Array.from(
        document.querySelectorAll('.specsTable tbody tr')
    ).map((row) => {
        const cells = row.querySelectorAll('td, th');
        return Array.from(cells).map((cell) => cell.innerText.trim());
    });
    result.specs = specs;

    return result;
});

// 取得したデータを表示
console.log(data);

// ブラウザを閉じる
await browser.close();