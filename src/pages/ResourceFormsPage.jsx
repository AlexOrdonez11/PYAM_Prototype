import { Link } from 'react-router-dom'

const pageContent = {
  medicalRecords: {
    pageClass: 'medical-records-page',
    eyebrow: 'Medical Records',
    title: 'Medical records forms and request resources.',
    subtitle:
      'Find the forms you need to request records or manage patient documentation.',
    introduction:
      'A downloadable medical records form will be available here. The final form name, instructions, and file will be added as soon as it is received.',
    formsHeading: 'Form downloads are coming soon.',
    image: '/images/medical-records-family-consultation.jpg',
    imageAlt: 'Pediatric clinician reviewing a document with a child and parent',
    cardLabel: 'Medical Records Form',
    forms: [
      {
        title: 'Medical Records Form',
        description:
          'This placeholder will be replaced with the final form name, instructions, and PDF download.',
      },
    ],
    contactText:
      'For help with record requests or patient documentation, contact the Medical Records team.',
    primaryAction: {
      label: 'Call (651) 256-6717',
      href: 'tel:6512566717',
    },
    secondaryAction: {
      label: 'Email medical records',
      href: 'mailto:medicalrecords@pyam.com',
    },
    relatedLabel: 'Looking for activity paperwork?',
    relatedTitle: 'Visit the School and Sports Forms page.',
    relatedText:
      'Sports-related form downloads will be organized separately so families can find the correct paperwork quickly.',
    relatedTo: '/sports-forms',
    relatedAction: 'View school and sports forms',
  },
  sportsForms: {
    pageClass: 'sports-forms-page',
    eyebrow: 'School and Sports Forms',
    title: 'School and sports forms.',
    subtitle:
      'Help your child get ready for school, athletics, day care, and other activities with the paperwork their program requests.',
    heroDetail:
      'From sports physicals and medication authorizations to day care health summaries, having the correct form ready helps families stay organized and gives schools, coaches, and care programs the information they need.',
    introduction:
      'Download the currently available school and sports forms below. One additional form will be added as soon as it is received.',
    formsHeading: 'School and sports forms',
    image: '/images/sports-forms-youth-soccer.jpg',
    imageAlt: 'Young soccer player holding a ball on the field',
    guide: {
      eyebrow: 'Preparing for school and activities',
      title: 'Make the paperwork part of your appointment plan.',
      introduction:
        'School and activity forms help families share the information requested by teachers, coaches, nurses, and child care programs. Preparing the correct paperwork before the visit gives your child’s care team more time to review it with you.',
      steps: [
        {
          title: 'Download the correct form',
          text: 'Choose the form requested by your school, team, or child care program. Download and print every page before the appointment.',
        },
        {
          title: 'Complete the family sections',
          text: 'Fill in the student information, health history, and parent or guardian signatures. Leave sections marked for a clinician or health care provider blank.',
        },
        {
          title: 'Bring it to the clinic',
          text: 'Bring the printed form and any instructions from the school or program to the appointment. Provider completion may require an examination, additional information, or follow-up.',
        },
      ],
      note:
        'Plan ahead when possible. School and sports deadlines can be busy, and some paperwork may not be completed on the same day it is received.',
    },
    cardLabel: 'School and Sports Form',
    forms: [
      {
        title: 'Sports Physical Form',
        description:
          'Sports qualifying physical examination, health history, and medical eligibility paperwork.',
        href: '/forms/2026-2027-sports-physical-form.pdf',
        action: 'Download PDF',
      },
      {
        title: 'Authorization for Administration of Medication',
        description:
          'Authorization form for medication to be administered at school during the 2026-2027 school year.',
        href: '/forms/authorization-for-administration-of-medication.pdf',
        action: 'Download PDF',
      },
      {
        title: 'Day Care Health Summary',
        description:
          'Health care summary for a child care program, to be completed by a health care provider.',
        href: '/forms/day-care-health-summary.pdf',
        action: 'Download PDF',
      },
    ],
    contactText:
      'If the form requires a physical examination or provider review, call the PYAM appointment team before bringing it to the clinic.',
    primaryAction: {
      label: 'Call (651) 256-6714',
      href: 'tel:6512566714',
    },
    relatedLabel: 'Looking for patient documentation?',
    relatedTitle: 'Visit the Medical Records page.',
    relatedText:
      'Medical records request forms and documentation resources are organized on a separate page.',
    relatedTo: '/medical-records',
    relatedAction: 'View medical records',
  },
}

function PlaceholderIcon() {
  return (
    <div className="portal-file-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M6 2.8h8.2L19 7.6v13.6H6V2.8Zm8 1.9v3.1h3.1L14 4.7ZM7.8 4.6v14.8h9.4v-9.8h-5V4.6H7.8Zm2 8h5.4v1.7H9.8v-1.7Zm0 3.2h5.4v1.7H9.8v-1.7Z" />
      </svg>
    </div>
  )
}

function ResourceFormsPage({ page }) {
  const content = pageContent[page]

  return (
    <main className={`interior-page resource-forms-page ${content.pageClass}`}>
      <section className="detail-hero shell reveal-on-scroll">
        <div className="detail-hero-media resource-forms-hero-media">
          <img src={content.image} alt={content.imageAlt} decoding="async" />
        </div>
        <div className="detail-hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="detail-subtitle">{content.subtitle}</p>
          {content.heroDetail ? <p>{content.heroDetail}</p> : null}
          <p>{content.contactText}</p>
          <div className="page-action-row">
            <a className="button button-primary" href={content.primaryAction.href}>
              {content.primaryAction.label}
            </a>
            {content.secondaryAction ? (
              <a className="button button-secondary" href={content.secondaryAction.href}>
                {content.secondaryAction.label}
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {content.guide ? (
        <section className="section shell resource-guidance-section">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">{content.guide.eyebrow}</p>
            <h2>{content.guide.title}</h2>
            <p>{content.guide.introduction}</p>
          </div>

          <div className="portal-step-grid reveal-on-scroll">
            {content.guide.steps.map((step, index) => (
              <article className="detail-section-card portal-step-card" key={step.title}>
                <span className="portal-step-number" aria-hidden="true">{index + 1}</span>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <p className="resource-guidance-note reveal-on-scroll">{content.guide.note}</p>
        </section>
      ) : null}

      <section className="section shell section-soft-alt resource-forms-section">
        <div className="section-heading reveal-on-scroll">
          <p className="eyebrow">Forms &amp; Downloads</p>
          <h2>{content.formsHeading}</h2>
          <p>{content.introduction}</p>
        </div>

        <div className="portal-resource-grid reveal-on-scroll">
          {content.forms.map((form) => (
            <article className="detail-section-card portal-resource-card resource-form-placeholder" key={form.title}>
              <PlaceholderIcon />
              <p className="card-kicker">{content.cardLabel}</p>
              <h2>{form.title}</h2>
              <p>{form.description}</p>
              {form.href ? (
                <a
                  className="button button-secondary form-download-action"
                  href={form.href}
                  download
                >
                  {form.action}
                </a>
              ) : (
                <span className="button button-secondary form-placeholder-action" aria-disabled="true">
                  Coming soon
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section shell portal-help-section">
        <div className="portal-help-card reveal-on-scroll">
          <div>
            <p className="eyebrow">{content.relatedLabel}</p>
            <h2>{content.relatedTitle}</h2>
            <p>{content.relatedText}</p>
          </div>
          <Link className="button button-light" to={content.relatedTo}>
            {content.relatedAction}
          </Link>
        </div>
      </section>
    </main>
  )
}

export function MedicalRecordsPage() {
  return <ResourceFormsPage page="medicalRecords" />
}

export function SportsFormsPage() {
  return <ResourceFormsPage page="sportsForms" />
}
