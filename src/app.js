const puppeteer = require('puppeteer')

let app = async() => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('https://github.com/lebrancconvas')
}

app()