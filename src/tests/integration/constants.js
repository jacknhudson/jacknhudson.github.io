const appUrlBase = 'http://localhost:3000'
export const routes = {
  public: {
    signup: `${appUrlBase}/auth/signup`,
    signin: `${appUrlBase}/auth/signin`,
    forgot: `${appUrlBase}/auth/forgot`,
    noMatch: `${appUrlBase}/testerror`,
  },
  private: {
    home: `${appUrlBase}`,
    search: `${appUrlBase}/search`,
    browse: `${appUrlBase}/browse`,
    signs: `${appUrlBase}/browse/signs`,
    handshapes: `${appUrlBase}/browse/handshapes`,
  },
}
