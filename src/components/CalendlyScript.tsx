
import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyScript = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
      
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  return null;
};

export default CalendlyScript;
