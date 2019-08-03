import { routes } from '../constants'
import { setup, login } from '../utils'

let browser
let page

beforeAll(async () => {
  ;({ browser, page } = await setup())
})

describe('Home', () => {
  it('should redirect to sign in page on unauthenticated first load', async () => {
    await page.goto(routes.private.home)
    await page.waitForSelector('#sign-in')
  }, 16000)

  it('should be able to view all three options', async () => {
    await login(page)
    await page.waitForSelector('#home')
    const text = await page.$eval('#home', e => e.innerHTML)
    expect(text.toLowerCase().includes('search')).toBe(true)
    expect(text.toLowerCase().includes('browse')).toBe(true)
    expect(text.toLowerCase().includes('review')).toBe(true)
  }, 16000)
})

afterAll(() => {
  browser.close()
})
