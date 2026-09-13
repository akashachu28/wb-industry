"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29ABE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    label: 'Faster Approvals',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29ABE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
        <polyline points="22 10 18 6 14 10"/>
      </svg>
    ),
    label: 'Smarter Decisions',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29ABE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: 'Stronger Investments',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29ABE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    label: 'Greater Opportunities',
  },
]

export default function Home() {
  const router = useRouter()
  const [sector, setSector] = useState('Electronics Manufacturing')
  const [amount, setAmount] = useState('250')
  const [land, setLand] = useState('50')
  const [employment, setEmployment] = useState('2,000')
  const [power, setPower] = useState('30')
  const [water, setWater] = useState('Required')
  const [location, setLocation] = useState('Any')
  const [commissioning, setCommissioning] = useState('24 months')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const analysisSteps = [
    'Land',
    'Infrastructure',
    'Power',
    'Logistics',
    'Incentives',
    'Approvals',
    'Risk'
  ]

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setCurrentStep(0)

    // Animate through steps
    const stepDuration = 400 // ms per step
    analysisSteps.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1)
      }, stepDuration * (index + 1))
    })

    // Navigate after all steps complete
    setTimeout(() => {
      router.push('/new-investment/recommendations')
    }, stepDuration * (analysisSteps.length + 1))
  }

  return (
    <main className="flex-1 overflow-y-auto p-2 relative">
      {/* Full-Screen Analysis Animation - Only covers main area */}
      {isAnalyzing && (
        <div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
          </div>

          {/* Main Text */}
          <h2 className="text-2xl font-semibold text-[#1a1f36] mb-2">
            Mialo is analyzing
          </h2>
          <p className="text-sm text-[#6b7280] mb-12">
            Finding the best investment opportunities for you
          </p>

          {/* Progress Steps */}
          <div className="w-full max-w-md px-8">
            <div className="space-y-3">
              {analysisSteps.map((step, index) => {
                const isActive = index === currentStep - 1
                const isCompleted = index < currentStep - 1
                
                return (
                  <div
                    key={step}
                    className={`flex items-center gap-4 transition-all duration-300 ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                  >
                    {/* Checkmark or Spinner */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isCompleted
                          ? 'bg-green-500'
                          : isActive
                          ? 'bg-blue-500'
                          : 'bg-gray-200'
                      }`}
                    >
                      {isCompleted ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : isActive ? (
                        <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                      )}
                    </div>

                    {/* Step Name */}
                    <div className="flex-1">
                      <div
                        className={`text-sm font-medium transition-colors duration-300 ${
                          isActive
                            ? 'text-blue-600'
                            : isCompleted
                            ? 'text-green-600'
                            : 'text-[#9ca3af]'
                        }`}
                      >
                        {step}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          isCompleted
                            ? 'w-full bg-green-500'
                            : isActive
                            ? 'w-3/4 bg-blue-500'
                            : 'w-0 bg-gray-300'
                        }`}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Overall Progress Bar */}
          <div className="w-full max-w-md px-8 mt-12">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300"
                style={{
                  width: `${(currentStep / analysisSteps.length) * 100}%`,
                }}
              />
            </div>
            <p className="text-xs text-[#9ca3af] text-center mt-2">
              {currentStep} of {analysisSteps.length} completed
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
          <div className="flex gap-2 h-full">
            {/* Form card */}
            <div className="flex-1 min-w-0 bg-white rounded-xl border border-[#e8eaef] p-7 flex flex-col">
              {/* Card header */}
              <div className="flex items-start gap-4 mb-7">
                <div className="w-11 h-11 rounded-xl bg-[#eaf6fd] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29ABE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    <path d="M8 12h8M12 8v8"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#1a1f36]">Start a New Investment</h2>
                  <p className="text-sm text-[#6b7280] mt-0.5">
                    Tell us about your project and let AI find the best opportunities in West Bengal.
                  </p>
                </div>
              </div>

              {/* Form grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 flex-1">
                {/* Sector */}
                <div>
                  <label className="block text-xs font-medium text-[#6b7280] mb-1.5 uppercase tracking-wide">Sector</label>
                  <div className="relative">
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full appearance-none bg-white border border-[#e8eaef] rounded-lg px-3.5 py-2.5 text-sm text-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30 focus:border-[#29ABE2] transition-colors"
                    >
                      <option>Electronics Manufacturing</option>
                      <option>Textiles & Apparel</option>
                      <option>Food Processing</option>
                      <option>Pharmaceuticals</option>
                      <option>Chemicals</option>
                      <option>Automotive</option>
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#9ca3af]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>

                {/* Investment Amount */}
                <div>
                  <label className="block text-xs font-medium text-[#6b7280] mb-1.5 uppercase tracking-wide">Investment Amount (₹ Cr)</label>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-white border border-[#e8eaef] rounded-lg px-3.5 py-2.5 text-sm text-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30 focus:border-[#29ABE2] transition-colors"
                  />
                </div>

                {/* Land */}
                <div>
                  <label className="block text-xs font-medium text-[#6b7280] mb-1.5 uppercase tracking-wide">Land Requirement (acres)</label>
                  <input
                    type="text"
                    value={land}
                    onChange={(e) => setLand(e.target.value)}
                    className="w-full bg-white border border-[#e8eaef] rounded-lg px-3.5 py-2.5 text-sm text-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30 focus:border-[#29ABE2] transition-colors"
                  />
                </div>

                {/* Employment */}
                <div>
                  <label className="block text-xs font-medium text-[#6b7280] mb-1.5 uppercase tracking-wide">Estimated Employment</label>
                  <input
                    type="text"
                    value={employment}
                    onChange={(e) => setEmployment(e.target.value)}
                    className="w-full bg-white border border-[#e8eaef] rounded-lg px-3.5 py-2.5 text-sm text-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30 focus:border-[#29ABE2] transition-colors"
                  />
                </div>

                {/* Power */}
                <div>
                  <label className="block text-xs font-medium text-[#6b7280] mb-1.5 uppercase tracking-wide">Power Requirement (MW)</label>
                  <input
                    type="text"
                    value={power}
                    onChange={(e) => setPower(e.target.value)}
                    className="w-full bg-white border border-[#e8eaef] rounded-lg px-3.5 py-2.5 text-sm text-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30 focus:border-[#29ABE2] transition-colors"
                  />
                </div>

                {/* Water */}
                <div>
                  <label className="block text-xs font-medium text-[#6b7280] mb-1.5 uppercase tracking-wide">Water Requirement</label>
                  <div className="relative">
                    <select
                      value={water}
                      onChange={(e) => setWater(e.target.value)}
                      className="w-full appearance-none bg-white border border-[#e8eaef] rounded-lg px-3.5 py-2.5 text-sm text-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30 focus:border-[#29ABE2] transition-colors"
                    >
                      <option>Required</option>
                      <option>Not Required</option>
                      <option>Optional</option>
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#9ca3af]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-medium text-[#6b7280] mb-1.5 uppercase tracking-wide">Preferred Location (optional)</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Any"
                    className="w-full bg-white border border-[#e8eaef] rounded-lg px-3.5 py-2.5 text-sm text-[#1a1f36] placeholder:text-[#c4c9d4] focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30 focus:border-[#29ABE2] transition-colors"
                  />
                </div>

                {/* Commissioning */}
                <div>
                  <label className="block text-xs font-medium text-[#6b7280] mb-1.5 uppercase tracking-wide">Target Commissioning</label>
                  <input
                    type="text"
                    value={commissioning}
                    onChange={(e) => setCommissioning(e.target.value)}
                    className="w-full bg-white border border-[#e8eaef] rounded-lg px-3.5 py-2.5 text-sm text-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30 focus:border-[#29ABE2] transition-colors"
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="mt-7">
                <button 
                  type="button" 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full bg-[#29ABE2] hover:bg-[#1a8fc0] active:bg-[#167db0] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Investment'}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right panel */}
            <div className="w-[320px] bg-white rounded-xl border border-[#e8eaef] flex-shrink-0 flex flex-col gap-4">
              {/* Hero card */}
              <div className=" rounded-xl  overflow-hidden">
                
                <div className="relative h-[350px] px-4 py-4">
                  <div className="p-5 absolute z-2">
                  <p className="text-[15px] font-light text-[#1a1f36] leading-snug">
                    A more prosperous{' '}
                    <span className="font-bold">West Bengal</span>
                    <br />
                    for generations to come.
                  </p>
                </div>
                  <img
                    src="https://images.unsplash.com/photo-1592385456792-dfef3ae5fa87?w=600&h=320&fit=crop&auto=format"
                    alt="Industrial facility aerial view"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl  p-5 space-y-3">
                {FEATURES.map((f) => (
                  <div key={f.label} className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#eaf6fd] flex items-center justify-center flex-shrink-0">
                      {f.icon}
                    </div>
                    <span className="text-sm font-medium text-[#1a1f36]">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
    </main>
  );
}
