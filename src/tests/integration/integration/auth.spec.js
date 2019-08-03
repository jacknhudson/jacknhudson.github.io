import { setup, login } from '../utils'

let browser
let page

beforeAll(async () => {
  ;({ browser, page } = await setup())
})

describe('Login', () => {
  it('users can login', async () => {
    await login(page)
  }, 16000)
})

afterAll(() => {
  browser.close()
})
