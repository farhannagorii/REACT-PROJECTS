import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [checked, setchecked] = useState({
    name: false,
    email: false,
    phone: false
  })

  let onchange = (e) => {
    setchecked({ ...checked,
                 [e.target.name]: e.target.checked })
  }

  return (
    <> 
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" name="name" checked={checked.name} onChange={onchange}
            id="checkbox" />
          Check me
        </label>
      </div>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" name="email" checked={checked.email} onChange={onchange}
            id="checkbox" />
          Check me
        </label>
      </div>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" name="phone" checked={checked.phone} onChange={onchange}
            id="checkbox" />
          Check me
        </label>
      </div>

      {checked.name && <p>Name is checked</p>}
      {checked.email && <p>Email is checked</p>}
      {checked.phone && <p>Phone is checked</p>}
      {checked.name && checked.email && checked.phone && <p>All are checked</p>}
    </>
  )
}

export default App
