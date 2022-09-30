const React = require('react')
const Default = require('./Default')

function home () {
    return (
      <Default>
          <main>
              <h2>HOME</h2>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>

          </main>
      </Default>
    )
  }
  

module.exports = home
