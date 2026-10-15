// Sample content + navigation config. Replace with real data later.
export const SUBJECTS = [
  {
    code: 'ITEC 85',
    name: 'Information Assurance and Security 1',
    icon: 'laptop',
    professor: { name: 'Prof. Maria Santos', role: 'Professor' },
    chat: [
      { from: 'prof', text: 'Good morning everyone! Activity 2 is due on Sep. 14.', time: '8:00 AM' },
      { from: 'Ana Reyes', text: "Good morning, Ma'am! Noted po.", time: '8:01 AM' },
    ],
  },
  {
    code: 'ITEC 80',
    name: 'Human Computer Interaction',
    icon: 'monitor',
    professor: { name: 'Prof. Juan Reyes', role: 'Professor' },
    chat: [
      { from: 'prof', text: 'Good morning everyone! Activity 2 is due on Sep. 14.', time: '8:00 AM' },
      { from: 'Ana Reyes', text: "Good morning, Ma'am! Noted po.", time: '8:01 AM' },
    ],
  },
  {
    code: 'ITEC 90',
    name: 'Network Fundamentals',
    icon: 'network',
    professor: { name: 'Prof. Ana Cruz', role: 'Professor' },
    chat: [
      { from: 'prof', text: 'Good morning everyone! Activity 2 is due on Sep. 14.', time: '8:00 AM' },
      { from: 'Ana Reyes', text: "Good morning, Ma'am! Noted po.", time: '8:01 AM' },
    ],
  },
]

export const USER = {
  first: 'Juan',
  name: 'Juan Dela Cruz',
  id: '202612345',
  email: 'juan.delacruz@cvsu.edu.ph',
}

export const ACTIVITIES = [
  {
    id: 1, title: 'Activity 1 - Quiz', type: 'Quizzes', due: 'Sep. 13', icon: 'book', color: '#9b59d0', points: 20,
    description: 'Short quiz covering Modules 1 to 3 on confidentiality, integrity and availability. Upload your completed answer sheet.',
    steps: ['Review Modules 1 to 3', 'Answer all 20 items', 'Upload your answer sheet as a PDF'],
  },
  {
    id: 2, title: 'Activity 2 - Assignment', type: 'Assignments', due: 'Sep. 14', icon: 'clipboard', color: '#4caf50', points: 50,
    description: 'Write a one-page reflection on a real data breach and explain which security principle failed.',
    steps: ['Choose one real-world data breach', 'Explain what happened and which principle failed', 'Save your work as PDF or DOCX and upload it'],
  },
  {
    id: 3, title: 'Activity 3 - Project', type: 'Projects', due: 'Sep. 20', icon: 'folder', color: '#3b6fd4', points: 100,
    description: 'Create a simple security awareness poster for students and submit it with a short write-up.',
    steps: ['Design a poster on password safety', 'Add a half-page write-up of your design choices', 'Zip both files and upload'],
  },
]
export const ANNOUNCEMENTS = [
  { icon: 'speaker', title: 'Quiz on Friday', due: 'Sep. 13' },
  { icon: 'doc', title: 'New Module Posted', due: 'Sep. 10' },
]

export const TABS = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'subjects', label: 'Subjects', icon: 'book' },
  { id: 'chats', label: 'Chats', icon: 'chat' },   // was 'chat'
  { id: 'profile', label: 'Profile', icon: 'user' },
]
export const TAB_OF = { home: 'home', subjects: 'subjects', subject: 'subjects', tasks: 'subjects', activities: 'subjects', detail: 'subjects', submit: 'subjects', done: 'subjects', chats: 'chat', chat: 'chat', profile: 'profile', settings: 'profile' }
export const TITLES = { home: 'Home', subjects: 'My Subjects', tasks: 'Activities', activities: 'Activities', detail: 'Activity Details', submit: 'Submit Work', done: 'Submission', chat: 'Group Chat', profile: 'Profile', settings: 'Settings'}