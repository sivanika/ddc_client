import React, { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoryQuickBar from '../components/home/CategoryQuickBar';
import PopularPackagesSection from '../components/home/PopularPackagesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import OurServicesSection from '../components/home/OurServicesSection';
import HomeCollectionCTA from '../components/home/HomeCollectionCTA';
import Testimonials from '../components/home/Testimonials';
import LocationHours from '../components/home/LocationHours';
import FaqSection from '../components/home/FaqSection';
import AppointmentModal from '../components/booking/AppointmentModal';

const HomePage = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedItemForBooking, setSelectedItemForBooking] = useState(null);

  const handleOpenBooking = (item = null) => {
    setSelectedItemForBooking(item);
    setBookingModalOpen(true);
  };

  return (
    <div className="homepage-wrapper">
      {/* 1. Hero Section with Banner & Search */}
      <HeroSection onOpenBooking={handleOpenBooking} />

      {/* 2. Quick Category Bar (5 visual category pill cards) */}
      <CategoryQuickBar />

      {/* 3. Popular Health Checkup Packages (4 cards with images) */}
      <PopularPackagesSection onSelectPackage={handleOpenBooking} />

      {/* 4. Why Choose Us (4 features + Facility Video Walkthrough Media card) */}
      <WhyChooseUs />

      {/* 5. A Wide Range of Diagnostic Services (4 service cards with images) */}
      <OurServicesSection />

      {/* 6. Home Sample Collection (Phlebotomy photo card + 4 highlights) */}
      <HomeCollectionCTA onOpenBooking={handleOpenBooking} />

      {/* 7. Patient Testimonials (3 cards with avatars) */}
      <Testimonials />

      {/* 8. Center Location, Map & Quick Enquiry Form */}
      <LocationHours onOpenBooking={handleOpenBooking} />

      {/* 9. Patient Support & FAQs */}
      <FaqSection />

      {/* Booking Appointment Modal with Real Backend Integration */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedItem={selectedItemForBooking}
      />
    </div>
  );
};

export default HomePage;
