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
      { label: 'School & Sports Forms', to: '/sports-forms' },
    ],
  },
  {
    label: 'Patient Portal',
    to: '/patient-portal',
    children: [
      { label: 'Patient Portal', to: '/patient-portal' },
      { label: 'Medical Records', to: '/medical-records' },
      { label: 'School & Sports Forms', to: '/sports-forms' },
    ],
  },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

export const schedulingUrl = 'https://phreesia.me/PYAMReturningPatientPYAM'

export const quickActions = [
  {
    label: 'Well Child Exams',
    description:
      'Schedule a routine preventive visit to review growth, development, overall health, and age-appropriate care needs.',
    href: schedulingUrl,
  },
  {
    label: 'Sick Visit',
    description:
      'Choose this option when your child needs timely evaluation for an illness, new symptoms, or another immediate health concern.',
    href: 'https://phreesia.me/PYAMsickvisitPYAM',
  },
  {
    label: 'Medication Checks',
    description:
      'Book a follow-up to review how a current medication is working and discuss dosage, side effects, or ongoing management.',
    href: 'https://phreesia.me/PYAMmedicationchecksPYAM',
  },
  {
    label: 'Well Exams & Med Checks',
    description:
      'Schedule a combined well-child examination and medication follow-up in one visit.',
    href: 'https://phreesia.me/PYAMwellexamcheck',
  },
  {
    label: 'Eagan Saturday Visits',
    featured: true,
    description:
      'Request an eligible Saturday medical appointment at our Eagan office, available from 9:00 AM to 4:00 PM.',
    href: 'https://phreesia.me/PYAMSaturdayVisitsPYAM',
  },
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
  { label: 'Telemedicine', to: '/telemedicine' },
  { label: 'Prescription Refill Line', href: 'tel:6512566796' },
  { label: 'Latest News', to: '/news' },
  { label: 'All News', to: '/news' },
  { label: 'Patient Portal', to: '/patient-portal' },
  { label: 'Medical Records', to: '/medical-records' },
  { label: 'School & Sports Forms', to: '/sports-forms' },
  { label: 'Contact', to: '/contact' },
]

export const socialLinks = {
  facebook: 'https://www.facebook.com/pyamadmin/',
  instagram: 'https://www.instagram.com/pyam_mn/',
  youtube: 'https://www.youtube.com/channel/UCK9uTQr8VyjwnBWaro3-dpw',
}
