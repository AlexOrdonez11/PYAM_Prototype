const refillLine = '6512566796'
const officeLine = '6512277806'
const instructionsPdf = '/forms/prescription-refill-instructions.pdf'

const steps = [
  {
    title: 'Prepare the information',
    text: 'Use the worksheet in the downloadable instructions to collect the patient, medication, dosage, callback, provider, and pharmacy details before calling.',
  },
  {
    title: 'Call the refill voicemail',
    text: 'Call the Prescription refill line at (651) 256-6796. Requests may be left 24 hours a day, seven days a week.',
  },
  {
    title: 'Allow time for processing',
    text: 'Allow 72 hours for electronic transmission to the pharmacy, excluding Saturdays, Sundays, and holidays. Prescriptions are processed during regular business hours.',
  },
]

const callChecklist = [
  'Patient’s full name and date of birth',
  'Caller’s name and relationship to the patient',
  'A phone number where you can be reached from 9:00 AM to 5:00 PM, Monday through Friday',
  'Primary physician or nurse practitioner name',
  'Medication name and current AM, noon, and PM dosage',
  'Pharmacy name and full address, including city, state, and ZIP code',
]

function PrescriptionRefillPage() {
  return (
    <main className="interior-page prescription-refill-page">
      <section className="detail-hero shell reveal-on-scroll">
        <div className="detail-hero-media prescription-refill-hero-media">
          <img
            src="/images/prescription-refill-family.jpg"
            alt="Parent supporting a child with medication at home"
            decoding="async"
          />
        </div>
        <div className="detail-hero-copy">
          <p className="eyebrow">Prescription Refills</p>
          <h1>Prescription refill instructions.</h1>
          <p className="detail-subtitle">
            Prepare the required information, leave a complete voicemail, and allow
            enough time for your child’s refill to be processed.
          </p>
          <p>
            The refill voicemail is available at any time, but messages and
            prescriptions are processed during regular business hours.
          </p>
          <div className="page-action-row">
            <a className="button button-primary" href={`tel:${refillLine}`}>
              Call (651) 256-6796
            </a>
            <a className="button button-secondary" href={instructionsPdf} download>
              Download instructions
            </a>
          </div>
        </div>
      </section>

      <section className="section shell refill-instructions-section">
        <div className="section-heading reveal-on-scroll">
          <p className="eyebrow">How to request a refill</p>
          <h2>Three steps before your child needs the medication.</h2>
          <p>
            Providing complete and accurate information helps the care team process
            the request and send the prescription to the correct pharmacy.
          </p>
        </div>

        <div className="portal-step-grid reveal-on-scroll">
          {steps.map((step, index) => (
            <article className="detail-section-card portal-step-card" key={step.title}>
              <span className="portal-step-number" aria-hidden="true">{index + 1}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <aside className="refill-important-note reveal-on-scroll" aria-label="Important medication follow-up requirement">
          <p className="card-kicker">Important</p>
          <h2>Medication follow-up is required.</h2>
          <p>
            All ADD, ADHD, Anxiety and Depression patients who receive prescriptions are required to have
            a medication checkup every 6 months. Patients starting or restarting a
            prescription, or changing a medication or dosage, must be seen 3 or 4 weeks
            after starting the new prescription. Failure to complete the required
            follow-up may cause the refill to be denied.
          </p>
        </aside>
      </section>

      <section className="section shell section-soft-alt refill-details-section">
        <div className="section-heading reveal-on-scroll">
          <p className="eyebrow">Before you call</p>
          <h2>Have these details ready for the voicemail.</h2>
          <p>
            The second page of the downloadable instructions includes a worksheet you
            can complete and read from while leaving the message.
          </p>
        </div>

        <div className="detail-sections reveal-on-scroll">
          <article className="detail-section-card">
            <h2>Information needed</h2>
            <ul className="stacked-list refill-checklist">
              {callChecklist.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <article className="detail-section-card">
            <h2>Important refill policies</h2>
            <ul className="stacked-list refill-checklist">
              <li>Please provide all requested information that is required to process your request</li>
              <li>Messages are reviewed and processed during regular business hours.</li>
              <li>Medication checkups are required every 6 months for patients receiving ADD, ADHD, Anxiety or Depression prescriptions.</li>
              <li>Patients starting, restarting, or changing a medication or dosage must be seen three weeks after starting the prescription.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section shell refill-download-section">
        <div className="portal-help-card reveal-on-scroll">
          <div>
            <p className="eyebrow">Printable reference</p>
            <h2>Keep the instructions and voicemail worksheet nearby.</h2>
            <p>
              Download the original two-page guide for the complete refill procedures
              and a fill-in worksheet for the information needed on the call.
            </p>
          </div>
          <a className="button button-light" href={instructionsPdf} download>
            Download PDF
          </a>
        </div>
      </section>
    </main>
  )
}

export default PrescriptionRefillPage
