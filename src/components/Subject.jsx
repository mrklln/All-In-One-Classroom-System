import Icon from '../components/Icon'
import Card from '../components/Card'
import AnnouncementList from '../components/AnnouncementList'
import { C } from '../theme'

export default function Subject({ subject, tab, setTab, go, toast }) {
  const tabs = ['Overview', 'Announcements', 'Activities']
  const pick = (t) => (t === 'Activities' ? go('tasks') : setTab(t))
  return (
    <div className="p-4">
      <div className="flex items-center gap-3 rounded-2xl p-3 text-white" style={{ background: C.mid }}>
        <span className="grid place-items-center w-16 h-16 rounded-xl shrink-0" style={{ background: C.icon }}>
          <Icon name={subject.icon} className="w-9 h-9 text-black" />
        </span>
        <div>
          <h2 className="text-xl font-extrabold">{subject.code}</h2>
          <p className="text-sm font-semibold">{subject.name}</p>
        </div>
      </div>

      <div className="flex justify-between mt-4 border-b border-gray-200" role="tablist">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => pick(t)}
            className="pb-1 text-sm font-bold border-b-[3px] transition-colors"
            style={{ color: tab === t ? C.dark : '#555', borderColor: tab === t ? C.dark : 'transparent' }}>
            {t}
          </button>
        ))}
      </div>

      {tab === 'Overview' && (
        <div className="mt-4 space-y-3">
           <Card icon="user" title={subject.professor.name} sub={subject.professor.role} onClick={() => toast('Professor profile opened')} />
          <button onClick={() => toast('Starting video call')}
            className="w-full flex items-center justify-center gap-3 rounded-xl py-3 font-bold text-white active:scale-[0.99] transition-transform"
            style={{ background: C.mid }}>
            <Icon name="video" className="w-6 h-6" />
          </button>
          <AnnouncementList />
        </div>
      )}
      {tab === 'Announcements' && <div className="mt-4"><AnnouncementList all /></div>}
    </div>
  )
}