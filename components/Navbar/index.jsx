import React from 'react'
import Link from 'next/link'

export default function Navbar() {
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
