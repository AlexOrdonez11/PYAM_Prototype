import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import LocationsPage from './pages/LocationsPage'
import LocationDetailPage from './pages/LocationDetailPage'
import NewsDetailPage from './pages/NewsDetailPage'
import NewsPage from './pages/NewsPage'
import ProviderDetailPage from './pages/ProviderDetailPage'
import ProvidersPage from './pages/ProvidersPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ServicesPage from './pages/ServicesPage'
import SearchResultsPage from './pages/SearchResultsPage'
import PatientPortalPage from './pages/PatientPortalPage'
import SchedulePage from './pages/SchedulePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/patient-portal" element={<PatientPortalPage />} />
          <Route path="/providers" element={<ProvidersPage />} />
          <Route path="/providers/:providerSlug" element={<ProviderDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:locationSlug" element={<LocationDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:newsSlug" element={<NewsDetailPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
