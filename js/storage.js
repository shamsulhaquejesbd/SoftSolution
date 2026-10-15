/**
 * SoftSolution Website & Admin Data Storage Layer
 * Single Source of Truth for all site content, images, settings, and inquiries.
 */

const STORAGE_KEYS = {
  SITE_DATA: 'softsolution_site_data_v1',
  INQUIRIES: 'softsolution_inquiries_v1',
  AUTH: 'softsolution_auth_v1',
};

export const DEFAULT_SITE_DATA = {
  settings: {
    siteName: 'SoftSolution',
    siteTagline: 'Japan - Bangladesh Software Solutions',
    primaryColor: '#dc2626',
    secondaryColor: '#0066cc',
    accentColor: '#0284c7',
    textColor: '#1e293b',
    headingColor: '#0f172a',
    backgroundColor: '#ffffff',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    seoTitle: 'SoftSolution - Software Solutions Connecting Japan & Bangladesh',
    seoDescription: 'We help businesses transform ideas, processes and challenges into reliable web, mobile and business software connecting Japan and Bangladesh.',
  },

  navigation: [
    { id: 'nav-home', label: 'Home', url: '#home', active: true },
    { id: 'nav-services', label: 'Services', url: '#services', active: false },
    { id: 'nav-portfolio', label: 'Portfolio', url: '#portfolio', active: false },
    { id: 'nav-about', label: 'About Us', url: '#partnership', active: false },
    { id: 'nav-team', label: 'Our Team', url: '#team', active: false },
    { id: 'nav-locations', label: 'Japan & Bangladesh', url: '#locations', active: false },
    { id: 'nav-contact', label: 'Contact', url: '#contact', active: false },
  ],

  hero: {
    preheading: 'JAPAN - BANGLADESH SOFTWARE SOLUTIONS',
    titleLine1: 'Software Solutions',
    titleLine2: 'Connecting',
    titleHighlight: 'Japan & Bangladesh',
    description: 'We help businesses transform ideas, processes and challenges into reliable web, mobile and business software.',
    badgeJapan: 'Japan-based business support. ✦',
    badgeBangladesh: 'Bangladesh-based engineering expertise.',
    primaryCtaText: 'View Our Work',
    primaryCtaUrl: '#portfolio',
    secondaryCtaText: 'Start a Project',
    secondaryCtaUrl: '#contact',
    nodeJapanTitle: 'Tokyo',
    nodeJapanSubtitle: '(Japan)',
    nodeBangladeshTitle: 'Dhaka',
    nodeBangladeshSubtitle: '(Bangladesh)',
  },

  partnership: {
    tag: 'OUR PARTNERSHIP',
    title: 'Two Locations. One Integrated Team.',
    description: 'Our Japan-side business presence helps us communicate closely with customers, while our Bangladesh engineering team provides the technical expertise required to design, build and maintain software solutions.',
    cards: [
      {
        id: 'partner-japan',
        location: 'Japan',
        subtitle: 'Business & Client Communication',
        flagType: 'japan',
        items: [
          'Local communication',
          'Requirement discussion',
          'Business coordination',
          'Customer relationship',
          'Project coordination',
        ],
      },
      {
        id: 'partner-integrated',
        location: 'Integrated Team',
        subtitle: 'One Delivery Process',
        iconType: 'team',
        items: [
          'Requirements',
          'Planning',
          'Design',
          'Development',
          'Testing',
          'Deployment',
          'Support',
        ],
      },
      {
        id: 'partner-bangladesh',
        location: 'Bangladesh',
        subtitle: 'Software Engineering',
        flagType: 'bangladesh',
        items: [
          'Software development',
          'Backend/API',
          'Web applications',
          'Mobile applications',
          'Database engineering',
          'QA and support',
        ],
      },
    ],
  },

  servicesSection: {
    tag: 'OUR SERVICES',
    title: 'What We Do',
    description: 'Practical technology solutions designed around your business.',
    ctaText: 'View All Services',
    ctaUrl: '#services',
  },

  services: [
    {
      id: 'srv-1',
      icon: 'code',
      title: 'Custom Software Development',
      description: "Business applications designed around your organization's specific requirements and workflows.",
      visible: true,
    },
    {
      id: 'srv-2',
      icon: 'globe',
      title: 'Web Application Development',
      description: 'Modern web applications, dashboards, portals and management systems for business operations.',
      visible: true,
    },
    {
      id: 'srv-3',
      icon: 'smartphone',
      title: 'Mobile Application Development',
      description: 'Mobile solutions for sales teams, field operations, customers and internal business processes.',
      visible: true,
    },
    {
      id: 'srv-4',
      icon: 'gear',
      title: 'Business Process Automation',
      description: 'Transform manual and repetitive business processes into efficient digital workflows.',
      visible: true,
    },
    {
      id: 'srv-5',
      icon: 'database',
      title: 'Database & Backend Development',
      description: 'Reliable APIs, database architecture, stored procedures and reporting systems.',
      visible: true,
    },
    {
      id: 'srv-6',
      icon: 'wrench',
      title: 'Maintenance & Enhancement',
      description: 'Maintain existing applications, resolve issues and add new features.',
      visible: true,
    },
  ],

  portfolioSection: {
    tag: 'FEATURED PORTFOLIO',
    title: 'Our Work',
    description: 'Real business systems. Real-world challenges. Practical technology solutions.',
    ctaText: 'View All Projects',
    ctaUrl: '#portfolio',
  },

  portfolio: [
    {
      id: 'port-1',
      tag: 'Sales & Distribution',
      title: 'Sales Force Automation Platform',
      category: 'FMCG / Distribution',
      techStack: 'Angular · Node.js · SQL Server · Android · Azure · Power BI',
      imageType: 'sales-force',
      linkText: 'View Case Study',
      linkUrl: '#',
      visible: true,
    },
    {
      id: 'port-2',
      tag: 'Business Management',
      title: 'Order & Distribution Management',
      category: 'Retail / Distribution',
      techStack: 'Angular · .NET Core · SQL Server · Azure',
      imageType: 'order-distribution',
      linkText: 'View Case Study',
      linkUrl: '#',
      visible: true,
    },
    {
      id: 'port-3',
      tag: 'Field Force Management',
      title: 'Field Force Mobile Application',
      category: 'Sales & Field Operations',
      techStack: 'Flutter · Firebase · REST API',
      imageType: 'field-force',
      linkText: 'View Case Study',
      linkUrl: '#',
      visible: true,
    },
    {
      id: 'port-4',
      tag: 'Business Intelligence',
      title: 'Business Intelligence & Reporting',
      category: 'Various Industries',
      techStack: 'Power BI · SQL Server · Azure',
      imageType: 'business-intelligence',
      linkText: 'View Case Study',
      linkUrl: '#',
      visible: true,
    },
  ],

  whyUsSection: {
    tag: 'WHY SOFTSOLUTION',
    title: 'Why Work With Us?',
  },

  whyUs: [
    {
      id: 'why-1',
      icon: 'team',
      title: 'Experienced Engineering Team',
      description: 'Our team brings practical experience developing and maintaining business software.',
    },
    {
      id: 'why-2',
      icon: 'lightbulb',
      title: 'Business Understanding',
      description: 'We focus on understanding your business processes before selecting the technical solution.',
    },
    {
      id: 'why-3',
      icon: 'flag',
      title: 'Japan Business Presence',
      description: 'Customers can communicate through our Japan-side business connection.',
    },
    {
      id: 'why-4',
      icon: 'sliders',
      title: 'Flexible Engagement',
      description: 'Work with us for a complete project, ongoing maintenance or additional development.',
    },
    {
      id: 'why-5',
      icon: 'handshake',
      title: 'Long-Term Partnership',
      description: 'We aim to build long-term relationships rather than one-time projects.',
    },
  ],

  processSection: {
    tag: 'OUR PROCESS',
    title: 'From Business Challenge to Working Software',
  },

  processSteps: [
    {
      step: '01.',
      icon: 'search',
      title: 'Discover',
      description: 'Understand the business and requirements.',
    },
    {
      step: '02.',
      icon: 'file-text',
      title: 'Plan',
      description: 'Define scope, architecture and approach.',
    },
    {
      step: '03.',
      icon: 'edit',
      title: 'Design',
      description: 'Design the user experience and technical solution.',
    },
    {
      step: '04.',
      icon: 'code',
      title: 'Develop',
      description: 'Build and integrate the software.',
    },
    {
      step: '05.',
      icon: 'check-circle',
      title: 'Test',
      description: 'QA, testing and customer review.',
    },
    {
      step: '06.',
      icon: 'cloud-upload',
      title: 'Deploy & Support',
      description: 'Deployment, maintenance and improvement.',
    },
  ],

  locationsSection: {
    tag: 'OUR LOCATIONS',
    title: 'Our Presence',
  },

  locations: [
    {
      id: 'loc-japan',
      title: 'Japan Business Office',
      city: 'Tokyo, Japan',
      flagType: 'japan',
      imageType: 'tokyo-office',
      address: '1-2-3 Marunouchi, Chiyoda-ku, Tokyo 100-0005, Japan',
      phone: '+81-3-1234-5678',
      email: 'japan@softsolution.co.jp',
      hours: 'Mon - Fri, 9:00 - 18:00 (JST)',
      mapsUrl: 'https://maps.google.com/?q=Marunouchi+Chiyoda+Tokyo',
    },
    {
      id: 'loc-bangladesh',
      title: 'Bangladesh Development Center',
      city: 'Dhaka, Bangladesh',
      flagType: 'bangladesh',
      imageType: 'dhaka-office',
      address: 'House # 12, Road # 4, Dhanmondi, Dhaka-1205, Bangladesh',
      phone: '+880-2-1234-5678',
      email: 'info@softsolution.com.bd',
      hours: 'Sun - Thu, 9:00 - 18:00 (BST)',
      mapsUrl: 'https://maps.google.com/?q=Dhanmondi+Dhaka',
    },
  ],

  teamSection: {
    tag: 'OUR TEAM',
    title: 'Meet Our Team',
  },

  team: [
    {
      id: 'team-1',
      name: 'Taro Sato',
      role: 'Japan Business Partner',
      photoType: 'taro-sato',
      skills: [
        'Business Development',
        'Customer Communication',
        'Client Relationship',
      ],
      visible: true,
    },
    {
      id: 'team-2',
      name: 'Md. Rahman',
      role: 'Co-Founder & Technical Lead',
      photoType: 'md-rahman',
      skills: [
        'Software Architecture',
        'Backend Development',
        'Database Engineering',
      ],
      visible: true,
    },
    {
      id: 'team-3',
      name: 'Fahim Ahmed',
      role: 'Co-Founder',
      photoType: 'fahim-ahmed',
      skills: [
        'Web Development',
        'Mobile Applications',
        'System Integration',
      ],
      visible: true,
    },
    {
      id: 'team-4',
      name: 'Rased Hasan',
      role: 'Co-Founder',
      photoType: 'rased-hasan',
      skills: [
        'Business Applications',
        'Cloud & DevOps',
        'Project Management',
      ],
      visible: true,
    },
    {
      id: 'team-5',
      name: 'Kenji Tanaka',
      role: 'Japan Business Partner',
      photoType: 'kenji-tanaka',
      skills: [
        'Business Coordination',
        'Customer Communication',
        'Client Relationship',
      ],
      visible: true,
    },
  ],

  ctaBanner: {
    title: "Let's Discuss Your Project",
    description: 'Have a software idea, an existing system that needs improvement, or a business process you want to automate? Tell us about your requirements and our team will get in touch.',
    buttonText: 'Contact Us',
    buttonUrl: '#contact',
  },

  footer: {
    copyright: '© 2026 SoftSolution. All rights reserved.',
    privacyText: 'Privacy Policy',
    privacyUrl: '#',
    termsText: 'Terms of Service',
    termsUrl: '#',
    companyLinks: [
      { label: 'About Us', url: '#partnership' },
      { label: 'Our Team', url: '#team' },
      { label: 'Japan & Bangladesh', url: '#locations' },
      { label: 'Careers', url: '#' },
    ],
    serviceLinks: [
      { label: 'Custom Software', url: '#services' },
      { label: 'Web Development', url: '#services' },
      { label: 'Mobile Development', url: '#services' },
      { label: 'Business Automation', url: '#services' },
      { label: 'Maintenance', url: '#services' },
    ],
    resourceLinks: [
      { label: 'Portfolio', url: '#portfolio' },
      { label: 'Case Studies', url: '#portfolio' },
      { label: 'Blog', url: '#' },
      { label: 'FAQ', url: '#' },
    ],
    contactInfo: {
      japan: {
        title: 'Japan Office',
        phone: '+81-3-1234-5678',
        email: 'japan@softsolution.co.jp',
      },
      bangladesh: {
        title: 'Bangladesh Office',
        phone: '+880-2-1234-5678',
        email: 'info@softsolution.com.bd',
      },
    },
  },
};

export function loadSiteData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SITE_DATA);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SITE_DATA, ...parsed };
  } catch (err) {
    console.warn('Error loading site data from localStorage, falling back to default:', err);
    return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
  }
}

export function saveSiteData(data) {
  try {
    localStorage.setItem(STORAGE_KEYS.SITE_DATA, JSON.stringify(data));
    return true;
  } catch (err) {
    console.error('Error saving site data to localStorage:', err);
    return false;
  }
}

export function resetToDefaults() {
  try {
    localStorage.removeItem(STORAGE_KEYS.SITE_DATA);
    return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
  } catch (err) {
    console.error('Error resetting site data:', err);
    return DEFAULT_SITE_DATA;
  }
}

export function exportSiteDataJson() {
  const data = loadSiteData();
  return JSON.stringify(data, null, 2);
}

export function importSiteDataJson(jsonStr) {
  try {
    const parsed = JSON.parse(jsonStr);
    if (!parsed || typeof parsed !== 'object') throw new Error('Invalid JSON structure');
    saveSiteData(parsed);
    return true;
  } catch (err) {
    console.error('Failed to import JSON data:', err);
    return false;
  }
}

// Inquiries / Leads handling
export function loadInquiries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
    if (!raw) {
      // Seed initial sample inquiries for realistic demonstration
      const initial = [
        {
          id: 'inq-101',
          name: 'Kenichi Takahashi',
          company: 'Tokyo Logistics Co.',
          email: 'takahashi@tokyologistics.jp',
          phone: '+81-90-5555-1234',
          projectType: 'Business Automation',
          budget: '$20,000 - $50,000',
          message: 'We are looking to migrate our legacy desktop shipment tracker to a modern web application with Bangladesh backend developers and Japan coordination.',
          status: 'new',
          timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
        },
        {
          id: 'inq-102',
          name: 'Hiroshi Tanaka',
          company: 'Nihon MedTech Inc.',
          email: 'h.tanaka@nihonmedtech.co.jp',
          phone: '+81-3-8888-9999',
          projectType: 'Mobile Application',
          budget: '$10,000 - $25,000',
          message: 'Interested in developing a mobile field application for our hospital equipment maintenance team.',
          status: 'contacted',
          timestamp: new Date(Date.now() - 3600000 * 48).toISOString(),
        },
      ];
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error loading inquiries:', err);
    return [];
  }
}

export function saveInquiry(inquiry) {
  try {
    const list = loadInquiries();
    const newRecord = {
      id: 'inq-' + Date.now(),
      timestamp: new Date().toISOString(),
      status: 'new',
      ...inquiry,
    };
    list.unshift(newRecord);
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(list));
    return newRecord;
  } catch (err) {
    console.error('Error saving inquiry:', err);
    return null;
  }
}

export function updateInquiryStatus(id, newStatus) {
  try {
    const list = loadInquiries();
    const item = list.find((i) => i.id === id);
    if (item) {
      item.status = newStatus;
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(list));
      return true;
    }
    return false;
  } catch (err) {
    console.error('Error updating inquiry status:', err);
    return false;
  }
}

export function deleteInquiry(id) {
  try {
    let list = loadInquiries();
    list = list.filter((i) => i.id !== id);
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(list));
    return true;
  } catch (err) {
    console.error('Error deleting inquiry:', err);
    return false;
  }
}
