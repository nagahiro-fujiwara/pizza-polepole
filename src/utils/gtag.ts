// Google Analytics tracking functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Google Analytics ID
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Check if GA is enabled
export const isGAEnabled = !!GA_TRACKING_ID;

// Page view tracking
export const pageview = (url: string) => {
  if (!isGAEnabled) return;
  
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
  });
};

// Event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!isGAEnabled) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Common event helpers
export const trackOutboundLink = (url: string, label?: string) => {
  event({
    action: 'click',
    category: 'outbound',
    label: label || url,
  });
};

export const trackDownload = (filename: string) => {
  event({
    action: 'download',
    category: 'file',
    label: filename,
  });
};

export const trackPhoneCall = () => {
  event({
    action: 'call',
    category: 'contact',
    label: 'phone',
  });
};

export const trackEmailClick = () => {
  event({
    action: 'click',
    category: 'contact',
    label: 'email',
  });
};
