import Icon from './Icon'
import { C } from '../theme'

export default function Header({ title, back, onBack, onMenu, onProfile }) {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b-[3px] border-black bg-white">
      <div className="flex items-center gap-3">
        <button onClick={back ? onBack : onMenu} aria-label={back ? 'Go back' : 'Open menu'}
          className="p-1 rounded-lg active:bg-green-100">
          <Icon name={back ? 'back' : 'menu'} className="w-7 h-7" />
        </button>
        <h1 className="text-xl font-bold" style={{ color: C.dark }}>{title}</h1>
      </div>
      <button onClick={onProfile} aria-label="Profile" className="p-1 rounded-lg active:bg-green-100">
        <Icon name="user" className="w-7 h-7" />
      </button>
    </header>
  )
}