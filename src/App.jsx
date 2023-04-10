import { login } from './accessAPI'
import './app.css'
import { AiOutlineSecurityScan as Form, AiOutlineCheck as Success, AiOutlineMail as Email } from 'react-icons/ai'
import { MdOutlineDangerous as Danger } from 'react-icons/md'
import { BsKey as Password } from 'react-icons/bs'
import { useState } from 'react'

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = e => {
    const emailValue = e.target.value
    setEmail(emailValue)
  }

  const handlePassword = e => {
    const passwordValue = e.target.value
    setPassword(passwordValue)
  }

  const handleSubmit = () => {
    console.log('clicouuu')
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
            <i><Danger /></i>
            <h2>mensagem de erro</h2>
          </div>
          <div className="success__messege">
            <i><Success /></i>
            <h2>sucesso</h2>
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
            <button onClick={handleSubmit} disabled={email === '' || password.length < 6}>acessar</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
