import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const inputRef = React.useRef(null)

  const handleChange = () => {
    const input = inputRef.current.value
    const isValid = input === input.toLowerCase()

    setError(isValid ? null : 'Username must be lowercase')
  }

  const handleSubmit = event => {
    event.preventDefault()
    const username = inputRef.current.value
    onSubmitUsername(username)
  }

  return (
    <>
      <h2 style={{color: 'red'}}>{error}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            id="username"
            ref={inputRef}
          />
        </div>
        <button type="submit" disabled={Boolean(error)}>
          Submit
        </button>
      </form>
    </>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
