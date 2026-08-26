import { Link } from 'react-router-dom'

const pageContent = {
  medicalRecords: {
    pageClass: 'medical-records-page',
    eyebrow: 'Medical Records',
    title: 'Medical records forms and request resources.',
    subtitle:
      'Find the forms you need to request records or manage patient documentation.',
    introduction:
      'Three downloadable medical records forms will be available here. The final form names, instructions, and files will be added as soon as they are received.',
    image: '/images/medical-records-family-consultation.jpg',
    imageAlt: 'Pediatric clinician reviewing a document with a child and parent',
    cardLabel: 'Medical Records Form',
    formTitle: (number) => `Medical Records Form ${number}`,
    formDescription:
      'This placeholder will be replaced with the final form name, instructions, and PDF download.',
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
    relatedTitle: 'Visit the Sports Forms page.',
    relatedText:
      'Sports-related form downloads will be organized separately so families can find the correct paperwork quickly.',
    relatedTo: '/sports-forms',
    relatedAction: 'View sports forms',
  },
  sportsForms: {
    pageClass: 'sports-forms-page',
    eyebrow: 'Sports Forms',
    title: 'Sports forms and activity paperwork.',
    subtitle:
      'Find downloadable forms for school sports and other organized activities.',
    introduction:
      'Three downloadable sports forms will be available here. The final form names, instructions, and files will be added as soon as they are received.',
    image: '/images/sports-forms-youth-soccer.jpg',
    imageAlt: 'Young soccer player holding a ball on the field',
    cardLabel: 'Sports Form',
    formTitle: (number) => `Sports Form ${number}`,
    formDescription:
      'This placeholder will be replaced with the final form name, instructions, and PDF download.',
    contactText:
      'For questions about appointments or paperwork for an upcoming activity, call the PYAM appointment team.',
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
  const placeholders = [1, 2, 3]

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

      <section className="section shell section-soft-alt resource-forms-section">
        <div className="section-heading reveal-on-scroll">
          <p className="eyebrow">Forms &amp; Downloads</p>
          <h2>Form downloads are coming soon.</h2>
          <p>{content.introduction}</p>
        </div>

        <div className="portal-resource-grid reveal-on-scroll">
          {placeholders.map((number) => (
            <article className="detail-section-card portal-resource-card resource-form-placeholder" key={number}>
              <PlaceholderIcon />
              <p className="card-kicker">{content.cardLabel}</p>
              <h2>{content.formTitle(number)}</h2>
              <p>{content.formDescription}</p>
              <span className="button button-secondary form-placeholder-action" aria-disabled="true">
                Coming soon
              </span>
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
