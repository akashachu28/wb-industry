"use client"
import { useRouter } from 'next/navigation'

const PROJECTS_DATA = [
  {
    id: 'WB-INV-001',
    name: 'Electronics Manufacturing',
    company: 'TechCorp Industries',
    location: 'Kharagpur Industrial Area',
    investment: '₹250 Cr',
    employment: '2,000',
    status: 'In Progress',
    riskLevel: 'High',
    riskScore: 78,
    riskColor: 'bg-red-500',
    delayDays: 23,
    startDate: 'Jan 1, 2026',
    expectedCompletion: 'Dec 30, 2026',
  },
  {
    id: 'WB-INV-002',
    name: 'Textile Manufacturing',
    company: 'Bengal Textiles Ltd',
    location: 'Siliguri Industrial Park',
    investment: '₹180 Cr',
    employment: '1,500',
    status: 'In Progress',
    riskLevel: 'Medium',
    riskScore: 45,
    riskColor: 'bg-yellow-500',
    delayDays: 8,
    startDate: 'Feb 15, 2026',
    expectedCompletion: 'Jan 15, 2027',
  },
  {
    id: 'WB-INV-003',
    name: 'Food Processing Plant',
    company: 'AgriFood Solutions',
    location: 'Durgapur Industrial Zone',
    investment: '₹320 Cr',
    employment: '2,500',
    status: 'In Progress',
    riskLevel: 'Low',
    riskScore: 25,
    riskColor: 'bg-green-500',
    delayDays: 0,
    startDate: 'Mar 1, 2026',
    expectedCompletion: 'Feb 28, 2027',
  },
  {
    id: 'WB-INV-004',
    name: 'Pharmaceutical Manufacturing',
    company: 'MediPharm Industries',
    location: 'Kolkata Bio-Tech Park',
    investment: '₹450 Cr',
    employment: '3,000',
    status: 'In Progress',
    riskLevel: 'High',
    riskScore: 82,
    riskColor: 'bg-red-500',
    delayDays: 31,
    startDate: 'Jan 10, 2026',
    expectedCompletion: 'Dec 10, 2026',
  },
  {
    id: 'WB-INV-005',
    name: 'Automotive Components',
    company: 'AutoParts Manufacturing',
    location: 'Haldia Industrial Area',
    investment: '₹290 Cr',
    employment: '1,800',
    status: 'In Progress',
    riskLevel: 'Medium',
    riskScore: 52,
    riskColor: 'bg-yellow-500',
    delayDays: 12,
    startDate: 'Feb 20, 2026',
    expectedCompletion: 'Jan 20, 2027',
  },
  {
    id: 'WB-INV-006',
    name: 'Solar Panel Manufacturing',
    company: 'GreenEnergy Solutions',
    location: 'Asansol Industrial Zone',
    investment: '₹380 Cr',
    employment: '2,200',
    status: 'In Progress',
    riskLevel: 'Low',
    riskScore: 18,
    riskColor: 'bg-green-500',
    delayDays: 0,
    startDate: 'Mar 15, 2026',
    expectedCompletion: 'Mar 15, 2027',
  },
]

export default function AllProjectsPage() {
  const router = useRouter()

  const handleViewProject = (projectId: string) => {
    router.push('/projects-details')
  }

  const getRiskBadgeColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'High':
        return 'bg-red-100 text-red-700 border-red-200'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'Low':
        return 'bg-green-100 text-green-700 border-green-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <main className="flex-1 overflow-y-auto p-2">
      <div className="space-y-2">
        {/* Header */}
        <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
          <div className="flex items-start gap-4 mb-6">
            <button
              onClick={() => router.push('/command-center')}
              className="w-11 h-11 rounded-xl bg-[#eaf6fd] flex items-center justify-center shrink-0 hover:bg-[#d5eefb] transition-colors"
              aria-label="Back to command center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29ABE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-semibold text-[#1a1f36]">All Projects</h1>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#f8f9fb] rounded-lg">
                    <span className="text-sm text-[#6b7280]">Total Projects:</span>
                    <span className="text-sm font-semibold text-[#1a1f36]">{PROJECTS_DATA.length}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#6b7280]">
                Monitor and track all investment projects across West Bengal
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <div className="bg-white rounded-xl border border-[#e8eaef] p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1a1f36]">
                  {PROJECTS_DATA.filter(p => p.riskLevel === 'High').length}
                </div>
                <div className="text-xs text-[#6b7280]">High Risk</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e8eaef] p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1a1f36]">
                  {PROJECTS_DATA.filter(p => p.riskLevel === 'Medium').length}
                </div>
                <div className="text-xs text-[#6b7280]">Medium Risk</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e8eaef] p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1a1f36]">
                  {PROJECTS_DATA.filter(p => p.riskLevel === 'Low').length}
                </div>
                <div className="text-xs text-[#6b7280]">Low Risk</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e8eaef] p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1a1f36]">
                  ₹{Math.round(PROJECTS_DATA.reduce((sum, p) => sum + parseFloat(p.investment.replace('₹', '').replace(' Cr', '')), 0))} Cr
                </div>
                <div className="text-xs text-[#6b7280]">Total Investment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="bg-white rounded-xl border border-[#e8eaef] overflow-hidden">
          {/* Table Header */}
          <div className="bg-[#f8f9fb] px-6 py-4 border-b border-[#e8eaef]">
            <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-[#6b7280] uppercase">
              <div className="col-span-2">Project ID</div>
              <div className="col-span-2">Project Name</div>
              <div className="col-span-2">Location</div>
              <div className="col-span-1">Investment</div>
              <div className="col-span-1">Employment</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-2">Risk Status</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#e8eaef]">
            {PROJECTS_DATA.map((project) => (
              <div
                key={project.id}
                className="px-6 py-4 hover:bg-[#f8f9fb] transition-colors"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Project ID */}
                  <div className="col-span-2">
                    <div className="text-sm font-semibold text-[#1a1f36]">{project.id}</div>
                    <div className="text-xs text-[#6b7280] mt-0.5">{project.company}</div>
                  </div>

                  {/* Project Name */}
                  <div className="col-span-2">
                    <div className="text-sm text-[#1a1f36]">{project.name}</div>
                  </div>

                  {/* Location */}
                  <div className="col-span-2">
                    <div className="text-sm text-[#6b7280]">{project.location}</div>
                  </div>

                  {/* Investment */}
                  <div className="col-span-1">
                    <div className="text-sm font-semibold text-[#1a1f36]">{project.investment}</div>
                  </div>

                  {/* Employment */}
                  <div className="col-span-1">
                    <div className="text-sm text-[#6b7280]">{project.employment}</div>
                  </div>

                  {/* Status */}
                  <div className="col-span-1">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                      {project.status}
                    </span>
                  </div>

                  {/* Risk Status */}
                  <div className="col-span-2">
                    <div className="flex items-center gap-3">
                      {/* Risk Badge */}
                      <span className={`px-3 py-1 border rounded-full text-xs font-semibold ${getRiskBadgeColor(project.riskLevel)}`}>
                        {project.riskLevel} Risk
                      </span>
                      
                      {/* Risk Score Indicator */}
                      <div className="flex items-center gap-1.5">
                        <div className="relative w-8 h-8">
                          <svg className="transform -rotate-90" width="32" height="32">
                            <circle
                              cx="16"
                              cy="16"
                              r="14"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="3"
                            />
                            <circle
                              cx="16"
                              cy="16"
                              r="14"
                              fill="none"
                              stroke={
                                project.riskLevel === 'High' ? '#ef4444' :
                                project.riskLevel === 'Medium' ? '#f59e0b' :
                                '#22c55e'
                              }
                              strokeWidth="3"
                              strokeDasharray={`${(project.riskScore / 100) * 87.96} 87.96`}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[10px] font-bold text-[#1a1f36]">{project.riskScore}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Delay Info */}
                    {project.delayDays > 0 && (
                      <div className="text-xs text-red-600 mt-1">
                        {project.delayDays} days delayed
                      </div>
                    )}
                    {project.delayDays === 0 && (
                      <div className="text-xs text-green-600 mt-1">
                        On schedule
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="col-span-1 flex justify-end">
                    <button
                      onClick={() => handleViewProject(project.id)}
                      className="p-2 hover:bg-blue-100 rounded-lg transition-colors group"
                      title="View Project Details"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6b7280"
                        strokeWidth="2"
                        className="group-hover:stroke-blue-600"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
