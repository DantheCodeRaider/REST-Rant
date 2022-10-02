const React = require('react')
const Default = require('../Default')

function show (data) {
    return (
        <Default>
          <main>
            <div key={data.id}>
                <h2>{ data.name }</h2>
                <img src={data.places.pic} alt={data.places.name}/>
                <h3>Rating</h3>
                <p>{data.places.rating}</p>
                <h3>Description</h3>
                <p className="text-center">Located in {data.places.city}, {data.places.state} and serving {data.places.cuisines}. {data.places.founded}.</p>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>     
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form> 
                <h3>Comments</h3>
                <p>{data.places.comments}</p>
            </div>
          </main>
        </Default>
    )
}

module.exports = show

