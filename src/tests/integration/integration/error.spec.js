import { routes } from '../constants'
import { setup } from '../utils'

let browser
let page

beforeAll(async () => {
  ;({ browser, page } = await setup())
})

describe('Error', () => {
  it('should go back to previous page when clicking "Go Back" button', async () => {
    await page.goto(routes.public.signin)
    await page.goto(routes.public.noMatch)
    await page.waitForSelector('#go-back')
    await page.click('button[id=go-back]')
    await page.waitForSelector('#sign-in')
  }, 10000)
})

afterAll(() => {
  browser.close()
})
