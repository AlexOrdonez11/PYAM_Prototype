import { useEffect } from 'react'
import { schedulingUrl } from '../data'

function SchedulePage() {
  useEffect(() => {
    window.location.replace(schedulingUrl)
  }, [])

  return (
    <main className="interior-page shell">
      <section className="empty-state">
        <h1>Opening online scheduling…</h1>
        <p>If scheduling does not open automatically, use the button below.</p>
        <a className="button button-primary" href={schedulingUrl}>
          Continue to scheduling
        </a>
      </section>
    </main>
  )
}

export default SchedulePage
