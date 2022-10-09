const React = require('react')
const Default = require('../Default')

function show (data) {
    return (
        <Default>
          <main>
            <div className="container" key={data.place.id}>
              <div className="row">
                <div className="col-sm-6">
                  <img src={data.place.pic} className="rounded mx-auto d-block" alt={data.place.name} />
                  <h3>Located in {data.place.city}, {data.place.state}</h3>
                </div>
                <div className="col-sm-6">
                  <h2>Rating</h2>
                  <h3>{data.place.rating}</h3>
                  <h2>Description</h2>
                  <h3>{data.place.showEstablished()}</h3>
                  <h4>Serving {data.place.cuisines}</h4>
                  <div className="buttonBox">
                    <p><a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a></p>
                    <p><form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">Delete</button>
                    </form></p>
                  </div>
                </div>
              </div>
              <div className="row">             
                  <h2>Comments</h2>
                  <h3>...will load commentrs here...</h3>
                  {/* <p>{data.places.comments}</p> */}
              </div>
            </div>
          </main>
        </Default>
    )
}

module.exports = show

{/* 
Saving old format
<main>
            <div className="container" key={data.place.id}>
              <p><h2>{data.place.name}</h2></p>
              <div><img src={data.place.pic} className="rounded mx-auto d-block" alt={data.place.name}/></div>
              <div className="row justify-content-md-center">
                <div className="col-sm-6 col-md-3 col-lg-3">                
                  <h3>Rating</h3>
                  <p>{data.place.rating}</p>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3">                
                  <h3>Description</h3>
                  <p className="text-center">{data.place.showEstablished()} Mainstays from the menu consist of {data.place.cuisines} cuisines.</p>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3">                
                  <h3>Comments</h3>
                  {<p>{data.places.comments}</p>}
                </div>
              </div>
              <p><a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a></p>
              <br></br>     
              <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                <p><button type="submit" className="btn btn-danger">Delete</button></p>
              </form>
            </div> 
*/}