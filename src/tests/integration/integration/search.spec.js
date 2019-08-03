import { routes } from '../constants'
import { setup, login, clickAndVerifySign } from '../utils'

let browser
let page

beforeAll(async () => {
  ;({ browser, page } = await setup())
})

describe('Search', () => {
  it('should be able to search signs', async () => {
    await login(page)
    await page.goto(routes.private.search)
    await page.waitForSelector('#search')
    await page.type('input[name=search]', 'test')
    await clickAndVerifySign(page)
  }, 16000)
})

afterAll(() => {
  browser.close()
})
