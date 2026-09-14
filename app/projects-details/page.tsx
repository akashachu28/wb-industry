"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const TABS = ['Overview', 'Approvals', 'Timeline', 'AI Analysis', 'Documents']

const PROJECT_DATA = {
  id: 'WB-INV-001',
  status: 'AT RISK',
  name: 'Electronics Manufacturing',
  location: 'Kharagpur Industrial Area',
  stats: [
    { label: 'Investment', value: '₹250 Cr', color: 'text-gray-700' },
    { label: 'Employment', value: '2,000', color: 'text-gray-700' },
    { label: 'Land', value: '50 acres', color: 'text-gray-700' },
    { label: 'Planned Timeline', value: '180 days', color: 'text-gray-700' },
    { label: 'Current Timeline', value: '203 days', color: 'text-red-600' },
  ],
  aiDiagnosis: {
    daysDelayed: 23,
    primaryBottleneck: 'Land allocation (23 days delayed)',
    secondaryBottleneck: 'Power feasibility (11 days delayed)',
    dependency: 'WBIIDC → Power → Industry',
    impact: 'Potential 2-3 month delay in commissioning',
    recommendation: 'Escalate land allocation review and initiate parallel power-feasibility assessment to prevent further schedule slippage.',
  }
}

const APPROVALS_DATA = [
  {
    id: 1,
    name: 'Land Allocation',
    department: 'WBIDC/WBIIDC',
    status: 'Delayed',
    statusColor: '#ef4444',
    plannedDays: 60,
    actualDays: 83,
    delayDays: 23,
    documents: 5,
    completedDocs: 5,
  },
  {
    id: 2,
    name: 'Environmental Clearance',
    department: 'WBPCB',
    status: 'Completed',
    statusColor: '#22c55e',
    plannedDays: 45,
    actualDays: 42,
    delayDays: 0,
    documents: 7,
    completedDocs: 7,
  },
  {
    id: 3,
    name: 'Power Connection',
    department: 'Power Department',
    status: 'In Progress',
    statusColor: '#f59e0b',
    plannedDays: 30,
    actualDays: 18,
    delayDays: 0,
    documents: 6,
    completedDocs: 4,
  },
  {
    id: 4,
    name: 'Building Plan Approval',
    department: 'WBIDC/WBIIDC',
    status: 'Pending',
    statusColor: '#6b7280',
    plannedDays: 30,
    actualDays: 0,
    delayDays: 0,
    documents: 8,
    completedDocs: 0,
  },
  {
    id: 5,
    name: 'Fire Safety Certificate',
    department: 'Fire & Emergency Services',
    status: 'Pending',
    statusColor: '#6b7280',
    plannedDays: 30,
    actualDays: 0,
    delayDays: 0,
    documents: 5,
    completedDocs: 0,
  },
]

const TIMELINE_DATA = [
  {
    phase: 'Project Registration',
    startDate: 'Jan 1, 2026',
    endDate: 'Jan 15, 2026',
    duration: 15,
    status: 'Completed',
    progress: 100,
  },
  {
    phase: 'Initial Approvals',
    startDate: 'Jan 16, 2026',
    endDate: 'Feb 29, 2026',
    duration: 45,
    status: 'Completed',
    progress: 100,
  },
  {
    phase: 'Land Allocation',
    startDate: 'Mar 1, 2026',
    endDate: 'May 23, 2026',
    duration: 83,
    status: 'Delayed',
    progress: 100,
  },
  {
    phase: 'Infrastructure Setup',
    startDate: 'May 24, 2026',
    endDate: 'Jul 22, 2026',
    duration: 60,
    status: 'In Progress',
    progress: 45,
  },
  {
    phase: 'Construction',
    startDate: 'Jul 23, 2026',
    endDate: 'Oct 31, 2026',
    duration: 100,
    status: 'Not Started',
    progress: 0,
  },
  {
    phase: 'Commissioning',
    startDate: 'Nov 1, 2026',
    endDate: 'Dec 30, 2026',
    duration: 60,
    status: 'Not Started',
    progress: 0,
  },
]

const AI_ANALYSIS = {
  riskScore: 78,
  riskLevel: 'High',
  predictions: [
    {
      title: 'Completion Date Prediction',
      prediction: 'Based on current progress, the project is likely to be completed by January 15, 2027, approximately 45 days later than planned.',
      confidence: 85,
    },
    {
      title: 'Budget Impact',
      prediction: 'Delays may result in cost overruns of approximately ₹15-20 Cr due to extended timelines and inflation.',
      confidence: 72,
    },
    {
      title: 'Critical Path Analysis',
      prediction: 'Land allocation and power connection are on the critical path. Any further delay will directly impact the commissioning date.',
      confidence: 92,
    },
  ],
  recommendations: [
    'Fast-track land allocation through high-level intervention',
    'Parallel processing of building plan and power connection approvals',
    'Assign dedicated nodal officer for inter-department coordination',
    'Weekly monitoring and escalation mechanism',
  ],
}

const DOCUMENTS_DATA = [
  {
    category: 'Project Proposal',
    documents: [
      { name: 'Project Detailed Report.pdf', date: 'Jan 5, 2026', size: '2.4 MB', status: 'Approved' },
      { name: 'Investment Proposal.pdf', date: 'Jan 5, 2026', size: '1.8 MB', status: 'Approved' },
    ],
  },
  {
    category: 'Land Documents',
    documents: [
      { name: 'Land Allocation Request.pdf', date: 'Mar 1, 2026', size: '1.2 MB', status: 'Approved' },
      { name: 'Survey Report.pdf', date: 'Mar 10, 2026', size: '3.5 MB', status: 'Approved' },
      { name: 'Title Verification.pdf', date: 'Apr 15, 2026', size: '980 KB', status: 'Pending' },
    ],
  },
  {
    category: 'Environmental',
    documents: [
      { name: 'EIA Report.pdf', date: 'Feb 1, 2026', size: '5.2 MB', status: 'Approved' },
      { name: 'Pollution Control Certificate.pdf', date: 'Feb 20, 2026', size: '450 KB', status: 'Approved' },
    ],
  },
  {
    category: 'Technical',
    documents: [
      { name: 'Building Plans.dwg', date: 'May 1, 2026', size: '8.9 MB', status: 'Under Review' },
      { name: 'Power Load Assessment.pdf', date: 'May 10, 2026', size: '1.1 MB', status: 'Under Review' },
    ],
  },
]

export default function ProjectDetailsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <main className="flex-1 overflow-y-auto p-2">
      <div className="space-y-2">
        {/* Header Card */}
        <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
          <div className="flex items-start gap-4 mb-6">
            <button
              onClick={() => router.push('/all-projects')}
              className="w-11 h-11 rounded-xl bg-[#eaf6fd] flex items-center justify-center shrink-0 hover:bg-[#d5eefb] transition-colors"
              aria-label="Back to all projects"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29ABE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-xl font-semibold text-[#1a1f36]">
                  Project {PROJECT_DATA.id}
                </h1>
                <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                  {PROJECT_DATA.status}
                </span>
              </div>
              <p className="text-sm text-[#6b7280]">
                {PROJECT_DATA.name} | {PROJECT_DATA.location}
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROJECT_DATA.stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-lg bg-[#f8f9fb] p-4"
              >
                <div className={`text-2xl font-bold ${stat.color === 'text-red-600' ? 'text-red-600' : 'text-[#1a1f36]'} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs text-[#6b7280]">{stat.label}</div>
              </div>
            ))}
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
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-[#e8eaef]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {activeTab === 'Overview' && (
          <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
            {/* AI Diagnosis Section */}
            <div className="border-l-4 border-red-500 bg-red-50 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-red-600 mb-2">AI Diagnosis</h2>
                  <p className="text-sm text-[#6b7280] mb-6">
                    The project is <span className="font-semibold text-red-600">{PROJECT_DATA.aiDiagnosis.daysDelayed} days behind</span> its expected timeline.
                  </p>

                  {/* Diagnosis Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    <div>
                      <div className="text-xs font-semibold text-[#6b7280] mb-1">Primary bottleneck</div>
                      <div className="text-sm text-[#1a1f36]">{PROJECT_DATA.aiDiagnosis.primaryBottleneck}</div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-[#6b7280] mb-1">Secondary bottleneck</div>
                      <div className="text-sm text-[#1a1f36]">{PROJECT_DATA.aiDiagnosis.secondaryBottleneck}</div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-[#6b7280] mb-1">Cross-department dependency</div>
                      <div className="text-sm text-[#1a1f36]">{PROJECT_DATA.aiDiagnosis.dependency}</div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-[#6b7280] mb-1">Impact</div>
                      <div className="text-sm text-[#1a1f36]">{PROJECT_DATA.aiDiagnosis.impact}</div>
                    </div>

                    <div className="md:col-span-2">
                      <div className="text-xs font-semibold text-[#6b7280] mb-1">AI Recommended Action</div>
                      <div className="text-sm text-[#1a1f36]">{PROJECT_DATA.aiDiagnosis.recommendation}</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="mt-6 w-full md:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2">
                    Generate Brief for Senior Officer
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Overview Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[#1a1f36] mb-3">Project Summary</h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  This electronics manufacturing project in Kharagpur Industrial Area represents a significant investment
                  of ₹250 Crore with potential employment generation for 2,000 individuals. The project requires 50 acres
                  of land and was initially planned with a 180-day timeline. However, current progress indicates the project
                  is running 23 days behind schedule, requiring immediate attention and corrective action.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#1a1f36] mb-3">Key Milestones</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-[#1a1f36]">Initial Approval</div>
                      <div className="text-xs text-[#6b7280]">Completed - 45 days</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-[#1a1f36]">Environmental Clearance</div>
                      <div className="text-xs text-[#6b7280]">Completed - 30 days</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-[#1a1f36]">Land Allocation</div>
                      <div className="text-xs text-red-600">Delayed - 23 days behind</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-[#1a1f36]">Power Feasibility</div>
                      <div className="text-xs text-red-600">Delayed - 11 days behind</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mt-1.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-[#1a1f36]">Construction Permit</div>
                      <div className="text-xs text-[#6b7280]">Pending</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Approvals' && (
          <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
            <h2 className="text-sm font-semibold text-[#1a1f36] mb-6">Approval Status & Progress</h2>
            
            <div className="space-y-4">
              {APPROVALS_DATA.map((approval) => (
                <div key={approval.id} className="border border-[#e8eaef] rounded-xl p-5 hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-[#1a1f36] mb-1">{approval.name}</h3>
                      <p className="text-xs text-[#6b7280]">{approval.department}</p>
                    </div>
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: approval.statusColor }}
                    >
                      {approval.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-[#6b7280] mb-1">Planned Duration</p>
                      <p className="text-sm font-semibold text-[#1a1f36]">{approval.plannedDays} days</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6b7280] mb-1">Actual Duration</p>
                      <p className="text-sm font-semibold text-[#1a1f36]">{approval.actualDays || '-'} days</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6b7280] mb-1">Delay</p>
                      <p className={`text-sm font-semibold ${approval.delayDays > 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {approval.delayDays > 0 ? `+${approval.delayDays}` : approval.delayDays} days
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6b7280] mb-1">Documents</p>
                      <p className="text-sm font-semibold text-[#1a1f36]">{approval.completedDocs}/{approval.documents}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: `${(approval.completedDocs / approval.documents) * 100}%`,
                        backgroundColor: approval.statusColor,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Timeline' && (
          <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
            <h2 className="text-sm font-semibold text-[#1a1f36] mb-6">Project Timeline & Milestones</h2>
            
            <div className="space-y-4">
              {TIMELINE_DATA.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < TIMELINE_DATA.length - 1 && (
                    <div className="absolute left-[15px] top-[40px] w-0.5 h-[calc(100%+1rem)] bg-gray-200" />
                  )}
                  
                  <div className="flex gap-4">
                    {/* Status Indicator */}
                    <div className="relative z-10">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        phase.status === 'Completed' ? 'bg-green-500' :
                        phase.status === 'In Progress' ? 'bg-blue-500' :
                        phase.status === 'Delayed' ? 'bg-red-500' :
                        'bg-gray-300'
                      }`}>
                        {phase.status === 'Completed' && (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {phase.status === 'In Progress' && (
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                        )}
                      </div>
                    </div>

                    {/* Phase Content */}
                    <div className="flex-1 pb-8">
                      <div className="bg-[#f8f9fb] rounded-lg p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-sm font-semibold text-[#1a1f36] mb-1">{phase.phase}</h3>
                            <p className="text-xs text-[#6b7280]">
                              {phase.startDate} - {phase.endDate} ({phase.duration} days)
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            phase.status === 'Completed' ? 'bg-green-100 text-green-700' :
                            phase.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                            phase.status === 'Delayed' ? 'bg-red-100 text-red-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {phase.status}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-2">
                          <div className="flex justify-between text-xs text-[#6b7280] mb-1">
                            <span>Progress</span>
                            <span>{phase.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all ${
                                phase.status === 'Completed' ? 'bg-green-500' :
                                phase.status === 'In Progress' ? 'bg-blue-500' :
                                phase.status === 'Delayed' ? 'bg-red-500' :
                                'bg-gray-400'
                              }`}
                              style={{ width: `${phase.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'AI Analysis' && (
          <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
            <h2 className="text-sm font-semibold text-[#1a1f36] mb-6">AI-Powered Risk Analysis</h2>
            
            {/* Risk Score Card */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24">
                  <svg className="transform -rotate-90" width="96" height="96">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      fill="none"
                      stroke="#fee2e2"
                      strokeWidth="8"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="8"
                      strokeDasharray={`${(AI_ANALYSIS.riskScore / 100) * 251.2} 251.2`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600">{AI_ANALYSIS.riskScore}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1f36] mb-1">Risk Score: {AI_ANALYSIS.riskLevel}</h3>
                  <p className="text-sm text-[#6b7280]">
                    This project requires immediate attention and intervention to prevent further delays.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Predictions */}
            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-semibold text-[#1a1f36]">AI Predictions</h3>
              {AI_ANALYSIS.predictions.map((pred, index) => (
                <div key={index} className="border border-[#e8eaef] rounded-xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-sm font-semibold text-[#1a1f36]">{pred.title}</h4>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {pred.confidence}% Confidence
                    </span>
                  </div>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{pred.prediction}</p>
                </div>
              ))}
            </div>

            {/* AI Recommendations */}
            <div>
              <h3 className="text-sm font-semibold text-[#1a1f36] mb-4">AI Recommendations</h3>
              <div className="space-y-3">
                {AI_ANALYSIS.recommendations.map((rec, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-blue-600">{index + 1}</span>
                    </div>
                    <p className="text-sm text-[#6b7280] flex-1">{rec}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Documents' && (
          <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
            <h2 className="text-sm font-semibold text-[#1a1f36] mb-6">Project Documents & Files</h2>
            
            <div className="space-y-6">
              {DOCUMENTS_DATA.map((category, catIndex) => (
                <div key={catIndex}>
                  <h3 className="text-sm font-semibold text-[#1a1f36] mb-3 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    {category.category}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.documents.map((doc, docIndex) => (
                      <div
                        key={docIndex}
                        className="flex items-center justify-between p-4 bg-[#f8f9fb] rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-[#1a1f36] truncate">{doc.name}</p>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs text-[#6b7280]">{doc.date}</span>
                              <span className="text-xs text-[#6b7280]">•</span>
                              <span className="text-xs text-[#6b7280]">{doc.size}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            doc.status === 'Approved' ? 'bg-green-100 text-green-700' :
                            doc.status === 'Under Review' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {doc.status}
                          </span>
                          
                          <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Upload New Document */}
            <div className="mt-6 pt-6 border-t border-[#e8eaef]">
              <button className="w-full px-6 py-3 border-2 border-dashed border-gray-300 rounded-xl text-sm font-medium text-[#6b7280] hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                </svg>
                Upload New Document
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
