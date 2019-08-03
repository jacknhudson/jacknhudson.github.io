import { routes } from '../constants'
import { setup, login, clickAndVerifySign } from '../utils'

let browser
let page

beforeAll(async () => {
  ;({ browser, page } = await setup())
})

describe('Browse', () => {
  it('should be able to see browse page', async () => {
    await login(page)
    await page.goto(routes.private.browse)
    await page.waitForSelector('#browse')
  }, 16000)

  it('should be able to view all three options', async () => {
    await page.goto(routes.private.browse)
    await page.waitForSelector('#browse')
    const text = await page.$eval('#browse', e => e.innerHTML)
    await expect(text.toLowerCase().includes('handshapes')).toBe(true)
    await expect(text.toLowerCase().includes('signs')).toBe(true)
    await expect(text.toLowerCase().includes('subtopics')).toBe(true)
  }, 16000)

  it('should be able to view signs', async () => {
    await page.goto(routes.private.signs)
    await page.waitForSelector('#signs')
    await clickAndVerifySign(page)
  }, 16000)

  it('should be able to view handshapes', async () => {
    await page.goto(routes.private.handshapes)
    await page.waitForSelector('#handshapes')
    await page.waitForSelector('#image-card-0')
    await page.click('a[id=image-card-0]')
    await clickAndVerifySign(page)
  }, 16000)
})

afterAll(() => {
  browser.close()
})
