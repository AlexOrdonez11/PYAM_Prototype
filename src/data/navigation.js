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
      { label: 'Newborn Care', to: '/services/newborn-care' },
    ],
  },
  {
    label: 'Patient Portal',
    to: '/patient-portal',
  },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

export const quickActions = [
  { label: 'Well Exam', href: 'https://phreesia.me/PYAMReturningPatient' },
  { label: 'Sick Visit', href: 'https://phreesia.me/PYAMsickvisit' },
  { label: 'Medication Check', href: 'https://phreesia.me/PYAMmedicationchecks' },
  { label: 'Eagan Saturday Visit', href: 'https://phreesia.me/PYAMSaturdayVisits' },
]

export const sitemapLinks = [
  { label: 'Providers Listing', to: '/providers' },
  { label: 'Locations & Hours', to: '/locations' },
  { label: 'Maplewood Office', to: '/locations/maplewood' },
  { label: 'Eagan Office', to: '/locations/eagan' },
  { label: 'Services', to: '/services' },
  { label: 'Well Child Visits', to: '/services/well-child-visits' },
  { label: 'Health Issues / Illnesses', to: '/services/health-issues-and-illnesses' },
  { label: 'Newborn Care', to: '/services/newborn-care' },
  { label: 'Prescription Refill Line', href: '/#refill-line' },
  { label: 'Latest News', href: '/#news' },
  { label: 'All News', to: '/news' },
  { label: 'Patient Portal', to: '/patient-portal' },
  { label: 'Contact', to: '/contact' },
]

export const socialLinks = {
  facebook: 'https://www.facebook.com/pyamadmin/',
  instagram: 'https://www.instagram.com/pyam_mn/',
  youtube: 'https://www.youtube.com/channel/UCK9uTQr8VyjwnBWaro3-dpw',
}
