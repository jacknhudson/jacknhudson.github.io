import puppeteer from 'puppeteer'
import { routes } from './constants'

const watchingConfig = { headless: false, slowMo: 100 }

// TODO: Explore parallelization via github.com/thomasdondorf/puppeteer-cluster
export async function setup(isWatching = false) {
  const config = isWatching ? watchingConfig : {}
  const browser = await puppeteer.launch(config)
  const page = await browser.newPage()

  page.emulate({
    viewport: {
      width: 500,
      height: 2400,
    },
    userAgent: '',
  })

  return { browser, page }
}

export async function login(page) {
  await page.goto(routes.public.signin)
  await page.waitForSelector('#signin-form')
  await page.type('input[name=username]', 'jack@signschool.com')
  await page.type('input[name=password]', 'testing')
  await page.click('button[type=submit]')
  await page.waitForSelector('#home')
}

export async function verifySign(page) {
  await page.waitForSelector('#handshapes')
  await page.waitForSelector('#sign-details')
}

export async function clickAndVerifySign(page) {
  await page.waitForSelector('#result-0')
  await page.click('li[id=result-0]')
  await page.waitForSelector('#sign')
  await verifySign(page)
}
