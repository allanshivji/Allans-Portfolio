// src/utils/analytics.ts
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-FGL8XCPW4T';
const ENABLE_ANALYTICS = true;

export const initializeAnalytics = () => {
  if (!ENABLE_ANALYTICS) {
    console.log('🚫 Google Analytics is DISABLED');
    return;
  }

  ReactGA.initialize(MEASUREMENT_ID, {
    gtagOptions: {
      send_page_view: false
    }
  });
  // console.log('✅ Google Analytics initialized');
};

export const trackPageView = (path: string, title?: string) => {
  if (!ENABLE_ANALYTICS) {
    console.log('📊 [DISABLED] Page view:', path);
    return;
  }

  ReactGA.send({
    hitType: 'pageview',
    page: path,
    title: title || document.title
  });
};

export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  if (!ENABLE_ANALYTICS) {
    console.log('📊 [DISABLED] Event:', { category, action, label, value });
    return;
  }

  const eventName = `${category.toLowerCase()}_${action.toLowerCase()}`;

  ReactGA.event(eventName, {
    event_category: category,
    event_label: label,
    value: value
  });

  // console.log('✅ Event tracked:', eventName, { category, label, value });
};

export const trackResumeDownload = () => {
  trackEvent('Resume', 'download', 'PDF_Resume');
};

export const trackSocialClick = (platform: string) => {
  trackEvent('Social', 'click', platform);
};

export const trackProjectClick = (projectName: string) => {
  trackEvent('Project', 'click', projectName);
};

export const trackNavigationClick = (section: string) => {
  trackEvent('Navigation', 'click', section);
};

// export const trackContactFormSubmit = () => {
//   trackEvent('Contact', 'submit', 'Contact_Form');
// };
