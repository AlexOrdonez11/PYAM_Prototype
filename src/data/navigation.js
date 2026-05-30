export const navigation = [
  { label: 'Home', to: '/' },
  {
    label: 'Providers',
    to: '/providers',
    children: [
      { label: 'Dr. Tammi Plotnik', to: '/providers/tammi-plotnik' },
      { label: 'Dr. Christopher Ordonez', to: '/providers/christopher-ordonez' },
      { label: 'Maggie Smith, CPNP, CBS', to: '/providers/margaret-maggie-smith' },
      { label: 'Meredith Duran, CNP', to: '/providers/meredith-duran' },
      { label: 'Tiffany Maher, CPNP-PC', to: '/providers/tiffany-maher' },
      { label: 'Afiifa Karie, CPNP', to: '/providers/afiifa-karie' },
    ],
  },
  {
    label: 'Locations & Hours',
    to: '/locations',
    children: [
      { label: 'Maplewood Office', to: '/locations/maplewood' },
      { label: 'Eagan Office', to: '/locations/eagan' },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Well Child Visits', to: '/services/well-child-visits' },
      { label: 'Health Issues & Illnesses', to: '/services/health-issues-and-illnesses' },
      { label: 'Safety', to: '/services/safety' },
      { label: 'Immunizations', to: '/services/immunizations' },
    ],
  },
  { label: 'Forms', to: '/forms' },
  { label: 'Patient Portal', to: '/forms' },
]

export const quickActions = [
  { label: 'Med Refill', href: 'tel:6512566796' },
  { label: 'Talk to Virtual Assistant', action: 'open-chatbot' },
  { label: 'Talk with Front Desk', href: 'tel:6512566714' },
]

export const sitemapLinks = [
  { label: 'Providers Listing', to: '/providers' },
  { label: 'Locations & Hours', to: '/locations' },
  { label: 'Maplewood Office', to: '/locations/maplewood' },
  { label: 'Eagan Office', to: '/locations/eagan' },
  { label: 'Services', to: '/services' },
  { label: 'Well Child Visits', to: '/services/well-child-visits' },
  { label: 'Health Issues / Illnesses', to: '/services/health-issues-and-illnesses' },
  { label: 'Prescription Refill Line', href: '/#refill-line' },
  { label: 'Latest News', href: '/#news' },
  { label: 'Forms', to: '/forms' },
]
