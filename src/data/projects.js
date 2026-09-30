import cityGuidePhones from '../assets/cityguide-phones.jpg'
import cityGuidePdfCover from '../assets/cityguide-pdf-cover.jpg'
import cityGuidePdfAbout from '../assets/cityguide-pdf-about.jpg'

// All 24 pages of the City Guide case study PDF, auto-imported and sorted by filename
const pdfPageModules = import.meta.glob('../assets/pdf-pages/*.jpg', { eager: true, import: 'default' })
const pdfPageUrls = Object.keys(pdfPageModules)
  .sort()
  .map((key) => pdfPageModules[key])

const pdfPageTitles = [
  'Cover — Introducing The City Guide',
  'What is The City Guide?',
  'Splash Screen',
  'Onboarding',
  'Create Account',
  'Login Screen',
  'Home Screen',
  'Explore Screen',
  'Place Details',
  'Saved Places',
  'Profile Screen',
  'Edit Profile',
  'Settings',
  'Admin Panel — Overview',
  'Admin — Control Panel',
  'Admin — Navigation',
  'Admin — Manage Cities',
  'Admin — Add New City',
  'Admin — Manage Places',
  'Admin — Add Place',
  'Admin — User Management',
  'Admin — User Profile',
  'Admin — Manage Reviews',
  "Let's Connect",
]

const cityGuideGallery = pdfPageUrls.map((src, i) => ({
  src,
  alt: `City Guide case study — page ${i + 1}: ${pdfPageTitles[i] || ''}`,
  caption: pdfPageTitles[i] || `Page ${i + 1}`,
}))

export const projects = [
  {
    id: 'ecommerce',
    category: 'Web',
    label: 'Web development · Freelance',
    title: 'E-commerce Website Development',
    tagline:
      'A fully functional e-commerce site with product listings, shopping cart functionality, and a responsive, mobile-first layout for smooth navigation.',
    description:
      "Built as a freelance client project, this store covers the essentials a small business needs to sell online: browsable product listings, a shopping cart that actually works, and an interface that stays usable from a phone in one hand. The focus throughout was smooth navigation and a modern, uncluttered interface.",
    role: 'End-to-end freelance development — from front-end layout and styling to the PHP/MySQL back-end powering products and cart logic, plus ongoing UI/UX refinement based on client feedback.',
    features: [
      'Full product listing and browsing experience',
      'Working shopping cart with quantity and item management',
      'Responsive, mobile-first layout',
      'Clean, modern storefront interface',
      'PHP & MySQL back-end for product and order data',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    thumbType: 'icon',
    gallery: [],
    demoUrl: null,
    githubUrl: null,
  },
  {
    id: 'cityguide',
    category: 'Mobile',
    label: 'Flutter · Firebase · Full-stack',
    title: 'City Guide App',
    tagline:
      'A cross-platform Flutter travel app for discovering tourist places, restaurants, hotels and events across Pakistan — with a full admin panel behind it.',
    description:
      'City Guide is a full-stack travel discovery platform built for exploring Pakistan. On the user side, people can browse places by city and category, save favourites, and leave reviews — each place has its own detail screen with ratings, location, and highlights. On the back end, Firebase and Cloud Firestore handle data in real time, while a dedicated admin panel gives full control over every city, place, user and review on the platform, backed by a live analytics dashboard.',
    role: 'Designed and built the entire app in Flutter, structured the Firestore data model, implemented state management with Provider, and built the companion admin panel used to manage the platform\'s content and users.',
    stats: [
      { value: '5', label: 'Cities' },
      { value: '100', label: 'Places' },
      { value: '5', label: 'Users' },
      { value: '3.5', label: 'Avg rating' },
    ],
    features: [
      'Search and filter places by city and category',
      'Featured and popular listings on the home screen',
      'Save favourite places and write reviews',
      'Secure accounts for both users and admins',
      'Full admin panel — dashboard analytics, city & place management, user control, review moderation',
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Provider'],
    thumbType: 'image',
    thumbImage: cityGuidePhones,
    heroImage: cityGuidePdfCover,
    gallery: cityGuideGallery,
    demoUrl: null,
    githubUrl: null,
    pdfUrl: '/city-guide-case-study.pdf',
    pdfLabel: 'View full case study (PDF)',
    pdfCover: cityGuidePdfAbout,
    pdfPages: 24,
    pdfBlurb:
      "A complete 24-page walkthrough — every screen from splash to settings, the full admin panel, and the thinking behind each decision.",
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
