import { useEffect } from 'react';
import ContactPage from '../components/toContact/contact';

function Contact() {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div>
      <ContactPage />
    </div>
  );
}

export default Contact;