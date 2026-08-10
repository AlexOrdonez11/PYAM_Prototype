export const siteAlerts = [
  {
    id: 'insurance-contact-information',
    label: 'Insurance reminder',
    title: 'Keep your health insurance contact information current.',
    summary:
      'Medical Assistance and MinnesotaCare members should update their address, phone number, and email before renewal time.',
    actionLabel: 'Update your information',
    href: 'https://mn.gov/dhs/mycontactinfo/',
  },
]

export const news = [
  {
    slug: 'meet-our-team-dr-tammi-plotnik',
    category: 'Meet Our Team',
    dateLabel: 'Provider spotlight',
    title: 'Meet our team: Dr. Tammi Plotnik',
    summary:
      'Get to know Dr. Tammi Plotnik, a board-certified pediatrician who has cared for PYAM families since 2001.',
    image: '/images/dr-tammi-plotnik-optimized.jpg',
    body: [
      'Dr. Tammi Plotnik has been part of Pediatric & Young Adult Medicine since 2001, building long-term relationships with children and families through every stage of growth.',
      'A board-certified pediatrician, Dr. Plotnik provides preventive and primary pediatric care with a family-centered approach. She also has a growing special interest in sports medicine and enjoys helping active children and teens stay healthy.',
      'Dr. Plotnik earned her medical degree from the University of Minnesota School of Medicine in 1998 and completed her postgraduate training in pediatrics in 2001.',
    ],
    action: {
      label: 'View Dr. Plotnik’s profile',
      href: '/providers/tammi-plotnik',
      internal: true,
    },
  },
  {
    slug: 'welcome-dr-christopher-ordonez',
    category: 'Care Team',
    dateLabel: 'Provider announcement',
    title: 'Welcome Dr. Christopher Ordonez to Pediatric & Young Adult Medicine',
    summary:
      'Meet Dr. Ordonez, a board-certified pediatrician experienced in preventive care, chronic condition management, and behavioral health.',
    image: '/images/dr-christopher-ordonez-optimized.jpg',
    body: [
      'Pediatric & Young Adult Medicine is pleased to welcome Dr. Christopher Ordonez to the care team.',
      'Dr. Ordonez is a board-certified pediatrician with experience in preventive care, chronic condition management, and behavioral health. He partners with families to create thoughtful, individualized plans that help children thrive.',
    ],
    action: {
      label: 'View Dr. Ordonez’s profile',
      href: '/providers/christopher-ordonez',
      internal: true,
    },
  },
  {
    slug: 'pyam-joins-i-health',
    category: 'Practice Update',
    dateLabel: 'December 2023',
    title: 'PYAM joins i-Health as its first pediatric division',
    summary:
      'PYAM joined Infinite Health Collaborative to support continued independent, physician-led pediatric care.',
    image: '/images/i-health-768x576.jpg',
    body: [
      'Pediatric & Young Adult Medicine joined Infinite Health Collaborative (i-Health) as the organization’s first pediatric division effective December 4, 2023.',
      'The collaboration supports PYAM’s focus on thoughtful, patient-first care while providing access to shared scheduling and billing systems. PYAM continues serving families through its established pediatric care team and locations.',
      'For services provided on or after December 4, 2023, patient bills and explanations of benefits may display the Infinite Health Collaborative name.',
    ],
    action: {
      label: 'Learn more about i-Health',
      href: 'https://www.i-health.com/',
      internal: false,
    },
  },
]
