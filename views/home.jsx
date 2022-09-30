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
                <div>
                  <img src="/images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg" alt="chia jars with bleuberries" />
                  <div>
                  Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </div>
                </div>
          </main>
      </Default>
    )
  }
  

module.exports = home
