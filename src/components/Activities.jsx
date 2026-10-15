import { useState } from 'react'
import Row from '../components/Row'
import Chips from '../components/Chips'
import { C } from '../theme'
import { ACTIVITIES } from '../data'

export default function Activities({ openActivity, submissions }) {
  const [filter, setFilter] = useState('All')
  const list = ACTIVITIES.filter((a) => filter === 'All' || a.type === filter)
  return (
    <div className="p-4">
      <h2 className="text-2xl font-extrabold" style={{ color: C.dark }}>Subject: ITEC 85</h2>
      <Chips filter={filter} setFilter={setFilter} />
      <div className="space-y-3">
        {list.map((a) => (
          <Row key={a.id} icon={a.icon} title={a.title} sub={`Due: ${a.due}`}
            status={Boolean(submissions[a.id])} onClick={() => openActivity(a, 'activities')} />
        ))}
        {list.length === 0 && <p className="text-center text-gray-500">No activities in this category yet.</p>}
      </div>
    </div>
  )
}