import './app.css'
import { AiOutlineSecurityScan as Form, AiOutlineCheck as Success } from 'react-icons/ai'
import { MdOutlineDangerous as Danger } from 'react-icons/md'

function App() {

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
            <label htmlFor={'email'}>email</label>
            <input type={'email'} id={'email'} autoComplete="off" />
          </div>
          <div className="rows">
            <label htmlFor={'password'}>senha</label>
            <input type={'password'} id={'password'} />
          </div>
          <div className="form__btn">
            <button>acessar</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
