import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = ({ phoneNumber = '919443152200', message = 'Hello Doctor Diagnostics Center Trichy, I would like to enquire about diagnostic blood tests & health checkup packages.' }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with Doctor Diagnostics Center on WhatsApp"
    >
      <MessageSquare size={30} fill="#ffffff" />
      <span className="floating-whatsapp-tooltip">Chat with Doctor Diagnostics on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
