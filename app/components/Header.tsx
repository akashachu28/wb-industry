export default function Header() {
  return (
    <header className="h-14 flex-shrink-0 bg-white border-b border-[#e8eaef] flex items-center justify-between px-8">
      <h1 className="text-lg font-semibold text-[#1a1f36] tracking-tight">
        Bengal Industrial Intelligence
      </h1>
      <button className="w-9 h-9 rounded-full bg-[#e8eaef] flex items-center justify-center hover:bg-[#dde0ea] transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </button>
    </header>
  )
}
