import { useState, useEffect } from 'react'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Drawer from './components/Drawer'
import Toast from './components/Toast'
import Login from './components/Login'
import Home from './components/Home'
import Subjects from './components/Subjects'
import Subject from './components/Subject'
import TaskList from './components/TaskList'
import Activities from './components/Activities'
import GroupChat from './components/GroupChat'
import ChatList from './components/ChatList'
import Profile from './components/Profile'
import ActivityDetail from './components/ActivityDetail'
import SubmitWork from './components/SubmitWork'
import Confirmation from './components/Confirmation'
import Settings from './components/Settings'
import { SUBJECTS, ACTIVITIES, TITLES } from './data'

export default function App() {
  const [screen, setScreen] = useState(() => localStorage.getItem('screen') || 'login')
  const [subject, setSubject] = useState(SUBJECTS[0])
  const [tab, setTab] = useState('Overview')
  const [activity, setActivity] = useState(ACTIVITIES[1])
  const [from, setFrom] = useState('tasks')
  const [submissions, setSubmissions] = useState({})
  const [drawer, setDrawer] = useState(false)
  const [message, setMessage] = useState('')

  const toast = (m) => { setMessage(m); setTimeout(() => setMessage(''), 1800) }
  const go = (s) => { setDrawer(false); setScreen(s) }
  const openSubject = (s) => { setSubject(s); setTab('Overview'); setScreen('subject') }
  const openChat = (s) => { setSubject(s); setScreen('chat') }
  const openActivity = (a, origin) => { setActivity(a); setFrom(origin); setScreen('detail') }
  const submitWork = (data) => { setSubmissions({ ...submissions, [activity.id]: data }); setScreen('done') }
  const removeSubmission = () => {
    const { [activity.id]: _removed, ...rest } = submissions
    setSubmissions(rest)
    toast('Submission removed')
  }
  const logout = () => { setDrawer(false); setScreen('login'); toast('You have been logged out') }

  const BACK_TO = { subject: 'subjects', chat: 'chats', tasks: 'subject', activities: 'subject', detail: from, submit: 'detail', done: 'detail', settings: 'profile' }
  const back = screen in BACK_TO
  const onBack = () => go(BACK_TO[screen])

  const [settings, setSettings] = useState({ notifications: true, reminders: true, sound: true, dark: false})
  
  useEffect(() => {
    localStorage.setItem('screen', screen)
  },[screen])

  return (
    <div className="min-h-screen grid place-items-center bg-gray-300 sm:p-4">
      <div className={`relative flex flex-col w-full sm:max-w-97.5 h-screen sm:h-200 app-surface sm:rounded-4xl sm:border-4 border-black overflow-hidden ${settings.dark ? 'dark' : ''}`}>
        {screen === 'login' ? (
          <Login onSuccess={() => setScreen('home')} />
        ) : (
          <>
            <Header title={screen === 'subject' ? subject.code : TITLES[screen]} back={back} onBack={onBack}
              onMenu={() => setDrawer(true)} onProfile={() => go('profile')} />
            <main className="flex-1 overflow-y-auto">
              {screen === 'home' && <Home go={go} openSubject={openSubject} />}
              {screen === 'subjects' && <Subjects openSubject={openSubject} />}
              {screen === 'subject' && <Subject subject={subject} tab={tab} setTab={setTab} go={go} toast={toast} />}
              {screen === 'tasks' && <TaskList openActivity={openActivity} submissions={submissions} />}
              {screen === 'activities' && <Activities openActivity={openActivity} submissions={submissions} />}
              {screen === 'detail' && <ActivityDetail activity={activity} submission={submissions[activity.id]} go={go} onRemove={removeSubmission} />}
              {screen === 'submit' && <SubmitWork activity={activity} go={go} onSubmit={submitWork} />}
              {screen === 'done' && <Confirmation activity={activity} submission={submissions[activity.id]} go={go} />}
              {screen === 'chats' && <ChatList openChat={openChat} />}
              {screen === 'chat' && <GroupChat key={subject.code} subject={subject} />}
              {screen === 'profile' && <Profile go={go} logout={logout} toast={toast} />}
              {screen === 'settings' && <Settings settings={settings} setSettings={setSettings} toast={toast} />}
            </main>
            <BottomNav screen={screen} go={go} />
          </>
        )}
        {drawer && <Drawer onClose={() => setDrawer(false)} go={go} logout={logout} />}
        <Toast message={message} />
      </div>
    </div>
  )
}