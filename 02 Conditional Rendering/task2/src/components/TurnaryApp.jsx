import React from 'react'
const age=12;
export default function TurnaryApp() {
const chk=age>=18 ? <h1>i am eligible for voting</h1> : <h1>i am not eligible for voting</h1>

  return (
    <div>
        <h4>{chk}</h4>
    </div>
  )
}
