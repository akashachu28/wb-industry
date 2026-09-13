// Location data extracted from Mialo Bengal Industrial Intelligence Dataset
// Contains information for Kharagpur, Uluberia, and Falta industrial parks

export const LOCATION_DATA = {
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
    badge: "11",
    
    // Infrastructure details
    infrastructure: {
      power: {
        capacity: "200 MW",
        reliability: "99.8%",
        backup: "100% DG backup available",
        substations: 3,
        voltage: "33/11 KV"
      },
      water: {
        source: "Kasai River + Deep Borewells",
        dailyCapacity: "8 MLD",
        quality: "Industrial grade treated water",
        storage: "2 ML overhead reservoir"
      },
      connectivity: {
        road: {
          highway: "NH-16 (12 km)",
          expressway: "Bengal Highway Corridor (8 km)",
          condition: "Excellent - 4 lane access road"
        },
        rail: {
          station: "Kharagpur Junction (5 km)",
          type: "Major Railway Hub",
          siding: "Rail siding available inside park"
        },
        airport: "Kolkata Airport (120 km)",
        port: "Haldia Port (140 km)"
      },
      utilities: {
        sewage: "25 MLD STP",
        solidWaste: "Integrated waste management",
        telecom: "Fiber optic network",
        security: "24x7 manned security"
      }
    },
    
    // Incentives
    incentives: [
      {
        category: "Capital Investment",
        description: "15% capital subsidy on plant & machinery",
        eligibility: "Electronics, Auto Components",
        maxAmount: "₹10 Crore"
      },
      {
        category: "Employment Support",
        description: "₹2000/employee/month for 3 years",
        eligibility: "New employment >100",
        maxAmount: "Based on headcount"
      },
      {
        category: "Interest Subsidy",
        description: "5% interest subsidy on term loans",
        eligibility: "MSME/Large units",
        maxAmount: "₹50 Lakh/year"
      },
      {
        category: "Land Cost",
        description: "25% stamp duty waiver",
        eligibility: "All industries",
        maxAmount: "Actual duty"
      },
      {
        category: "Power Tariff",
        description: "Industrial power at competitive rates",
        eligibility: "All units",
        maxAmount: "₹5.80/unit"
      },
      {
        category: "GST Reimbursement",
        description: "State GST reimbursement for 7 years",
        eligibility: "Priority sectors",
        maxAmount: "Up to 75% of SGST"
      }
    ],
    
    // Connectivity timeline
    connectivity_timeline: {
      kolkata: "2.5 hours by road",
      haldia_port: "3 hours by road",
      airport: "2 hours by road",
      nearest_city: "Kharagpur town (5 km)"
    },
    
    // Additional context
    highlights: [
      "Strong electronics & engineering ecosystem",
      "IIT Kharagpur proximity for R&D collaboration",
      "Excellent rail connectivity for raw material movement",
      "Skilled labor availability from technical institutes",
      "Auto component cluster nearby"
    ]
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
    badge: "21",
    
    // Infrastructure details
    infrastructure: {
      power: {
        capacity: "170 MW",
        reliability: "99.5%",
        backup: "Full DG backup capacity",
        substations: 2,
        voltage: "33/11 KV"
      },
      water: {
        source: "Municipal + Borewells",
        dailyCapacity: "6 MLD",
        quality: "Treated industrial water",
        storage: "1.5 ML reservoir"
      },
      connectivity: {
        road: {
          highway: "NH-16 & NH-19 (8 km)",
          expressway: "Kolkata Bypass (10 km)",
          condition: "Excellent - Direct highway access"
        },
        rail: {
          station: "Uluberia Station (3 km)",
          type: "Main Line Station",
          siding: "Available"
        },
        airport: "Kolkata Airport (35 km)",
        port: "Kolkata Port (45 km), Haldia (85 km)"
      },
      utilities: {
        sewage: "20 MLD STP",
        solidWaste: "Centralized collection",
        telecom: "High-speed broadband",
        security: "Integrated surveillance"
      }
    },
    
    // Incentives
    incentives: [
      {
        category: "Capital Investment",
        description: "20% capital subsidy for EV sector",
        eligibility: "EV & Auto Components",
        maxAmount: "₹15 Crore"
      },
      {
        category: "Employment Support",
        description: "₹2500/employee/month for 3 years",
        eligibility: "Manufacturing units >200 employees",
        maxAmount: "Headcount-based"
      },
      {
        category: "Interest Subsidy",
        description: "6% interest subsidy on machinery loans",
        eligibility: "Priority sectors",
        maxAmount: "₹75 Lakh/year"
      },
      {
        category: "Land Allotment",
        description: "30% discount on land premium",
        eligibility: "Large investments >₹100 Cr",
        maxAmount: "Actual cost"
      },
      {
        category: "Logistics Support",
        description: "Freight subsidy on exports",
        eligibility: "Export-oriented units",
        maxAmount: "20% of freight cost"
      },
      {
        category: "Quality Certification",
        description: "50% reimbursement for ISO/quality certifications",
        eligibility: "MSME units",
        maxAmount: "₹2 Lakh"
      }
    ],
    
    // Connectivity timeline
    connectivity_timeline: {
      kolkata: "45 minutes by road",
      haldia_port: "1.5 hours by road",
      airport: "50 minutes by road",
      nearest_city: "Howrah (25 km)"
    },
    
    // Additional context
    highlights: [
      "Closest to Kolkata metro - excellent labor availability",
      "Strong auto component manufacturing ecosystem",
      "Direct access to Kolkata & Haldia ports",
      "Proximity to major automotive plants",
      "Well-developed logistics infrastructure"
    ]
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
    badge: "33",
    
    // Infrastructure details
    infrastructure: {
      power: {
        capacity: "160 MW",
        reliability: "99.2%",
        backup: "Dedicated backup power system",
        substations: 2,
        voltage: "33/11 KV"
      },
      water: {
        source: "River intake + Ground water",
        dailyCapacity: "7 MLD",
        quality: "Multi-stage treatment plant",
        storage: "2 ML overhead + ground reservoir"
      },
      connectivity: {
        road: {
          highway: "NH-117 (5 km)",
          expressway: "Kolkata-Digha Highway",
          condition: "Good - 4 lane connectivity"
        },
        rail: {
          station: "Falta Station (2 km)",
          type: "Goods terminal available",
          siding: "Direct rail siding"
        },
        airport: "Kolkata Airport (55 km)",
        port: "Haldia Port (55 km)"
      },
      utilities: {
        sewage: "18 MLD STP with tertiary treatment",
        solidWaste: "Hazardous & non-hazardous waste management",
        telecom: "Dedicated fiber network",
        security: "CCTV surveillance + patrol"
      }
    },
    
    // Incentives
    incentives: [
      {
        category: "Capital Investment",
        description: "18% capital subsidy on fixed assets",
        eligibility: "Food processing, Chemicals",
        maxAmount: "₹12 Crore"
      },
      {
        category: "Employment Support",
        description: "₹1800/employee/month for 5 years",
        eligibility: "Food processing sector",
        maxAmount: "Based on eligible employees"
      },
      {
        category: "Interest Subsidy",
        description: "5.5% interest subsidy",
        eligibility: "All manufacturing units",
        maxAmount: "₹60 Lakh/year"
      },
      {
        category: "Export Promotion",
        description: "Export incentive - 5% of FOB value",
        eligibility: "Export units",
        maxAmount: "₹50 Lakh/year"
      },
      {
        category: "Environmental Compliance",
        description: "50% subsidy on pollution control equipment",
        eligibility: "All units",
        maxAmount: "₹25 Lakh"
      },
      {
        category: "Technology Upgradation",
        description: "25% subsidy on technology acquisition",
        eligibility: "MSME units",
        maxAmount: "₹15 Lakh"
      }
    ],
    
    // Connectivity timeline
    connectivity_timeline: {
      kolkata: "1.5 hours by road",
      haldia_port: "1 hour by road",
      airport: "1 hour 15 minutes by road",
      nearest_city: "Diamond Harbour (15 km)"
    },
    
    // Additional context
    highlights: [
      "Strategic location near Haldia Port for exports",
      "Special Economic Zone benefits available",
      "Strong chemical & food processing cluster",
      "Coastal location ideal for port-dependent industries",
      "Established industrial area with mature infrastructure"
    ]
  }
};

// Approval processes and timelines
export const APPROVAL_PROCESSES = [
  {
    approval_id: "A001",
    approval_service: "Allotment of land in Industrial Area",
    authority: "WBIDC/WBIIDC",
    domain: "Land",
    indicative_timeline: "60 days",
    dependency: "Land allocation",
    applicability: "Core"
  },
  {
    approval_id: "A002",
    approval_service: "Building Plan Approval",
    authority: "WBIDC/WBIIDC",
    domain: "Industry",
    indicative_timeline: "15-30 days",
    dependency: "Land allotment",
    applicability: "Core"
  },
  {
    approval_id: "A003",
    approval_service: "Factory Plan Approval",
    authority: "Directorate of Factories",
    domain: "Labour",
    indicative_timeline: "50 days",
    dependency: "Building plan",
    applicability: "Core"
  },
  {
    approval_id: "A004",
    approval_service: "Factory License",
    authority: "Directorate of Factories",
    domain: "Labour",
    indicative_timeline: "65 days",
    dependency: "Factory plan",
    applicability: "Core"
  },
  {
    approval_id: "A005",
    approval_service: "Electricity Connection",
    authority: "Power Department",
    domain: "Power",
    indicative_timeline: "7 days",
    dependency: "Load assessment",
    applicability: "Core"
  },
  {
    approval_id: "A007",
    approval_service: "Fire Safety Recommendation",
    authority: "Fire & Emergency Services",
    domain: "Fire",
    indicative_timeline: "15 days",
    dependency: "Building plan",
    applicability: "Core"
  },
  {
    approval_id: "A008",
    approval_service: "Fire Safety Certificate",
    authority: "Fire & Emergency Services",
    domain: "Fire",
    indicative_timeline: "30 days",
    dependency: "Fire recommendation",
    applicability: "Core"
  },
  {
    approval_id: "A009",
    approval_service: "Consent to Establish - Green",
    authority: "WBPCB",
    domain: "Environment",
    indicative_timeline: "15 days",
    dependency: "Project/environment data",
    applicability: "Sector-dependent"
  },
  {
    approval_id: "A010",
    approval_service: "Consent to Establish - Orange",
    authority: "WBPCB",
    domain: "Environment",
    indicative_timeline: "30 days",
    dependency: "Project/environment data",
    applicability: "Sector-dependent"
  },
  {
    approval_id: "A011",
    approval_service: "Consent to Establish - Red",
    authority: "WBPCB",
    domain: "Environment",
    indicative_timeline: "60 days",
    dependency: "Project/environment data",
    applicability: "Sector-dependent"
  },
  {
    approval_id: "A013",
    approval_service: "Trade License",
    authority: "ULB/Panchayat",
    domain: "Local Government",
    indicative_timeline: "Real Time",
    dependency: "Location",
    applicability: "Core"
  }
];
