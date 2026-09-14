"use client"
import { useState } from 'react'

const BRIEF_DATA = {
  title: 'Industrial Project WB-INV-001 - Intervention Required',
  date: '24 Apr 2025',
  investment: '₹250 Cr',
  sector: 'Electronics Manufacturing',
  location: 'Kharagpur Industrial Area, Paschim Medinipur',
  employment: '2,000',
  currentStatus: '23 days delayed',
  keyIssue: 'Land allocation pending.',
  impact: 'Potential 2-3 month delay in commissioning.',
  departments: 'WBIIDC / Industry / Power',
  recommendedActions: [
    'Escalate land allocation review at WBIIDC.',
    'Initiate parallel power-feasibility assessment.',
    'Assign nodal officer for time-bound resolution.',
  ],
}

export default function MinisterialBriefPage() {
  const [showPDF, setShowPDF] = useState(false) // Set Summary View as default

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/images/wb-sample.pdf'
    link.download = 'Ministerial_Brief_WB-INV-001.pdf'
    link.click()
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Ministerial Brief - WB-INV-001',
        text: BRIEF_DATA.title,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing:', error))
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <main className="flex-1 overflow-y-auto p-2">
      <div className="space-y-2">
        {/* Header */}
        <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-xl font-semibold text-[#1a1f36] mb-1">
                Ministerial Brief
              </h1>
              <p className="text-sm text-[#6b7280]">
                AI-generated summary for senior decision-making
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span className="hidden sm:inline">Download PDF</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>

          {/* Toggle View - Sliding Animation */}
          <div className="relative inline-flex bg-gray-100 rounded-xl p-1">
            {/* Sliding background indicator */}
            <div
              className={`absolute top-1 bottom-1 rounded-lg bg-blue-600 transition-all duration-300 ease-in-out ${
                !showPDF ? 'left-1 right-1/2' : 'left-1/2 right-1'
              }`}
              style={{
                boxShadow: '0 2px 4px rgba(59, 130, 246, 0.2)'
              }}
            />
            
            {/* Buttons */}
            <button
              onClick={() => setShowPDF(false)}
              className={`relative z-10 px-8 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 ${
                !showPDF
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Summary View
            </button>
            <button
              onClick={() => setShowPDF(true)}
              className={`relative z-10 px-8 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 ${
                showPDF
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              PDF View
            </button>
          </div>
        </div>

        {/* Content */}
        {!showPDF ? (
          // Summary View
          <div className="bg-white rounded-xl border border-[#e8eaef] p-7">
            {/* Government Header */}
            <div className="flex flex-col items-center mb-6 pb-6 border-b border-[#e8eaef]">
              <div className="w-16 h-16 mb-3">
                <svg viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="45" fill="#1e40af" />
                  <path d="M50 20 L60 40 L80 40 L65 55 L70 75 L50 60 L30 75 L35 55 L20 40 L40 40 Z" fill="white" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-[#1a1f36] text-center mb-1">
                Government of West Bengal
              </h2>
              <p className="text-sm text-[#6b7280] text-center">Industrial Development</p>
            </div>

            {/* Subject and Date */}
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-[#e8eaef]">
              <div className="flex-1">
                <div className="text-xs font-semibold text-[#6b7280] mb-1">Subject:</div>
                <div className="text-sm font-semibold text-[#1a1f36]">{BRIEF_DATA.title}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-semibold text-[#6b7280] mb-1">Date:</div>
                <div className="text-sm font-semibold text-[#1a1f36]">{BRIEF_DATA.date}</div>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-6 pb-6 border-b border-[#e8eaef]">
              <div className="flex">
                <div className="w-36 text-xs font-semibold text-[#6b7280]">Investment</div>
                <div className="flex-1 text-xs text-[#1a1f36]">: {BRIEF_DATA.investment}</div>
              </div>
              <div className="flex">
                <div className="w-36 text-xs font-semibold text-[#6b7280]">Sector</div>
                <div className="flex-1 text-xs text-[#1a1f36]">: {BRIEF_DATA.sector}</div>
              </div>
              <div className="flex">
                <div className="w-36 text-xs font-semibold text-[#6b7280]">Location</div>
                <div className="flex-1 text-xs text-[#1a1f36]">: {BRIEF_DATA.location}</div>
              </div>
              <div className="flex">
                <div className="w-36 text-xs font-semibold text-[#6b7280]">Employment</div>
                <div className="flex-1 text-xs text-[#1a1f36]">: {BRIEF_DATA.employment}</div>
              </div>
              <div className="flex">
                <div className="w-36 text-xs font-semibold text-[#6b7280]">Current Status</div>
                <div className="flex-1 text-xs text-[#1a1f36]">: {BRIEF_DATA.currentStatus}</div>
              </div>
            </div>

            {/* Issues and Impact */}
            <div className="space-y-4 mb-6 pb-6 border-b border-[#e8eaef]">
              <div className="flex">
                <div className="w-48 text-xs font-semibold text-[#6b7280]">Key Issue</div>
                <div className="flex-1 text-xs text-[#1a1f36]">: {BRIEF_DATA.keyIssue}</div>
              </div>
              <div className="flex">
                <div className="w-48 text-xs font-semibold text-[#6b7280]">Impact</div>
                <div className="flex-1 text-xs text-[#1a1f36]">: {BRIEF_DATA.impact}</div>
              </div>
              <div className="flex">
                <div className="w-48 text-xs font-semibold text-[#6b7280]">Departments Involved</div>
                <div className="flex-1 text-xs text-[#1a1f36]">: {BRIEF_DATA.departments}</div>
              </div>
            </div>

            {/* Recommended Actions */}
            <div>
              <div className="text-xs font-semibold text-[#6b7280] mb-3">Recommended Action</div>
              <div className="space-y-2 ml-4">
                {BRIEF_DATA.recommendedActions.map((action, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="text-xs font-medium text-[#6b7280]">{index + 1}.</span>
                    <span className="text-xs text-[#1a1f36]">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // PDF View
          <div className="bg-white rounded-xl border border-[#e8eaef] overflow-hidden" style={{ height: 'calc(100vh - 240px)' }}>
            <iframe
              src="/images/wb-sample.pdf"
              className="w-full h-full"
              title="Ministerial Brief PDF"
            />
          </div>
        )}
      </div>
    </main>
  )
}
