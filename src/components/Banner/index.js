import React from 'react'
import './styles.css';

export default function Banner() {
  return (
    <>
      <div className="container">
        <div className="containerContent">
            <div className="img">
                <img src="../../sorryguy.png" alt='sorry guy' width="300px" height="300px" />
            </div>
            <div className="containerText">
            <h1>I'm <span>Sorry</span></h1>
            <p>Choose the <span>best excuses</span> for all kinds of situations</p>
            </div>
        </div>
      </div>
    </>
  )
}
