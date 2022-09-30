const React = require('react')

function Default (html) {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
                <title>{html.title || 'Default'}</title>
            </head>
            <body>
                <div className="wrapper">
                    <h1>REST-Rant</h1>
                    {html.children}
                    <div className="push"></div>
                </div>
                    <footer className="footer">Custom Footer Goes Here</footer>
            </body>
        </html>
    )
  }

module.exports = Default