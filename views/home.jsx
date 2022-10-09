const React = require('react')
const Default = require('./Default')

function home () {
    return (
      <Default>
          <main>
            <div className="row">
              <div>
                <img src="/images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg"  className="rounded mx-auto d-block" alt="chia jars with bleuberries" />
                <div>
                  <p>Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                </div>
              </div>
              {/* <p><a href="/places"><button className="btn btn-primary">Places Page</button></a></p> */}
            </div>
          </main>
      </Default>
    )
  }
  

module.exports = home
