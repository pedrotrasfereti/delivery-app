const { google } = require('googleapis');
const { OAuth2 } = google.auth;

class GoogleAuth {
  constructor() {
    this.OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';
    this.oauth2client = new OAuth2(
      process.env.GMAIL_CLIENTID,
      process.env.GMAIL_CLIENTSECRET,
      this.OAUTH_PLAYGROUND,
    );

    this.oauth2client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESHTOKEN,
    });

    this.acessToken = this.oauth2client.getAccessToken();
  }

  getAcessToken() {
    return this.acessToken;
  }
}

module.exports = { GoogleAuth };
