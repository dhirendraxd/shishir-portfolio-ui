// Navigation section IDs
export const SECTION_IDS = {
  HERO: "hero",
  SKILLS: "skills",
  ABOUT: "about",
  WORK: "work",
  EDUCATION: "education",
  CONTACT: "contact",
} as const;

// Navigation items
export const NAV_ITEMS = [
  { label: "Skills", id: SECTION_IDS.SKILLS },
  { label: "Work", id: SECTION_IDS.WORK },
  { label: "Education", id: SECTION_IDS.EDUCATION },
  { label: "Contact", id: SECTION_IDS.CONTACT },
] as const;

// Social links
export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shishir-joshi-5948aa276/",
  },
  {
    label: "GitHub",
    href: "https://github.com/Shishirjoshi",
  },
  {
    label: "Twitter",
    href: "https://x.com/shishirjoshi65",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shishir.joshi.65/",
  },
] as const;

// Form constraints
export const FORM_CONSTRAINTS = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  MESSAGE_MIN_LENGTH: 10,
  MESSAGE_MAX_LENGTH: 1000,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

// Contact info
export const CONTACT_INFO = {
  EMAIL: "shishirjoshi65@gmail.com",
  LOCATION: "Kathmandu, Nepal",
} as const;
