import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { LINKS, linkToWhatsapp, Constants } from './utils/cta';

const { ADDRESS, OFFICE_NAME } = Constants;

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
      // links: [
      //   {
      //     text: 'SaaS',
      //     href: getPermalink('/homes/saas'),
      //   },
      //   {
      //     text: 'Startup',
      //     href: getPermalink('/homes/startup'),
      //   },
      //   {
      //     text: 'Mobile App',
      //     href: getPermalink('/homes/mobile-app'),
      //   },
      //   {
      //     text: 'Personal',
      //     href: getPermalink('/homes/personal'),
      //   },
      // ],
    },
    {
      text: 'Articles',
      href: getBlogPermalink(),
    },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Buka Akun', href: getPermalink('/register') }],
};

export const footerData = {
  links: [
    {
      title: 'Beranda',
      links: [
        { text: 'Scroll to Top', href: '#' },
        { text: 'Mengapa Mirae', href: '#why' },
        { text: 'Download App', href: '#download' },
        { text: 'Artikel Terkini', href: '#latestpost' },
        { text: 'FAQ', href: '#faqs' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Android', href: LINKS.PLAYSTORE_MSTOCK, target: '_blank' },
        { text: 'iOS', href: LINKS.APPSTORE_MSTOCK, target: '_blank' },
        { text: 'Tutorial', href: LINKS.YOUTUBE, target: '_blank' },
        { text: 'User Guide', href: LINKS.USER_GUIDE_MSTOCK, target: '_blank' },
      ],
    },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Professional Services', href: linkToWhatsapp() },
    //   ],
    // },
    {
      title: 'Company',
      links: [
        { text: OFFICE_NAME, href: LINKS.PIN_MAP_OFFICE },
        { text: ADDRESS, href: LINKS.PIN_MAP_OFFICE },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Kode Referral: 3103138', href: LINKS.OPEN_ACCOUNT },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: LINKS.YOUTUBE },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: LINKS.INSTAGRAM },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: LINKS.LINKEDIN },
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: linkToWhatsapp() },
  ],
};
