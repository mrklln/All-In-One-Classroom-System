// Inline SVG icons, no extra packages needed
const PATHS = {
  menu: 'M3 6h18M3 12h18M3 18h18',
  back: 'M19 12H5M12 19l-7-7 7-7',
  home: 'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z',
  book: 'M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8z',
  chat: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  go: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 12h8M12 8l4 4-4 4',
  laptop: 'M4 5h16v11H4zM2 20h20',
  monitor: 'M3 4h18v12H3zM8 20h8M12 16v4',
  network: 'M5 3h6v6H5zM13 15h6v6h-6zM8 9v3h8v3',
  clipboard: 'M9 3h6v3H9zM6 5H5v16h14V5h-1M9 13l2 2 4-4',
  folder: 'M3 6a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  speaker: 'M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14',
  doc: 'M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6',
  send: 'M22 2 11 13M22 2l-7 20-4-9-9-4z',
  edit: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z',
  settings: 'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6',
  logout: 'M9 21H5V3h4M16 17l5-5-5-5M21 12H9',
  eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  lock: 'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4',
  cap: 'M22 10 12 5 2 10l10 5zM6 12v5c3 2 9 2 12 0v-5',
  calendar: 'M3 5h18v16H3zM16 3v4M8 3v4M3 10h18',
  check: 'M20 6 9 17l-5-5',
  x: 'M18 6 6 18M6 6l12 12',
  video: 'M2 6h13v12H2zM15 10l7-4v12l-7-4z',
  chev: 'M9 18l6-6-6-6',
  moon: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
}

export default function Icon({ name, className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  )
}