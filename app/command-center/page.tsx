"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const STAT_CARDS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#29ABE2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><line x1="12" y1="6" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="18"/>
      </svg>
    ),
    iconBg: '#eaf6fd',
    cardBg: '#f0f9ff',
    border: '#bae6fd',
    label: 'Total Investment Pipeline',
    value: '₹18,420 Cr',
    trend: '+12%',
    positive: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
      </svg>
    ),
    iconBg: '#dcfce7',
    cardBg: '#f0fdf4',
    border: '#bbf7d0',
    label: 'Active Projects',
    value: '143',
    trend: '+8%',
    positive: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    iconBg: '#fef3c7',
    cardBg: '#fffbeb',
    border: '#fde68a',
    label: 'At Risk',
    value: '27',
    trend: '-6%',
    positive: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    iconBg: '#fee2e2',
    cardBg: '#fef2f2',
    border: '#fecaca',
    label: 'Critical Bottlenecks',
    value: '8',
    trend: '-33%',
    positive: false,
  },
]

const PIE_DATA = [
  { name: 'On Track', value: 88, color: '#22c55e' },
  { name: 'At Risk', value: 27, color: '#f59e0b' },
  { name: 'Delayed', value: 12, color: '#ef4444' },
  { name: 'Completed', value: 6, color: '#3b82f6' },
]

const SECTORS = [
  { name: 'Electronics', value: 4820, max: 4820 },
  { name: 'Automotive & EV', value: 3250, max: 4820 },
  { name: 'Food Processing', value: 2410, max: 4820 },
  { name: 'Chemicals & Petrochem', value: 1980, max: 4820 },
  { name: 'Textiles & Apparel', value: 1520, max: 4820 },
  { name: 'Renewable Energy', value: 1290, max: 4820 },
  { name: 'Others', value: 3200, max: 4820 },
]

// West Bengal approximate SVG path
const WB_PATH = "M 310 30 L 340 25 L 380 40 L 400 65 L 420 55 L 440 70 L 450 95 L 440 120 L 460 145 L 450 175 L 430 195 L 445 220 L 440 250 L 420 275 L 430 300 L 415 325 L 400 350 L 380 370 L 360 385 L 335 395 L 310 400 L 290 415 L 265 425 L 240 420 L 215 410 L 195 395 L 180 375 L 165 355 L 150 330 L 145 305 L 155 280 L 170 260 L 160 235 L 150 210 L 165 185 L 175 160 L 165 135 L 170 110 L 185 90 L 210 75 L 235 60 L 260 50 L 285 40 Z"

const PROJECT_DOTS = [
  // Siliguri area (north)
  { x: 370, y: 55, status: 'ontrack' },
  { x: 350, y: 70, status: 'completed' },
  { x: 390, y: 80, status: 'atrisk' },
  // Durgapur area (west-central)
  { x: 210, y: 245, status: 'ontrack' },
  { x: 225, y: 260, status: 'atrisk' },
  { x: 195, y: 270, status: 'ontrack' },
  { x: 240, y: 275, status: 'delayed' },
  // Asansol area
  { x: 185, y: 295, status: 'ontrack' },
  { x: 200, y: 310, status: 'atrisk' },
  { x: 175, y: 320, status: 'ontrack' },
  // Central Bengal
  { x: 280, y: 200, status: 'ontrack' },
  { x: 300, y: 215, status: 'delayed' },
  { x: 265, y: 225, status: 'atrisk' },
  { x: 315, y: 230, status: 'ontrack' },
  { x: 285, y: 250, status: 'ontrack' },
  { x: 250, y: 240, status: 'completed' },
  { x: 270, y: 265, status: 'ontrack' },
  { x: 295, y: 270, status: 'atrisk' },
  { x: 310, y: 285, status: 'ontrack' },
  // Near Kolkata
  { x: 290, y: 330, status: 'ontrack' },
  { x: 305, y: 345, status: 'completed' },
  { x: 275, y: 350, status: 'ontrack' },
  { x: 315, y: 360, status: 'delayed' },
  { x: 260, y: 370, status: 'ontrack' },
  { x: 285, y: 375, status: 'atrisk' },
  // South Bengal / Haldia
  { x: 300, y: 400, status: 'ontrack' },
  { x: 270, y: 395, status: 'ontrack' },
  { x: 315, y: 385, status: 'atrisk' },
  // Additional scatter
  { x: 340, y: 160, status: 'ontrack' },
  { x: 360, y: 185, status: 'ontrack' },
  { x: 325, y: 195, status: 'delayed' },
  { x: 350, y: 210, status: 'ontrack' },
  { x: 335, y: 300, status: 'completed' },
  { x: 220, y: 185, status: 'ontrack' },
  { x: 240, y: 200, status: 'atrisk' },
]

const STATUS_COLOR: Record<string, string> = {
  ontrack: '#22c55e',
  atrisk: '#f59e0b',
  delayed: '#ef4444',
  completed: '#3b82f6',
}

const CustomLabel = ({ cx, cy }: { cx: number; cy: number }) => (
  <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central">
    <tspan x={cx} dy="-6" fontSize="22" fontWeight="700" fill="#1a1f36">143</tspan>
    <tspan x={cx} dy="20" fontSize="11" fill="#9ca3af">Total</tspan>
  </text>
)
const Page = () => {
  const router = useRouter()
  
  return (
    <main className="flex-1 overflow-y-auto p-4">
      <div className="space-y-4">
        {/* Page header */}
        <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-[#1a1f36]">Government Command Center</h2>
              <p className="text-sm text-[#6b7280] mt-0.5">Overview of ongoing and completed projects across West Bengal.</p>
            </div>
            <button className="flex items-center gap-2 border border-[#e8eaef] bg-white rounded-lg px-3.5 py-2 text-sm text-[#1a1f36] hover:bg-gray-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>Apr 2024 – Mar 2025</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-4 gap-4">
            {STAT_CARDS.map((card) => (
              <div 
                key={card.label} 
                className={`rounded-xl border p-5 ${card.label === 'At Risk' ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
                style={{ background: card.cardBg, borderColor: card.border }}
                onClick={() => card.label === 'At Risk' && router.push('/command-center/risks-page')}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: card.iconBg }}>
                  {card.icon}
                </div>
                <p className="text-xs text-[#6b7280] mb-1">{card.label}</p>
                <p className="text-2xl font-bold text-[#1a1f36] mb-1">{card.value}</p>
                <p className={`text-xs font-medium flex items-center gap-1 ${card.positive ? 'text-[#16a34a]' : 'text-[#dc2626]'}`}>
                  {card.positive ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="18 15 12 9 6 15"/></svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                  )}
                  {card.trend} vs last year
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
          {/* Map */}
          <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
            <h3 className="text-sm font-semibold text-[#1a1f36] mb-4">Project Locations</h3>
            {/* Legend */}
            <div className="flex gap-5 mb-4">
              {[
                { label: 'On Track', color: '#22c55e' },
                { label: 'At Risk', color: '#f59e0b' },
                { label: 'Delayed', color: '#ef4444' },
                { label: 'Completed', color: '#3b82f6' },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-1.5 text-xs text-[#6b7280]">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: l.color }} />
                  {l.label}
                </div>
              ))}
            </div>
            {/* Map with image background + SVG dot overlay */}
            <div className="relative rounded-xl overflow-hidden" style={{ height: 380 }}>
              {/* Map image background */}
              <img
                src="https://images.unsplash.com/photo-1736117704452-46670dd0c81f?w=900&h=500&fit=crop&auto=format"
                alt="Topographic map background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Tint overlay for readability */}
              <div className="absolute inset-0 bg-sky-50/60" />
              {/* SVG overlay with state shape + dots */}
              <svg viewBox="140 20 330 430" width="100%" height="100%" className="absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                {/* State silhouette */}
                <path d={WB_PATH} fill="#bfdbfe" fillOpacity="0.45" stroke="#60a5fa" strokeWidth="1.5"/>
                {/* City labels */}
                <text x="375" y="50" fontSize="9" fill="#1e40af" fontFamily="Inter, sans-serif" fontWeight="600">Siliguri</text>
                <text x="210" y="238" fontSize="9" fill="#1e40af" fontFamily="Inter, sans-serif" fontWeight="600">Durgapur</text>
                <text x="162" y="295" fontSize="9" fill="#1e40af" fontFamily="Inter, sans-serif" fontWeight="600">Asansol</text>
                <text x="300" y="342" fontSize="9" fill="#1e40af" fontFamily="Inter, sans-serif" fontWeight="600">Kolkata</text>
                <text x="270" y="415" fontSize="9" fill="#1e40af" fontFamily="Inter, sans-serif" fontWeight="600">Haldia</text>
                {/* Project dots */}
                {PROJECT_DOTS.map((dot, i) => (
                  <circle
                    key={i}
                    cx={dot.x}
                    cy={dot.y}
                    r="5.5"
                    fill={STATUS_COLOR[dot.status]}
                    opacity="0.95"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                ))}
              </svg>
              {/* Zoom buttons */}
              <div className="absolute bottom-3 right-3 flex flex-col gap-1">
                {['+', '−'].map((s) => (
                  <button key={s} className="w-7 h-7 bg-white/90 rounded border border-[#e8eaef] text-sm text-[#6b7280] flex items-center justify-center hover:bg-white shadow-sm backdrop-blur-sm">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Donut chart */}
            <div className="bg-white rounded-xl border border-[#e8eaef] p-5">
              <h3 className="text-sm font-semibold text-[#1a1f36] mb-4">Projects by Status</h3>
              <div className="flex items-center gap-4">
                <div style={{ width: 140, height: 140 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={PIE_DATA}
                        cx="50%"
                        cy="50%"
                        innerRadius={42}
                        outerRadius={65}
                        paddingAngle={2}
                        dataKey="value"
                        labelLine={false}
                        label={<CustomLabel cx={70} cy={70} />}
                      >
                        {PIE_DATA.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ fontSize: 12, border: '1px solid #e8eaef', borderRadius: 8 }}
                        formatter={(value) => [value ?? 0, '']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-col gap-2.5 flex-1">
                  {PIE_DATA.map((d) => (
                    <div key={d.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                        <span className="text-xs text-[#6b7280]">{d.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-[#1a1f36]">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sector bar chart */}
            <div className="bg-white rounded-xl border border-[#e8eaef] p-5 flex-1">
              <h3 className="text-sm font-semibold text-[#1a1f36] mb-4">Sector-wise Investment (₹ Cr)</h3>
              <div className="flex flex-col gap-3">
                {SECTORS.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-[#6b7280] truncate pr-2">{s.name}</span>
                      <span className="text-xs font-medium text-[#1a1f36] flex-shrink-0">{s.value.toLocaleString()}</span>
                    </div>
                    <div className="h-1.5 bg-[#f0f2f7] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#29ABE2] rounded-full transition-all"
                        style={{ width: `${(s.value / s.max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
