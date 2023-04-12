module.exports = {
  writeHTMLBody(url, user, token) {
    return (`
      <main>
        <div>
          <h1>Greetings from the Deliveree team, ${user}!</h1>
        </div> 
        <br>
        <div>
          <p>Follow the next link to recover your password. It's simple and fast:</p>
          <a>${url + token}</a>
          <br>
        </div>
        <br>

        <div>
          <p><b>Important!</b> Never share your personal data.</p>
          <br>
          <h3>Thanks to use our app!</h3>
        </div>
        <br>
        <footer>It is not necessary to reply this email.</footer>
      </main>
    `);
  }
}