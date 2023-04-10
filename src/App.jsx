import { login } from './accessAPI'
import './app.css'
import { AiOutlineSecurityScan as Form, AiOutlineMail as Email } from 'react-icons/ai'
import { BsKey as Password } from 'react-icons/bs'
import { useState } from 'react'

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [isRequest, setIsRequest] = useState(false)

  const handleEmail = e => {
    const emailValue = e.target.value
    setEmail(emailValue)
  }

  const handlePassword = e => {
    const passwordValue = e.target.value
    setPassword(passwordValue)
  }

  const handleSubmit = () => {

    setError(null)
    setIsRequest(true)

    let access = {email: email, password:password}
    login(access)
      .then(succ => {
        setSuccess(succ)
      })
      .catch(error => {
        setError(error)
      }).finally(() => setIsRequest(false))
  }

  return (
    
    <>
      <div className="wrapper">
        <div className="login__form">
          <div className="login__title">
            <i><Form /></i>
            <h1>validação de acesso</h1>
          </div>
          <div className="error__messege">
            {
              error && <h2>{error.messege}</h2>
            }
          </div>
          <div className="success__messege">
            {
              success && <h2>{success.messege}</h2>
            }
          </div>
          <div className="rows">
            <label htmlFor={'email'}><i><Email /></i>email</label>
            <input type={'email'} id={'email'} autoComplete="off" value={email} onChange={handleEmail} />
          </div>
          <div className="rows">
            <label htmlFor={'password'}><i><Password /></i>senha</label>
            <input type={'password'} id={'password'} value={password} onChange={handlePassword} />
          </div>
          <div className="form__btn">
            <button onClick={handleSubmit} disabled={email === '' || password.length < 6 || isRequest}>acessar</button>
          </div>
        </div>
      </div>
      <aside className='info'>
        <p>E-mail: email@email.com</p>
        <p>Senha: senha@123</p>
      </aside>
    </>

  )
}

export default App
