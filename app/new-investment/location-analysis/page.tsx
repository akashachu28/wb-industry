"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import { LOCATION_DATA, APPROVAL_PROCESSES } from '@/lib/locationData'

function LocationAnalysisContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const locationId = searchParams.get('location') || 'kharagpur'
  const location = LOCATION_DATA[locationId]
  const [activeTab, setActiveTab] = useState('investment')

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
              <button 
                onClick={() => setActiveTab('investment')}
                className={`flex-1 font-medium text-sm py-2.5 px-4 rounded-lg transition-colors ${
                  activeTab === 'investment' 
                    ? 'bg-white text-[#29ABE2] shadow-sm' 
                    : 'text-[#6b7280] hover:bg-white/50'
                }`}
              >
                Investment Fit
              </button>
              <button 
                onClick={() => setActiveTab('infrastructure')}
                className={`flex-1 font-medium text-sm py-2.5 px-4 rounded-lg transition-colors ${
                  activeTab === 'infrastructure' 
                    ? 'bg-white text-[#29ABE2] shadow-sm' 
                    : 'text-[#6b7280] hover:bg-white/50'
                }`}
              >
                Infrastructure
              </button>
              <button 
                onClick={() => setActiveTab('incentives')}
                className={`flex-1 font-medium text-sm py-2.5 px-4 rounded-lg transition-colors ${
                  activeTab === 'incentives' 
                    ? 'bg-white text-[#29ABE2] shadow-sm' 
                    : 'text-[#6b7280] hover:bg-white/50'
                }`}
              >
                Incentives
              </button>
              <button 
                onClick={() => setActiveTab('connectivity')}
                className={`flex-1 font-medium text-sm py-2.5 px-4 rounded-lg transition-colors ${
                  activeTab === 'connectivity' 
                    ? 'bg-white text-[#29ABE2] shadow-sm' 
                    : 'text-[#6b7280] hover:bg-white/50'
                }`}
              >
                Connectivity
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 bg-[#f8f9fb] rounded-xl overflow-hidden">
              {activeTab === 'investment' && (
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
                      <td className="p-4 text-sm text-[#6b7280]">{location.infrastructure?.connectivity?.road?.highway || 'Available'}</td>
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
                      <td className="p-4 text-sm text-[#6b7280]">{location.infrastructure?.connectivity?.rail?.station || 'Available'}</td>
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
                      <td className="p-4 text-sm text-[#6b7280]">{location.infrastructure?.connectivity?.port || 'Available'}</td>
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
              )}

              {activeTab === 'infrastructure' && location.infrastructure && (
                <div className="p-6 space-y-6">
                  {/* Power Infrastructure */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#fef3c7] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#1a1f36]">Power Infrastructure</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-[#6b7280] mb-1">Capacity</p>
                        <p className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.power.capacity}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6b7280] mb-1">Reliability</p>
                        <p className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.power.reliability}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6b7280] mb-1">Backup</p>
                        <p className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.power.backup}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6b7280] mb-1">Voltage</p>
                        <p className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.power.voltage}</p>
                      </div>
                    </div>
                  </div>

                  {/* Water Infrastructure */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#dbeafe] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#1a1f36]">Water Supply</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-[#6b7280] mb-1">Source</p>
                        <p className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.water.source}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6b7280] mb-1">Daily Capacity</p>
                        <p className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.water.dailyCapacity}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs text-[#6b7280] mb-1">Quality</p>
                        <p className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.water.quality}</p>
                      </div>
                    </div>
                  </div>

                  {/* Utilities */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#f3e8ff] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
                          <rect x="2" y="7" width="20" height="14" rx="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#1a1f36]">Utilities & Services</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-[#6b7280] mb-1">Sewage Treatment</p>
                        <p className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.utilities.sewage}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6b7280] mb-1">Telecom</p>
                        <p className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.utilities.telecom}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6b7280] mb-1">Waste Management</p>
                        <p className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.utilities.solidWaste}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6b7280] mb-1">Security</p>
                        <p className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.utilities.security}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'incentives' && location.incentives && (
                <div className="p-6">
                  <div className="space-y-3">
                    {location.incentives.map((incentive, index) => (
                      <div key={index} className="bg-white rounded-xl p-5 border border-[#e8eaef]">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#d1fae5] flex items-center justify-center shrink-0">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-[#1a1f36]">{incentive.category}</h4>
                              <p className="text-xs text-[#6b7280] mt-0.5">{incentive.description}</p>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-[#eaf6fd] text-[#29ABE2] text-xs font-medium rounded-full whitespace-nowrap">
                            {incentive.maxAmount}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f0f0f0]">
                          <span className="text-xs text-[#6b7280]">Eligibility:</span>
                          <span className="text-xs font-medium text-[#1a1f36]">{incentive.eligibility}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'connectivity' && location.infrastructure?.connectivity && (
                <div className="p-6 space-y-6">
                  {/* Road Connectivity */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#fef3c7] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                          <path d="M17 11h3l3 3v5h-2a3 3 0 1 1-6 0H9a3 3 0 1 1-6 0H1v-5l3-3h3M9 12V5h6v7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#1a1f36]">Road Connectivity</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#6b7280]">Highway Access</span>
                        <span className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.connectivity.road.highway}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#6b7280]">Expressway</span>
                        <span className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.connectivity.road.expressway}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#6b7280]">Road Condition</span>
                        <span className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.connectivity.road.condition}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rail Connectivity */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#dbeafe] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <path d="M4 11h16M12 4v7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#1a1f36]">Rail Connectivity</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#6b7280]">Nearest Station</span>
                        <span className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.connectivity.rail.station}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#6b7280]">Type</span>
                        <span className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.connectivity.rail.type}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#6b7280]">Siding</span>
                        <span className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.connectivity.rail.siding}</span>
                      </div>
                    </div>
                  </div>

                  {/* Airport & Port */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#f3e8ff] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
                          <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#1a1f36]">Airport & Port</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#6b7280]">Airport Distance</span>
                        <span className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.connectivity.airport}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#6b7280]">Nearest Port</span>
                        <span className="text-sm font-medium text-[#1a1f36]">{location.infrastructure.connectivity.port}</span>
                      </div>
                    </div>
                  </div>

                  {/* Travel Times */}
                  {location.connectivity_timeline && (
                    <div className="bg-white rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#dcfce7] flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-[#1a1f36]">Travel Times</h3>
                      </div>
                      <div className="space-y-3">
                        {Object.entries(location.connectivity_timeline).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center">
                            <span className="text-sm text-[#6b7280] capitalize">{key.replace(/_/g, ' ')}</span>
                            <span className="text-sm font-medium text-[#1a1f36]">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
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
