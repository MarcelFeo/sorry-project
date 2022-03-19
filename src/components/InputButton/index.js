import React, { useState } from 'react'
import "./styles.css"

const BASEURL = "https://excuser.herokuapp.com/v1/excuse";

export default function InputButton() {
  // states  
  const [value, setValue] = useState();
  const [data, setData] = useState([]);

  async function api() {
    const response = await fetch(`${BASEURL}/${value}`);
    const json = await response.json();

    setData(json)
    console.log(data);
  }

  return (
    <>
        <div className="containerInput">
            <div className="containerContentInput">
                <select id="category" name="category" value={"family"} onChange={(e) => setValue(e.target.value)}>
                    <option value="family">Family</option>
                    <option value="office">Office</option>
                    <option value="children">Children</option>
                    <option value="college">College</option>
                    <option value="party">Party</option>
                </select>
                <button onClick={api}>Confirmar</button>
            </div>
        </div>
    </>
  )
}
