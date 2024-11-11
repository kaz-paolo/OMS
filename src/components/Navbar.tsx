'use client'

import logo from './logo.svg'
import dropdown from './dropdown.svg'

export default function Navbar() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
              <button><img alt="" src={logo}className="h-8 w-auto"/></button>
          </div>
          <div className="lg:flex lg:justify-end">
            <button><img alt="" src={dropdown} className="h-8 w-auto"/></button>
          </div>
        </nav>
      </header>
      </div>
  )
}
