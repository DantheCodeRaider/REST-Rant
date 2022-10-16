const e = require('express')
const React = require('react')
const Default = require('../Default')
//import { Box, Slider } from '@material-ui/core';
//import { blue } from '@material-ui/core/colors';
//import { useState } from 'react';

function show (data) {
/*   const [value, setValue] = useState(3);

  const changeValue = (event, value) => {
    setValue(value);
  };

  const getText = (valu) => `${value}`; */

  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = sumRatings / data.place.comments.length
    rating = (
      <h3>
        {Math.round(averageRating)} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border col-sm-4">
          <h2 className="rant">{c.rant ? `Rant! ${String.fromCodePoint(0x1F92C)}` : `Rave! ${String.fromCodePoint(0x1F929)}`}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
      )
    })}
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
                    {rating}
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
              <div className="row comments">           
                    <h2>Comments</h2>
                      {comments}
                  <h2>Got Your Own Rant or Rave?</h2>
                  <form action={`/places/${data.place.id}/comment`} method="POST">
                    <div className="row">
                      <div className="form-group col-sm-12">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" name="content" className="form-control"></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-sm-4">
                        <label htmlFor="author">Author</label>
                        <input id="author" name="author" className="form-control" />
                      </div>
                      <div className="form-group col-sm-4">
                        <label htmlFor="stars">Star Rating</label>
                        <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" defaultValue="3"/>
{/*                        <Box display="flex" flexDirection="column" m={10}>
                            <Slider
                              style={{ width: 300 }}
                              min={1}
                              max={5}
                              step={0.5}
                              value={value}
                              marks
                              onChange={changeValue}
                              valueLabelDisplay="auto"
                              getAriaValueText={getText}
                              />
                            </Box> */}
                      </div>
                      <div className="form-group col-sm-2">
                        <br></br>
                        <input type="checkbox" id="rant" name="rant" className="form-check-input" defaultChecked/>
                        <label htmlFor="rant" className="form-check-label">Rant?</label>
                      </div>
                    </div>
                    <input type="submit" className="btn btn-primary" defaultValue="Add Comment" />
                  </form>
              </div>
            </div>
          </main>
        </Default>
    )
}

module.exports = show

/* Saving old format
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
            </div>  */
