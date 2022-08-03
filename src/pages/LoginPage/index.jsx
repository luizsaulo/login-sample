import React from 'react'
import './styles.css'

export default function LoginPage() {
  const handleSubmit = () => {
    console.log('submit');
  }
  return (
    <div id='login'>
      <h1 className='title'>Login do sistema</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='field'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
        </div>
        <div className='field'>
          <label htmlFor='password'>Senha</label>
          <input type='password' name='password' id='password' />
        </div>
        <div className='actions'>
          <button type='submit'>Entrar</button>
        </div>
      </form>
    </div>
  )
}