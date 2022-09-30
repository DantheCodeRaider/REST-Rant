const React = require('react')
const Default = require('../Default')

function index ({places, title}) {
    let placesFormatted = places.map((place, index) => {
      return (
        <div key={index} className="col-sm-6">
          <h2>{place.name}</h2>
          <p className="text-center">{place.cuisines}</p>
          <img src={place.pic} alt={place.name}/>
          <p className="text-center">Located in {place.city}, {place.state}</p>
        </div>
      )
    })
      return (
        <Default title={title}>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                <div className="row">
                {placesFormatted}
                </div>
            </main>
        </Default>
    )
  }

module.exports = index

