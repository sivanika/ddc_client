import React from 'react';
import AppointmentModal from '../components/booking/AppointmentModal';
import { useNavigate } from 'react-router-dom';

const BookAppointmentPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '80vh', padding: '2rem 1rem' }}>
      <AppointmentModal
        isOpen={true}
        onClose={() => navigate('/')}
      />
    </div>
  );
};

export default BookAppointmentPage;
