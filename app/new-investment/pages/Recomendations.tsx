"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import wbMap from '../../../public/images/wb-map.png'

const LOCATIONS = [
  {
    name: 'Kharagpur Industrial Area',
    score: '91/100',
    color: '#16a34a',
    status: 'Best Fit',
    details: ['Land requirement satisfied', 'Power availability (50 MW)', 'Strong logistics connectivity', 'Electronics sector suitability', 'Applicable incentives'],
    badge: '11',
  },
  { 
    name: 'Uluberia Industrial Park', 
    score: '84/100', 
    color: '#2879e8',
    badge: '21',
  },
  { 
    name: 'Falta Special Economic Zone', 
    score: '77/100', 
    color: '#f58220',
    badge: '33',
  },
]

export default function Recomendations() {
  const router = useRouter()

  return (
    <main className="flex-1 overflow-y-auto p-2">
      <div className="flex gap-2 h-full">
        {/* Map Section */}
        <div className="flex-1 min-w-0 bg-white rounded-xl border border-[#e8eaef] p-7 flex flex-col">
          {/* Header with Back Button */}
          <div className="flex items-start gap-4 mb-7">
            <button
              onClick={() => router.push('/new-investment')}
              className="w-11 h-11 rounded-xl bg-[#eaf6fd] flex items-center justify-center flex-shrink-0 hover:bg-[#d5eefb] transition-colors"
              aria-label="Back to new investment"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29ABE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h2 className="text-xl font-semibold text-[#1a1f36]">AI Investment Recommendation</h2>
              <p className="text-sm text-[#6b7280] mt-0.5">
                Based on your requirements, here are the best matching industrial locations.
              </p>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative flex-1 overflow-hidden rounded-xl">
            <Image
              src="/images/wb-map.png?v=2"
              alt="West Bengal Map"
              fill
              className="object-cover"
              priority
              unoptimized
            />
            
            {/* Siliguri Label */}
            <div className="absolute left-[58%] top-[12%] flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#2c5282]" />
              <span className="text-sm font-medium text-[#2c5282]">Siliguri</span>
            </div>

            {/* Location 1: Kharagpur Industrial Area - Green */}
            <div className="absolute left-[28%] top-[52%]">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16a34a] text-sm font-bold text-white shadow-lg">
                  11
                </div>
                <div className="rounded-lg bg-[#16a34a] px-4 py-2 shadow-lg">
                  <div className="text-sm font-semibold text-white">Kharagpur Industrial Area</div>
                  <div className="text-xs text-white/90">Score: 91/100</div>
                </div>
              </div>
            </div>

            {/* Durgapur Label */}
            <div className="absolute left-[28%] top-[60%] flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#2c5282]" />
              <span className="text-sm font-medium text-[#2c5282]">Durgapur</span>
            </div>

            {/* Location 2: Uluberia Industrial Park - Blue */}
            <div className="absolute left-[35%] top-[68%]">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2879e8] text-sm font-bold text-white shadow-lg">
                  21
                </div>
                <div className="rounded-lg bg-[#2879e8] px-4 py-2 shadow-lg">
                  <div className="text-sm font-semibold text-white">Uluberia Industrial Park</div>
                  <div className="text-xs text-white/90">Score: 84/100</div>
                </div>
              </div>
            </div>

            {/* Location 3: Falta Special Economic Zone - Orange */}
            <div className="absolute left-[28%] top-[82%]">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f58220] text-sm font-bold text-white shadow-lg">
                  33
                </div>
                <div className="rounded-lg bg-[#f58220] px-4 py-2 shadow-lg">
                  <div className="text-sm font-semibold text-white">Falta Special Economic Zone</div>
                  <div className="text-xs text-white/90">Score: 77/100</div>
                </div>
              </div>
            </div>

            {/* Additional city markers */}
            <div className="absolute left-[18%] top-[78%]">
              <div className="h-1.5 w-1.5 rounded-full bg-[#e84a33]" />
            </div>
            <div className="absolute left-[22%] top-[82%]">
              <div className="h-1.5 w-1.5 rounded-full bg-[#e84a33]" />
            </div>
            <div className="absolute left-[25%] top-[88%] flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#e84a33]" />
              <span className="text-xs font-medium text-[#2c5282]">Haldia/Hijli/Khash</span>
            </div>
          </div>
        </div>

        {/* Right Panel - Details Section */}
        <div className="w-[420px] bg-white rounded-xl border border-[#e8eaef] flex-shrink-0 p-5 flex flex-col gap-4 overflow-y-auto">
          {/* Location Cards */}
          {LOCATIONS.map((location) => (
            <article 
              key={location.name} 
              onClick={() => {
                const locationId = location.name.toLowerCase().includes('kharagpur') ? 'kharagpur' 
                  : location.name.toLowerCase().includes('uluberia') ? 'uluberia' 
                  : 'falta'
                router.push(`/new-investment/location-analysis?location=${locationId}`)
              }}
              className="rounded-lg border border-[#e8eaef] bg-white p-4 hover:shadow-sm transition-shadow cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div 
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-bold text-white shadow-sm" 
                  style={{ backgroundColor: location.color }}
                >
                  {location.badge}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-[#1a1f36]">{location.name}</h3>
                    <svg 
                      className="h-4 w-4 text-[#9ca3af] flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="mt-1.5 flex items-center gap-2">
                    <span 
                      className="text-base font-bold" 
                      style={{ color: location.color }}
                    >
                      {location.score}
                    </span>
                    {location.status && (
                      <span className="rounded bg-[#d1fae5] px-2 py-0.5 text-[10px] font-semibold text-[#065f46]">
                        {location.status}
                      </span>
                    )}
                  </div>
                  {location.details && (
                    <ul className="mt-2.5 space-y-1">
                      {location.details.map((detail) => (
                        <li 
                          key={detail} 
                          className="flex items-start gap-1.5 text-xs text-[#6b7280]"
                        >
                          <svg 
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#16a34a]" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          ))}

          {/* AI Insight Card */}
          <div className="rounded-lg bg-[#eff6ff] p-4">
            <h3 className="text-sm font-semibold text-[#1e40af]">AI Insight</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#6b7280]">
              Kharagpur offers the strongest overall fit for your proposed electronics manufacturing facility based on land availability, infrastructure, power, logistics connectivity and sector incentives.
            </p>
            <p className="mt-3 text-xs font-semibold text-[#16a34a]">AI confidence: 89%</p>
          </div>
        </div>
      </div>

      {/* Investment Approval Pathway Section */}
      <div className="mt-4 bg-white rounded-xl border border-[#e8eaef] p-7">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#1a1f36]">Your Investment Approval Pathway</h2>
          <p className="text-sm text-[#6b7280] mt-1">
            Step-by-step approvals for an Electronics Manufacturing unit in West Bengal.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="rounded-lg bg-[#f8f9fb] p-4">
            <div className="text-3xl font-bold text-[#29ABE2]">8</div>
            <div className="text-xs text-[#6b7280] mt-1">Key Approvals</div>
          </div>
          <div className="rounded-lg bg-[#f8f9fb] p-4">
            <div className="text-3xl font-bold text-[#29ABE2]">6-9 months</div>
            <div className="text-xs text-[#6b7280] mt-1">Indicative Timeline</div>
          </div>
          <div className="rounded-lg bg-[#f8f9fb] p-4">
            <div className="text-3xl font-bold text-[#29ABE2]">20+</div>
            <div className="text-xs text-[#6b7280] mt-1">Departments & Touchpoints</div>
          </div>
          <div className="rounded-lg bg-[#f8f9fb] p-4">
            <div className="text-3xl font-bold text-[#29ABE2]">1</div>
            <div className="text-xs text-[#6b7280] mt-1">Single Window (Shilpasathi)</div>
          </div>
        </div>

        {/* Approval Steps */}
        <div className="space-y-3">
          {/* Step 1 */}
          <div className="flex items-center gap-4 rounded-lg border border-[#e8eaef] p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#29ABE2] text-base font-bold text-white">
                  1
                </div>
                {/* Connecting line */}
                <div className="absolute left-1/2 top-full h-3 w-0.5 -translate-x-1/2 bg-[#29ABE2]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#1a1f36]">Land Allocation</h3>
                <p className="text-xs text-[#6b7280] mt-0.5">WBIDC / WBSIDC</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#6b7280]">Documents: 5</p>
                <p className="text-xs text-[#6b7280]">Timeline: 60 days</p>
              </div>
            </div>
            <button className="rounded-lg bg-[#f8f9fb] px-4 py-2 text-xs font-medium text-[#6b7280] hover:bg-[#eef0f4] transition-colors flex items-center gap-2">
              To Apply
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4 rounded-lg border border-[#e8eaef] p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#29ABE2] text-base font-bold text-white">
                  2
                </div>
                <div className="absolute left-1/2 top-full h-3 w-0.5 -translate-x-1/2 bg-[#29ABE2]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#1a1f36]">Environmental Clearance</h3>
                <p className="text-xs text-[#6b7280] mt-0.5">WBPCB / MoEF&CC (if required)</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#6b7280]">Documents: 7</p>
                <p className="text-xs text-[#6b7280]">Timeline: 45 days</p>
              </div>
            </div>
            <button className="rounded-lg bg-[#f8f9fb] px-4 py-2 text-xs font-medium text-[#6b7280] hover:bg-[#eef0f4] transition-colors flex items-center gap-2">
              To Apply
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4 rounded-lg border border-[#e8eaef] p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#29ABE2] text-base font-bold text-white">
                  3
                </div>
                <div className="absolute left-1/2 top-full h-3 w-0.5 -translate-x-1/2 bg-[#29ABE2]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#1a1f36]">Power Connection</h3>
                <p className="text-xs text-[#6b7280] mt-0.5">WBSEDCL</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#6b7280]">Documents: 6</p>
                <p className="text-xs text-[#6b7280]">Timeline: 30 days</p>
              </div>
            </div>
            <button className="rounded-lg bg-[#f8f9fb] px-4 py-2 text-xs font-medium text-[#6b7280] hover:bg-[#eef0f4] transition-colors flex items-center gap-2">
              To Apply
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Step 4 */}
          <div className="flex items-center gap-4 rounded-lg border border-[#e8eaef] p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#29ABE2] text-base font-bold text-white">
                  4
                </div>
                <div className="absolute left-1/2 top-full h-3 w-0.5 -translate-x-1/2 bg-[#29ABE2]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#1a1f36]">Water Connection</h3>
                <p className="text-xs text-[#6b7280] mt-0.5">PHED / Local Body</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#6b7280]">Documents: 4</p>
                <p className="text-xs text-[#6b7280]">Timeline: 30 days</p>
              </div>
            </div>
            <button className="rounded-lg bg-[#f8f9fb] px-4 py-2 text-xs font-medium text-[#6b7280] hover:bg-[#eef0f4] transition-colors flex items-center gap-2">
              To Apply
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Step 5 */}
          <div className="flex items-center gap-4 rounded-lg border border-[#e8eaef] p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#29ABE2] text-base font-bold text-white">
                  5
                </div>
                <div className="absolute left-1/2 top-full h-3 w-0.5 -translate-x-1/2 bg-[#29ABE2]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#1a1f36]">Factory / Building Plan Approval</h3>
                <p className="text-xs text-[#6b7280] mt-0.5">UO & MA / Factories</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#6b7280]">Documents: 8</p>
                <p className="text-xs text-[#6b7280]">Timeline: 45 days</p>
              </div>
            </div>
            <button className="rounded-lg bg-[#f8f9fb] px-4 py-2 text-xs font-medium text-[#6b7280] hover:bg-[#eef0f4] transition-colors flex items-center gap-2">
              To Apply
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Step 6 */}
          <div className="flex items-center gap-4 rounded-lg border border-[#e8eaef] p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#29ABE2] text-base font-bold text-white">
                  6
                </div>
                <div className="absolute left-1/2 top-full h-3 w-0.5 -translate-x-1/2 bg-[#29ABE2]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#1a1f36]">Fire Safety Recommendation</h3>
                <p className="text-xs text-[#6b7280] mt-0.5">Fire & Emergency Services</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#6b7280]">Documents: 5</p>
                <p className="text-xs text-[#6b7280]">Timeline: 30 days</p>
              </div>
            </div>
            <button className="rounded-lg bg-[#f8f9fb] px-4 py-2 text-xs font-medium text-[#6b7280] hover:bg-[#eef0f4] transition-colors flex items-center gap-2">
              To Apply
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Step 7 */}
          <div className="flex items-center gap-4 rounded-lg border border-[#e8eaef] p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#29ABE2] text-base font-bold text-white">
                  7
                </div>
                <div className="absolute left-1/2 top-full h-3 w-0.5 -translate-x-1/2 bg-[#29ABE2]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#1a1f36]">Labour & Statutory Registrations</h3>
                <p className="text-xs text-[#6b7280] mt-0.5">Labour Department</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#6b7280]">Documents: 6</p>
                <p className="text-xs text-[#6b7280]">Timeline: 15 days</p>
              </div>
            </div>
            <button className="rounded-lg bg-[#f8f9fb] px-4 py-2 text-xs font-medium text-[#6b7280] hover:bg-[#eef0f4] transition-colors flex items-center gap-2">
              To Apply
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Step 8 */}
          <div className="flex items-center gap-4 rounded-lg border border-[#e8eaef] p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#29ABE2] text-base font-bold text-white">
                8
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#1a1f36]">Incentive Application</h3>
                <p className="text-xs text-[#6b7280] mt-0.5">Industry Department</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#6b7280]">Documents: 5</p>
                <p className="text-xs text-[#6b7280]">Timeline: 30 days</p>
              </div>
            </div>
            <button className="rounded-lg bg-[#f8f9fb] px-4 py-2 text-xs font-medium text-[#6b7280] hover:bg-[#eef0f4] transition-colors flex items-center gap-2">
              To Apply
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
