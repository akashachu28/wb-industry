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

export default function ProjectDetailsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <main className="flex-1 overflow-y-auto p-2">
      <div className="space-y-2">
        {/* Header Card */}
        <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
          <div className="mb-6">
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
            <h2 className="text-sm font-semibold text-[#1a1f36] mb-4">Approval Status</h2>
            <p className="text-sm text-[#6b7280]">Detailed approval workflow and current status for all required clearances.</p>
          </div>
        )}

        {activeTab === 'Timeline' && (
          <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
            <h2 className="text-sm font-semibold text-[#1a1f36] mb-4">Project Timeline</h2>
            <p className="text-sm text-[#6b7280]">Visual timeline showing planned vs actual progress across all project phases.</p>
          </div>
        )}

        {activeTab === 'AI Analysis' && (
          <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
            <h2 className="text-sm font-semibold text-[#1a1f36] mb-4">AI-Powered Analysis</h2>
            <p className="text-sm text-[#6b7280]">Comprehensive AI analysis of project risks, dependencies, and optimization opportunities.</p>
          </div>
        )}

        {activeTab === 'Documents' && (
          <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
            <h2 className="text-sm font-semibold text-[#1a1f36] mb-4">Project Documents</h2>
            <p className="text-sm text-[#6b7280]">All related documents, permits, clearances, and correspondence.</p>
          </div>
        )}
      </div>
    </main>
  )
}
