// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(initialName)
  const x = React.useRef('')

  React.useEffect(() => {
    x.current = name
  }, [name])
  function handleChange(event) {
    setName(event.target.value)
    // console.log('name in handler', name)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? (
        <strong>
          Hello {name} and you previous name was {x.current}
        </strong>
      ) : (
        'Please type your name'
      )}
    </div>
  )
}

function App() {
  return <Greeting initialName="Bob" />
}

export default App
