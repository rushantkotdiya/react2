
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>welcome to Home page</h1>
      <li>
        <Link to='/about'>About</Link>

      </li>

    </div>
  )
}
