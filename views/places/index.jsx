const React = require('react')
const Default = require('../default')

function index ({places}) {
    let placesFormatted = places.map((place) => {
      return (
        <div key={place.id} className="col-sm-6 col-md-3 col-lg-3">
          <h2>        
          <a href={`/places/${place.id}`}>{place.name}</a>
          </h2>
          <p className="text-center">{place.cuisines}</p>
          <img src={place.pic} className="rounded mx-auto d-block" alt={place.name}/>
          <p className="text-center">Located in {place.city}, {place.state}. {place.founded}.</p>
        </div>
      )
    })
      return (
        <Default>
            <main>
              <div className="container">
                <div className="row">
                  {placesFormatted}
                </div>
              </div>
            </main>
        </Default>
    )
  }

module.exports = index