import { useState } from 'react'
import Icon from './Icon'
import { C } from '../theme'
import { USER } from '../data/index'

export default function Profile({ go, logout, toast }) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(USER.name)
  const [email, setEmail] = useState(USER.email)
  const save = () => { setEditing(false); toast('Profile saved') }
  return (
    <div className="p-6 flex flex-col items-center">
      <span className="grid place-items-center w-36 h-36 rounded-full bg-gray-500 text-white overflow-hidden">
        <Icon name="user" className="w-24 h-24" />
      </span>
      {editing ? (
        <div className="w-full mt-4 space-y-2">
          <input value={name} onChange={(e) => setName(e.target.value)} aria-label="Name"
            className="w-full rounded-xl bg-gray-200 px-4 py-2 text-center font-bold outline-none" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email"
            className="w-full rounded-xl bg-gray-200 px-4 py-2 text-center outline-none" />
        </div>
      ) : (
        <div className="mt-3 text-center">
          <h2 className="text-2xl font-extrabold">{name}</h2>
          <p className="font-semibold text-gray-500">Student ID: {USER.id}</p>
          <p className="font-semibold text-gray-500">Email: {email}</p>
        </div>
      )}
      <div className="w-full mt-5 space-y-3">
        <button onClick={editing ? save : () => setEditing(true)}
          className="w-full flex items-center justify-center gap-3 rounded-xl py-3 font-bold text-white" style={{ background: C.mid }}>
          <Icon name={editing ? 'check' : 'edit'} className="w-5 h-5" />{editing ? 'Save Changes' : 'Edit Profile'}
        </button>
        <button onClick={() => go('settings')} className="w-full flex items-center justify-center gap-3 rounded-xl py-3 font-bold"
          style={{ background: C.card }}>
          <Icon name="settings" className="w-5 h-5" />Settings
        </button>
        <button onClick={logout} className="w-full flex items-center justify-center gap-3 rounded-xl py-3 font-bold"
          style={{ background: C.card }}>
          <Icon name="logout" className="w-5 h-5" />Logout
        </button>
      </div>
    </div>
  )
}