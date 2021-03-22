var colorPalette = {
  "Product": '#5ed8dd',
  "Legal": '#45b3d6',
  "Security": '#6087d6',
  "Insurance": '#91e6b4',
  "Fees": '#7736b5',
}

let data = [
  {
    "task": "Product Build",
    "category": "Product",
    "months": "12",
    "cost": "150000",
    "size": "100",
    "description": "You will need to hire an internal or third-party team of frontend engineers and designers to build all UI/UX. This which must go through strenuous partner approvals, minumum of $100k in fees"
  },
  {
    "task": "Product Manager",
    "category": "Product",
    "months": "48",
    "cost": "480000",
    "size": "70",
    "description": "You will need to hire a product manager to map out all API integrations, manage dev teams, plan sprints, and work with partners, minimum of $100k per year."
  },
  {
    "task": "Partnerships Manager",
    "category": "Product",
    "months": "12",
    "cost": "120000",
    "size": "70",
    "description": "You will need to hire a partnerships manager to curate relationships with all potential vendors and negotiate the business relationships, minimum of $100k per year."
  },
  {
    "task": "Compliance Officer",
    "category": "Legal",
    "months": "48",
    "cost": "450000",
    "size": "75",
    "description": "You will need to have a compliance officer that can manage your fraud, AML, and other policies, minimum $100k per year"
  },
  {
    "task": "Compliant Call Center",
    "category": "Legal",
    "months": "48",
    "cost": "400000",
    "size": "70",
    "description": "You will need to have a PCI compliant call center, with the ability to give prompts, tape calls, provide technical and card support, minimum $100k per year to contract."
  },
  {
    "task": "CCPA",
    "category": "Legal",
    "months": "30",
    "cost": "120000",
    "size": "40",
    "description": "You will need to comply with California’s CCPA privacy law in your database, privacy policy, and call center, minimum $10k per year."
  },
  {
    "task": "SOC 2 Compliance",
    "category": "Legal",
    "months": "48",
    "cost": "300000",
    "size": "20",
    "description": "You will need to have a SOC 2 compliant data and security infrastructure, including a SOC 2 audit, minimum of $100k per year."
  },
  {
    "task": "PCI Compliance",
    "category": "Legal",
    "months": "48",
    "cost": "200000",
    "size": "50",
    "description": "You will need to get PCI Level 2 compliance, including a yearly audit, minimum of $50k per year."
  },
  {
    "task": "Privacy Policy",
    "category": "Legal",
    "months": "6",
    "cost": "10000",
    "size": "20",
    "description": "You will need a professional law firm to craft a custom privacy policy and terms of use, a minimum of $10k per year."
  },
  {
    "task": "Pen Testing",
    "category": "Security",
    "months": "48",
    "cost": "120000",
    "size": "30",
    "description": "You will need to have at least a yearly penetration test from a reputable firm of all of your data infrastructure, minimum of $25k per year."
  },
  {
    "task": "PII Vault",
    "category": "Security",
    "months": "48",
    "cost": "100000",
    "size": "30",
    "description": "You will need to store all client records in an encrypted third-party vault, minimum of $25k per year."
  },
  {
    "task": "Breach Insurance",
    "category": "Insurance",
    "months": "48",
    "cost": "35000",
    "size": "40",
    "description": "You will need at least $3 Mil of cyber breach insurance to protect against theft of client data, minimum of $10k per year."
  },
  {
    "task": "Liability Insurance",
    "category": "Insurance",
    "months": "48",
    "cost": "80000",
    "size": "50",
    "description": "You will need at least $3 Mil of general liability insurance, minimum of $25k per year."
  },
  {
    "task": "Crime Insurance",
    "category": "Insurance",
    "months": "36",
    "cost": "350000",
    "size": "70",
    "description": "You will need at least $3 Mil of crime insurance to protect against financial theft, minimum of $10k per year."
  },
  {
    "task": "E&O Insurance",
    "category": "Insurance",
    "months": "48",
    "cost": "30000",
    "size": "60",
    "description": "You will need at least $3 Mil of tech errors and ommissions insurance, minimum of $10k per year."
  },
  {
    "task": "Up Front Vendor Fees",
    "category": "Fees",
    "months": "6",
    "cost": "100000",
    "size": "80",
    "description": "You will need to pay full retail price to sponsor banks, middleware API vendors, and other partners for access, a minimum of $100k in fees."
  },
  {
    "task": "Monthly Minimums",
    "category": "Fees",
    "months": "24",
    "cost": "200000",
    "size": "40",
    "description": "You will need to meet minimum monthly fees for all downstream partners and vendors, even as you build out your product and userbase, minimum of $10k per month."
  },
  {
    "task": "API Access Fees",
    "category": "Fees",
    "months": "48",
    "cost": "300000",
    "size": "40",
    "description": "You will need to pay flat API access fee for all downstream partners and vendors, even as you build out your product and userbase, minimum of $10k per month."
  },
  {
    "task": "Legal Fees",
    "category": "Fees",
    "months": "12",
    "cost": "50000",
    "size": "40",
    "description": "You will need to hire an internal counsel or third-party law firm to negotiate 50+ page contracts with sponsor banks and other vendors, a minimum of $50k in fees."
  }
]