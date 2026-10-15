import { useState } from 'react'
import Icon from '../components/Icon'
import { C } from '../theme'
import { USER } from '../data'

export default function Login({ onSuccess }) {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [ok, setOk] = useState(false)

  const submit = () => {
    if (!id.trim() || !pw.trim()) return setError('Enter your ID or email and your password.')
    setError('')
    setOk(true)
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 relative">
      <span style={{ color: '#0a7d0a' }}><Icon name="cap" className="w-24 h-24" /></span>
      <h1 className="mt-2 text-2xl font-extrabold text-center leading-tight">All-In-One<br />Classroom System</h1>
      <p className="mt-8 mb-3 font-semibold text-gray-500">Login to continue</p>

      <label className="w-full flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2.5">
        <Icon name="user" className="w-4 h-4 text-gray-600" />
        <input value={id} onChange={(e) => setId(e.target.value)} placeholder="Student/Professor ID or Email"
          className="flex-1 bg-transparent outline-none text-sm" />
      </label>
      <label className="w-full flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2.5 mt-3">
        <Icon name="lock" className="w-4 h-4 text-gray-600" />
        <input value={pw} onChange={(e) => setPw(e.target.value)} type={show ? 'text' : 'password'} placeholder="Password"
          onKeyDown={(e) => e.key === 'Enter' && submit()} className="flex-1 bg-transparent outline-none text-sm" />
        <button onClick={() => setShow(!show)} aria-label="Show password" type="button">
          <Icon name="eye" className="w-4 h-4 text-gray-600" />
        </button>
      </label>

      {error && <p className="mt-3 text-sm text-red-700 text-center" role="alert">{error}</p>}

      <button onClick={submit} className="mt-6 rounded-full px-12 py-3 text-sm font-bold text-white active:scale-95 transition-transform"
        style={{ background: C.dark }}>LOGIN</button>
      <button className="mt-4 text-xs font-semibold text-indigo-900">Forgot Password?</button>

      {ok && (
        <div className="absolute inset-0 grid place-items-center bg-black/40 px-8">
          <div className="w-full rounded-3xl bg-white p-6 text-center shadow-xl">
            <span className="mx-auto grid place-items-center w-14 h-14 rounded-full text-white" style={{ background: C.mid }}>
              <Icon name="check" className="w-8 h-8" />
            </span>
            <p className="mt-3 text-lg font-bold" style={{ color: C.dark }}>Login Successful</p>
            <p className="text-gray-600">Welcome back, {USER.first}!</p>
            <button onClick={onSuccess} className="mt-5 w-full rounded-full py-3 font-bold text-white" style={{ background: C.dark }}>
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  )
}