export const services = [
  {
    slug: 'well-child-visits',
    title: 'Well Child Visits',
    eyebrow: 'Preventive Care',
    description:
      'Routine checkups, developmental screenings, school and sports forms, and preventive care to support healthy growth at every stage.',
    image: '/images/service-well-child-height-chart.jpg',
    detail:
      'Well visits help families stay ahead of growth, development, school requirements, and preventive care milestones at every age.',
    bullets: [
      'Routine preventive checkups',
      'Development and growth screenings',
      'School, camp, and sports paperwork',
    ],
    bestFor: 'Families looking for preventive care, developmental follow-up, and routine health planning.',
    includes: [
      'Growth and development review',
      'Age-appropriate preventive guidance',
      'Forms and documentation support when needed',
    ],
    commonQuestions: [
      {
        question: 'What can families expect during a well visit?',
        answer:
          'Families can expect screenings, preventive guidance, milestone discussions, and time for routine questions at each stage of growth.',
      },
      {
        question: 'Why keep a dedicated detail page for this service?',
        answer:
          'Because well visits often need age-based guidance, downloadable forms, and FAQ content that would be too crowded inside a listing card.',
      },
    ],
    relatedLinks: ['School & Sports Forms', 'Immunizations', 'Provider Profiles'],
  },
  {
    slug: 'immunizations',
    title: 'Immunizations',
    eyebrow: 'Preventive Care',
    description:
      'Recommended childhood and adolescent vaccines, clear guidance for families, and help keeping immunization records up to date.',
    image: '/images/service-immunizations-teen.jpg',
    detail:
      'We help families with vaccine schedules, record requests, school compliance guidance, and common immunization questions.',
    bullets: [
      'Routine childhood vaccine guidance',
      'Record updates and access',
      'Support for school and activity requirements',
    ],
    bestFor: 'Families needing vaccine guidance, record updates, or support with school requirements.',
    includes: [
      'Routine immunization planning',
      'Record tracking and updates',
      'Support for common vaccine questions',
    ],
    commonQuestions: [
      {
        question: 'Where can I find vaccine-specific guidance?',
        answer:
          'Yes. It is a good place for schedule overviews, common questions, record request links, and visit preparation guidance.',
      },
      {
        question: 'Why keep immunizations separate from the general services listing?',
        answer:
          'Immunizations have their own timing, record, school, and visit-preparation needs, so families benefit from dedicated guidance.',
      },
    ],
    relatedLinks: ['Well Child Visits', 'Forms & Resources', 'Locations'],
  },
  {
    slug: 'health-issues-and-illnesses',
    title: 'Health Issues & Illnesses',
    eyebrow: 'Acute Care',
    description:
      'Evaluation and treatment for common illnesses, minor injuries, fevers, respiratory concerns, rashes, and other everyday pediatric needs.',
    image: '/images/service-illness-throat-exam.jpg',
    detail:
      'Find urgent visit guidance, when-to-call instructions, same-day appointment information, and condition-specific resources.',
    bullets: [
      'Same-day pediatric concerns',
      'Common illness evaluation',
      'Guidance on when to call or come in',
    ],
    bestFor: 'Families navigating fevers, rashes, respiratory symptoms, minor injuries, and everyday pediatric concerns.',
    includes: [
      'Common illness evaluation guidance',
      'Same-day appointment context',
      'Clear next-step instructions for families',
    ],
    commonQuestions: [
      {
        question: 'What health concerns can the clinic evaluate?',
        answer:
          'Common symptom guidance, urgent visit expectations, when-to-call advice, and links to related forms or phone support are all strong fits here.',
      },
      {
        question: 'How is this different from a provider page?',
        answer:
          'Our care team evaluates common symptoms and helps families understand the appropriate next step for their child.',
      },
    ],
    relatedLinks: ['Locations', 'Telemedicine', 'Providers'],
  },
  {
    slug: 'safety',
    title: 'Safety',
    eyebrow: 'Family Guidance',
    description:
      'Practical safety guidance and care for minor injuries, including laceration evaluation, sutures, and X-rays when appropriate.',
    image: '/images/service-safety-injury-v3.jpg',
    detail:
      'Our team supports injury prevention and evaluates many minor injuries, with laceration care, sutures, and X-rays available when clinically appropriate.',
    bullets: [
      'Laceration evaluation and sutures',
      'X-rays for select injuries',
      'Injury prevention and safety guidance',
    ],
    bestFor: 'Families seeking guidance or care for minor cuts, lacerations, possible injuries, and everyday safety concerns.',
    includes: [
      'Evaluation of minor cuts and lacerations',
      'Sutures when appropriate',
      'X-rays for select injury concerns',
    ],
    commonQuestions: [
      {
        question: 'Can PYAM treat cuts and lacerations?',
        answer:
          'Our team evaluates many minor cuts and lacerations and can provide sutures when appropriate. Call ahead so we can help determine the right next step.',
      },
      {
        question: 'Are X-rays available?',
        answer:
          'X-rays are available for select injury concerns. The care team will determine whether imaging is appropriate after reviewing the injury.',
      },
    ],
    relatedLinks: ['Well Child Visits', 'Forms & Resources', 'Locations'],
  },
  {
    slug: 'telemedicine',
    to: '/telemedicine',
    title: 'Telemedicine',
    eyebrow: 'Virtual Care',
    description:
      'Convenient video visits for established patients and selected care needs, with guidance from your PYAM provider at home.',
    image: '/images/telemedicine-family-video-visit.jpg',
    detail:
      'Connect with a provider using a camera-enabled phone, tablet, or computer when telemedicine is appropriate for the visit.',
    bullets: [
      'Live video visits from home',
      'Available for select visit types',
      'Clear treatment and follow-up guidance',
    ],
    bestFor: 'Established PYAM patients whose concerns can be safely and effectively evaluated through a virtual appointment.',
    includes: [
      'Live discussion with a provider',
      'Treatment and next-step guidance',
      'Prescriptions when clinically appropriate',
    ],
    commonQuestions: [],
    relatedLinks: ['Health Issues & Illnesses', 'Locations', 'Contact'],
  },
  {
    slug: 'newborn-care',
    title: 'Newborn Care',
    eyebrow: 'Infant Care',
    description:
      'Compassionate support for newborns and parents, including lactation consulting, newborn well-child checks, and circumcisions.',
    // Approved image: keep locked unless the client explicitly requests a replacement.
    image: '/images/service-newborn-locked.jpg',
    detail:
      'Our newborn care team supports feeding, growth, development, preventive care, and common questions during your baby’s earliest weeks.',
    bullets: [
      'Lactation consultant support',
      'Newborn well-child checks',
      'Circumcisions',
    ],
    bestFor: 'New parents looking for coordinated medical and feeding support during the newborn stage.',
    includes: [
      'Lactation consultant support',
      'Newborn well-child checks',
      'Circumcisions',
    ],
    commonQuestions: [],
    relatedLinks: ['Well Child Visits', 'Providers', 'Locations'],
  },
]
