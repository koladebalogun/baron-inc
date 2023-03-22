import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div>
      <nav>
        <ul>
          <Link href='/'>Home</Link>
        </ul>
      </nav>
    </div>
  )
}
