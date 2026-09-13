"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const LOCATION_DATA: Record<string, {
  park_id: string
  park_name: string
  district: string
  total_area_acres: number
  available_area_acres: number
  dominant_sectors: string
  power_capacity_mw_demo: number
  water: string
  road: string
  rail: string
  logistics: string
  pollution_suitability: string
  infrastructure_score: number
  score: string
  color: string
  badge: string
}> = {
  'kharagpur': {
    park_id: "P010",
    park_name: "Kharagpur Industrial Area",
    district: "Paschim Medinipur",
    total_area_acres: 1000,
    available_area_acres: 190,
    dominant_sectors: "Engineering, Electronics, Auto Components",
    power_capacity_mw_demo: 200,
    water: "High",
    road: "High",
    rail: "High",
    logistics: "Road/Rail",
    pollution_suitability: "A/B",
    infrastructure_score: 89,
    score: "91/100",
    color: "#16a34a",
    badge: "11"
  },
  'uluberia': {
    park_id: "P016",
    park_name: "Uluberia Industrial Area",
    district: "Howrah",
    total_area_acres: 620,
    available_area_acres: 85,
    dominant_sectors: "Engineering, Auto Components, Logistics",
    power_capacity_mw_demo: 170,
    water: "High",
    road: "High",
    rail: "High",
    logistics: "Road/Rail",
    pollution_suitability: "A/B",
    infrastructure_score: 92,
    score: "84/100",
    color: "#2879e8",
    badge: "21"
  },
  'falta': {
    park_id: "P014",
    park_name: "Falta Industrial Park",
    district: "South 24 Parganas",
    total_area_acres: 850,
    available_area_acres: 175,
    dominant_sectors: "Engineering, Chemicals, Food Processing",
    power_capacity_mw_demo: 160,
    water: "High",
    road: "High",
    rail: "High",
    logistics: "Road/Port",
    pollution_suitability: "A/B",
    infrastructure_score: 84,
    score: "77/100",
    color: "#f58220",
    badge: "33"
  }
}

function LocationAnalysisContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const locationId = searchParams.get('location') || 'kharagpur'
  const location = LOCATION_DATA[locationId]

  if (!location) {
    return <div>Location not found</div>
  }

  return (
    <main className="flex-1 overflow-y-auto p-2">
      <div className="flex gap-2 h-full flex-col">
        {/* Top Section */}
        <div className="flex gap-2">
          

          {/* Main Content */}
          <div className="flex-1 min-w-0 bg-white rounded-xl border border-[#e8eaef] p-7 flex flex-col">
            {/* Header with Back Button */}
            <div className="flex items-start gap-4 mb-7">
              <button
                onClick={() => router.push('/new-investment/recommendations')}
                className="w-11 h-11 rounded-xl bg-[#eaf6fd] flex items-center justify-center shrink-0 hover:bg-[#d5eefb] transition-colors"
                aria-label="Back to recommendations"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29ABE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-[#1a1f36]">{location.park_name}</h2>
                <p className="text-sm text-[#6b7280] mt-0.5">
                  Detailed analysis for your investment requirements
                </p>
              </div>
              <div className="rounded-xl px-6 py-3" style={{ backgroundColor: location.color }}>
                <div className="text-2xl font-bold text-white">{location.score}</div>
                <div className="text-xs text-white/90">Overall Score</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-[#f8f9fb] rounded-lg p-2 flex gap-2 mb-6">
              <button className="flex-1 bg-white text-[#29ABE2] font-medium text-sm py-2.5 px-4 rounded-lg shadow-sm">
                Investment Fit
              </button>
              <button className="flex-1 text-[#6b7280] font-medium text-sm py-2.5 px-4 rounded-lg hover:bg-white/50 transition-colors">
                Infrastructure
              </button>
              <button className="flex-1 text-[#6b7280] font-medium text-sm py-2.5 px-4 rounded-lg hover:bg-white/50 transition-colors">
                Incentives
              </button>
              <button className="flex-1 text-[#6b7280] font-medium text-sm py-2.5 px-4 rounded-lg hover:bg-white/50 transition-colors">
                Connectivity
              </button>
            </div>

            {/* Requirements Table */}
            <div className="flex-1 bg-[#f8f9fb] rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-white">
                  <tr>
                    <th className="text-left text-xs font-semibold text-[#6b7280] uppercase tracking-wide p-4">Requirement</th>
                    <th className="text-left text-xs font-semibold text-[#6b7280] uppercase tracking-wide p-4">Your Need</th>
                    <th className="text-left text-xs font-semibold text-[#6b7280] uppercase tracking-wide p-4">Availability</th>
                    <th className="text-center text-xs font-semibold text-[#6b7280] uppercase tracking-wide p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white">
                    <td className="p-4 text-sm text-[#1a1f36] font-medium">Land</td>
                    <td className="p-4 text-sm text-[#6b7280]">50 acres</td>
                    <td className="p-4 text-sm text-[#6b7280]">{location.available_area_acres} acres</td>
                    <td className="p-4 text-center">
                      <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d1fae5]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-t border-white">
                    <td className="p-4 text-sm text-[#1a1f36] font-medium">Power</td>
                    <td className="p-4 text-sm text-[#6b7280]">30 MW</td>
                    <td className="p-4 text-sm text-[#6b7280]">{location.power_capacity_mw_demo} MW</td>
                    <td className="p-4 text-center">
                      <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d1fae5]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-t border-white">
                    <td className="p-4 text-sm text-[#1a1f36] font-medium">Water</td>
                    <td className="p-4 text-sm text-[#6b7280]">Required</td>
                    <td className="p-4 text-sm text-[#6b7280]">Available</td>
                    <td className="p-4 text-center">
                      <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d1fae5]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-t border-white">
                    <td className="p-4 text-sm text-[#1a1f36] font-medium">Road Connectivity</td>
                    <td className="p-4 text-sm text-[#6b7280]">Yes</td>
                    <td className="p-4 text-sm text-[#6b7280]">NH-16 (12 km)</td>
                    <td className="p-4 text-center">
                      <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d1fae5]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-t border-white">
                    <td className="p-4 text-sm text-[#1a1f36] font-medium">Rail Connectivity</td>
                    <td className="p-4 text-sm text-[#6b7280]">Yes</td>
                    <td className="p-4 text-sm text-[#6b7280]">Kharagpur (5 km)</td>
                    <td className="p-4 text-center">
                      <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d1fae5]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-t border-white">
                    <td className="p-4 text-sm text-[#1a1f36] font-medium">Port Proximity</td>
                    <td className="p-4 text-sm text-[#6b7280]">Preferred</td>
                    <td className="p-4 text-sm text-[#6b7280]">Haldia (140 km)</td>
                    <td className="p-4 text-center">
                      <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d1fae5]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-t border-white">
                    <td className="p-4 text-sm text-[#1a1f36] font-medium">Sector Suitability</td>
                    <td className="p-4 text-sm text-[#6b7280]">Electronics</td>
                    <td className="p-4 text-sm text-[#6b7280]">High</td>
                    <td className="p-4 text-center">
                      <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d1fae5]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-t border-white">
                    <td className="p-4 text-sm text-[#1a1f36] font-medium">Indicative Land Cost</td>
                    <td className="p-4 text-sm text-[#6b7280]">-</td>
                    <td className="p-4 text-sm text-[#6b7280]">₹12-18 lakh/acre</td>
                    <td className="p-4 text-center">
                      <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d1fae5]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-[320px] shrink-0 space-y-2">
            {/* Image Card */}
            <div className="bg-white rounded-xl border border-[#e8eaef] overflow-hidden">
              <div className="relative h-60 bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop"
                  alt={location.park_name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-[#1a1f36]">{location.park_name}</h3>
                <p className="text-sm text-[#6b7280] mt-1">{location.district} District</p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="bg-white rounded-xl border border-[#e8eaef] p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#eaf6fd] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#29ABE2" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#1a1f36]">{location.total_area_acres} acres</div>
                  <div className="text-xs text-[#6b7280]">Total Area</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#d1fae5] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#16a34a]">{location.available_area_acres} acres</div>
                  <div className="text-xs text-[#6b7280]">Available</div>
                </div>
              </div>
            </div>

            {/* Why Section - Full Width at Bottom */}
        <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#eaf6fd] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29ABE2" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-[#29ABE2] mb-2">Why {location.park_name.split(' ')[0]}?</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                {location.park_name.split(' ')[0]} provides the right mix of available land, power, connectivity and electronics ecosystem, 
                with strong potential for long-term growth.
              </p>
            </div>
          </div>
        </div>

          </div>
        </div>

        
      </div>
    </main>
  )
}

export default function LocationAnalysis() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocationAnalysisContent />
    </Suspense>
  )
}
