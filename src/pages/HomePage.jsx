import React, { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import PopularTestsSection from '../components/home/PopularTestsSection';
import PopularPackagesSection from '../components/home/PopularPackagesSection';
import HomeCollectionCTA from '../components/home/HomeCollectionCTA';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';
import FaqSection from '../components/home/FaqSection';
import LocationHours from '../components/home/LocationHours';
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
      {/* 1. Hero Section with Banner Carousel & Text Overlay */}
      <HeroSection onOpenBooking={handleOpenBooking} />

      {/* 2. Popular Diagnostic Tests Grid */}
      <PopularTestsSection onSelectTest={handleOpenBooking} />

      {/* 3. Health Checkup Packages */}
      <PopularPackagesSection onSelectPackage={handleOpenBooking} />

      {/* 4. Home Sample Collection 3-Step Process & Coverage */}
      <HomeCollectionCTA onOpenBooking={handleOpenBooking} />

      {/* 5. Why Choose Doctor Diagnostics Center (Laboratory Standards) */}
      <WhyChooseUs />

      {/* 6. How It Works (5-Step Patient Journey) */}
      <HowItWorks />

      {/* 7. Patient Support and FAQs (Interactive Accordion) */}
      <FaqSection />

      {/* 8. Center Location, Opening Hours & Directions */}
      <LocationHours onOpenBooking={handleOpenBooking} />

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
