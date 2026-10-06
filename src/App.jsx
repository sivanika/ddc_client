import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Providers
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';

// Common Public Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import AppointmentModal from './components/booking/AppointmentModal';

// Public Pages
import HomePage from './pages/HomePage';
import TestsPage from './pages/TestsPage';
import PackagesPage from './pages/PackagesPage';
import ServicesPage from './pages/ServicesPage';
import HomeCollectionPage from './pages/HomeCollectionPage';
import CheckStatusPage from './pages/CheckStatusPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookAppointmentPage from './pages/BookAppointmentPage';

// Admin Components & Pages
import AdminLayout from './components/admin/AdminLayout';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminBookingsPage from './pages/admin/AdminBookingsPage';
import AdminCollectionsPage from './pages/admin/AdminCollectionsPage';
import AdminTestsPage from './pages/admin/AdminTestsPage';
import AdminPackagesPage from './pages/admin/AdminPackagesPage';
import AdminEnquiriesPage from './pages/admin/AdminEnquiriesPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Global appointment modal controller
  const [globalBookingOpen, setGlobalBookingOpen] = useState(false);

  return (
    <div className="app-main-wrapper">
      {!isAdminRoute && (
        <Navbar onOpenBooking={() => setGlobalBookingOpen(true)} />
      )}

      <div className="page-wrapper">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/tests" element={<TestsPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/home-collection" element={<HomeCollectionPage />} />
          <Route path="/check-status" element={<CheckStatusPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookAppointmentPage />} />

          {/* Admin Authentication */}
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* Protected Admin Management */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="bookings" element={<AdminBookingsPage />} />
            <Route path="collections" element={<AdminCollectionsPage />} />
            <Route path="tests" element={<AdminTestsPage />} />
            <Route path="packages" element={<AdminPackagesPage />} />
            <Route path="enquiries" element={<AdminEnquiriesPage />} />
            <Route path="settings" element={<AdminSettingsPage />} />
          </Route>
        </Routes>
      </div>

      {!isAdminRoute && (
        <>
          <Footer />
          <WhatsAppButton />
          <AppointmentModal
            isOpen={globalBookingOpen}
            onClose={() => setGlobalBookingOpen(false)}
          />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
