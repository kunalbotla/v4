module.exports = {
  siteTitle: 'Home - Kunal Botla',
  siteDescription:
    'Kunal Botla is a student in Massachusetts at Lexington High School, swift developer, LHS PF Debate member, and a former student at Acera School.',
  siteKeywords:
    'Kunal Botla, Kunal, Botla, kunalbotla, kunal.botla, kunal.photos, Lexington, Lexington High School, LHS, LexDebate, Acera, Acera School',
  siteUrl: 'https://kunalbotla.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Kunal Botla',
  location: 'Lexington, MA',
  email: 'kunal@kunalbotla.com',
  github: 'https://github.com/kunalbotla',
  twitterHandle: '@kunalbotla',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/kunalbotla',
    },

    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kunalbotla',
    },
    /*
    {
      name: 'Codepen',
      url: 'https://codepen.io/kunalbotla',
    },
    */
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kunal.botla',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kunalbotla',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
