const React = require('react')
const Default = require('./Default')

function error404 () {
    return (
      <Default>
          <main>
              <h2>404: PAGE NOT FOUND</h2>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img src="/images/Cat600px.png" alt="A lost cat"/>
              </div>
          </main>
      </Default>
    )
  }

module.exports = error404
