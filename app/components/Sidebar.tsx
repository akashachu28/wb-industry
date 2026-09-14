'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  {
    id: 'investment',
    label: 'New Investment',
    href: '/new-investment',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
  },
  {
    id: 'command',
    label: 'Government Command Center',
    href: '/command-center',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    id: 'projects',
    label: 'Project Details',
    href: '/all-projects',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    id: 'brief',
    label: 'AI-Generated Ministerial Brief',
    href: '/ministerial-brief',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    id: 'chatbot',
    label: 'AI Chatbot',
    href: '/chatbot',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[240px] flex-shrink-0 bg-white border-r border-[#e8eaef] flex flex-col">
      <div className="px-5 flex justify-center py-3">
        <Image src="/images/mialoLogo.png" alt="Mialo Logo" width={80} height={30} />
      </div>

      <div className="h-px bg-[#e8eaef] mx-5" />

      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          // Check if current path matches or starts with the nav item href
          // Special case: Project Details tab should be active for both /all-projects and /projects-details
          const active = item.id === 'projects' 
            ? (pathname === item.href || pathname.startsWith(item.href + '/') || pathname === '/projects-details' || pathname.startsWith('/projects-details/'))
            : (pathname === item.href || pathname.startsWith(item.href + '/'))
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-colors ${
                active
                  ? 'bg-[#eaf6fd] text-[#29ABE2] font-medium'
                  : 'text-[#6b7280] hover:bg-gray-50 hover:text-[#1a1f36]'
              }`}
            >
              <span className={active ? 'text-[#29ABE2]' : 'text-[#9ca3af]'}>
                {item.icon}
              </span>
              <span className="leading-snug">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
