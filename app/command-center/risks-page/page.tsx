"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const TABS = ['By Bottleneck Type', 'By Department', 'By District', 'By Sector']

const BOTTLENECK_DATA = [
  { name: 'Land allocation', count: 11, color: '#ef4444' },
  { name: 'Environmental clearance', count: 7, color: '#f97316' },
  { name: 'Power connection', count: 5, color: '#fbbf24' },
  { name: 'Inter-department dependency', count: 4, color: '#fde68a' },
]

const AT_RISK_PROJECTS = [
  {
    id: 'WB-INV-003',
    sector: 'EV Components',
    investment: '420',
    delay: 41,
    bottleneck: 'Land allocation',
    risk: 'Critical',
    riskColor: '#ef4444',
  },
  {
    id: 'WB-INV-001',
    sector: 'Electronics',
    investment: '250',
    delay: 23,
    bottleneck: 'Land allocation',
    risk: 'High',
    riskColor: '#f97316',
  },
  {
    id: 'WB-INV-017',
    sector: 'Chemicals',
    investment: '320',
    delay: 28,
    bottleneck: 'Environmental',
    risk: 'High',
    riskColor: '#f97316',
  },
  {
    id: 'WB-INV-022',
    sector: 'Food Processing',
    investment: '180',
    delay: 19,
    bottleneck: 'Power connection',
    risk: 'Medium',
    riskColor: '#fbbf24',
  },
  {
    id: 'WB-INV-026',
    sector: 'Textiles',
    investment: '140',
    delay: 17,
    bottleneck: 'Inter-department',
    risk: 'Medium',
    riskColor: '#fbbf24',
  },
]

export default function RisksPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('By Bottleneck Type')

  const maxCount = Math.max(...BOTTLENECK_DATA.map(b => b.count))

  return (
    <main className="flex-1 overflow-y-auto p-2">
      <div className="space-y-2">
        {/* Header Card */}
        <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
          <div className="flex items-start gap-4 mb-6">
            <button
              onClick={() => router.push('/command-center')}
              className="w-11 h-11 rounded-xl bg-[#eaf6fd] flex items-center justify-center flex-shrink-0 hover:bg-[#d5eefb] transition-colors"
              aria-label="Back to command center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29ABE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-[#1a1f36] mb-1">AI Identified Bottlenecks</h1>
              <p className="text-sm text-[#6b7280]">Analysis of 27 at-risk projects</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-[#6b7280] hover:bg-gray-200 border border-[#e8eaef]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-2">
          {/* Bottleneck Chart */}
          <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
            <div className="space-y-5">
              {BOTTLENECK_DATA.map((bottleneck) => (
                <div key={bottleneck.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#6b7280]">{bottleneck.name}</span>
                    <span className="text-sm font-semibold text-[#1a1f36]">{bottleneck.count}</span>
                  </div>
                  <div className="h-8 bg-[#f0f2f7] rounded-lg overflow-hidden">
                    <div
                      className="h-full rounded-lg transition-all flex items-center justify-end pr-3"
                      style={{ 
                        width: `${(bottleneck.count / maxCount) * 100}%`,
                        backgroundColor: bottleneck.color
                      }}
                    >
                      <span className="text-sm font-bold text-white">{bottleneck.count}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insight Card */}
          <div className="bg-blue-50 rounded-xl border border-blue-200 p-7">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#1e40af] mb-2">AI Insight</h3>
                <p className="text-sm text-[#6b7280] leading-relaxed mb-4">
                  Land allocation is currently the largest source of industrial project delay in West Bengal.
                </p>
                <p className="text-sm text-[#1e40af] font-semibold">
                  11 projects representing ₹4,280 Cr of proposed investment are affected.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* At-Risk Projects Table */}
        <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
          <h2 className="text-sm font-semibold text-[#1a1f36] mb-4">Top 5 At-Risk Projects</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e8eaef]">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-[#6b7280] bg-[#f8f9fb]">Project ID</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-[#6b7280] bg-[#f8f9fb]">Sector</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-[#6b7280] bg-[#f8f9fb]">Investment (₹ Cr)</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-[#6b7280] bg-[#f8f9fb]">Delay (Days)</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-[#6b7280] bg-[#f8f9fb]">Bottleneck</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-[#6b7280] bg-[#f8f9fb]">Risk</th>
                </tr>
              </thead>
              <tbody>
                {AT_RISK_PROJECTS.map((project, index) => (
                  <tr 
                    key={project.id} 
                    className="border-b border-[#e8eaef] hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => router.push('/projects-details')}
                  >
                    <td className="py-3 px-4 text-sm font-medium text-[#1a1f36]">{project.id}</td>
                    <td className="py-3 px-4 text-sm text-[#6b7280]">{project.sector}</td>
                    <td className="py-3 px-4 text-sm text-[#6b7280]">{project.investment}</td>
                    <td className="py-3 px-4">
                      <span className="text-sm font-semibold text-red-600">{project.delay}</span>
                    </td>
                    <td className="py-3 px-4 text-sm text-[#6b7280]">{project.bottleneck}</td>
                    <td className="py-3 px-4">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: project.riskColor }}
                      >
                        {project.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
