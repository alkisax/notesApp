import PropTypes from 'prop-types'
import loginService from '../services/login'
import noteService from '../services/notes'

  const LoginForm = ({ 
    // handleLogin,
    setUser,
    username, 
    password, 
    setUsername, 
    setPassword, 
    setErrorMessage
  }) => {

    const handleLogin = async (event) => {
      event.preventDefault()
      try {
        const user = await loginService.login({
          username, password,
        })
  
        window.localStorage.setItem(
          'loggedNoteappUser', JSON.stringify(user)
        ) 
        noteService.setToken(user.token)
        setUser(user)
        setUsername('')
        setPassword('')
      } catch (exception) {
        setErrorMessage(`Wrong credentials, ${exception.message}`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }  
    }

    return (
      <div className="bg-secondary p-4 rounded">
        <h2 className="text-center text-white">Login</h2>
        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-light">Username</label>
            <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
              autoComplete="username"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-light">Password</label>
            <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
              autoComplete="current-password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-light w-100">Login</button>
        </form>
      </div>
    ) 
  }

  LoginForm.propTypes = {
    setUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setErrorMessage: PropTypes.func.isRequired
  }

  export default LoginForm