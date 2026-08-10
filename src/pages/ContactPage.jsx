const departments = [
  {
    title: 'Appointments',
    details: ['Central Appointment Line: (651) 256-6714'],
    href: 'tel:6512566714',
    action: 'Call appointments',
  },
  {
    title: 'Business Office',
    details: ['Phone: (651) 227-7806, option 2', 'Fax: (651) 256-6707', 'Billing@pyam.com'],
    href: 'mailto:Billing@pyam.com',
    action: 'Email billing',
  },
  {
    title: 'Medical Records',
    details: ['Phone: (651) 256-6717', 'Fax: (888) 891-5871', 'medicalrecords@pyam.com'],
    href: 'mailto:medicalrecords@pyam.com',
    action: 'Email medical records',
  },
  {
    title: 'Insurance Referrals',
    details: ['Phone: (651) 227-7806, option 2', 'Referrals@pyam.com'],
    href: 'mailto:Referrals@pyam.com',
    action: 'Email referrals',
  },
  {
    title: 'Prescription Refills',
    details: ['Refill line: (651) 256-6796'],
    href: 'tel:6512566796',
    action: 'Call refill line',
  },
]

function ContactPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero shell reveal-on-scroll">
        <div className="interior-hero-copy">
          <p className="eyebrow">Contact PYAM</p>
          <h1>Reach the right team without searching for a number.</h1>
          <p>
            Use the department directory below for appointments, billing, medical
            records, referrals, and prescription refills.
          </p>
        </div>
      </section>

      <section className="section shell section-soft">
        <div className="listing-grid reveal-on-scroll">
          {departments.map((department) => (
            <article className="detail-section-card" key={department.title}>
              <h2>{department.title}</h2>
              <div className="stacked-list">
                {department.details.map((detail) => <span key={detail}>{detail}</span>)}
              </div>
              <a className="button button-primary" href={department.href}>
                {department.action}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ContactPage
