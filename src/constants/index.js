import {
  people01,
  people02,
  people03,
  people04,
  people05,
  facebook,
  instagram,
  linkedin,
  twitter,
  img2017,
  img2019,
  img2022,
  img2024,
  img2025,
  equipment,
} from "../assets";
import synologo from '../assets/icon-synolo.png';

export const navLinks = [
  {
    id: "about",
    title: "About us",
  },
  {
    id: "technology",
    title: "Technology",
  },
    {
    id: "press",
    title: "Press"
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

export const features = [
  {
    id: "feature-1",
    title: "Standard 500ppi Fails",
    content:
      " Infant prints are tiny and require highly sophisticated imaging techniques; hi-res alone is not enough",
  },
  {
    id: "feature-2",
    title: "Contact Readers Fail",
    content:
      "Infant prints are easily deformable and distorted by contact pressure, obscuring details",
  },
  {
    id: "feature-3",
    title: "Non-contact Readers Fail",
    content:
      "Infants’ behavior make them difficult to position for consistent image quality",
  },
  {
    id: "feature-4",
    title: "Longitudinal Matching Fails",
    content:
      "As infants grow to be adults, matching becomes difficult or impossible without accommodating age-related changes",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Over 30 years of experience in medtech and diagnostics industry as founder, executive, board member and investor; formerly President/COO of Berkeley Heartlab (acquired by Quest Labs)",
    name: "Rob Lewis",
    title: "Chairman & Co-founder",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Over 25 years as executive, advisor and investor in life science; founder/CEO of ChinaBio Group in Shanghai, and co-founder/chair of BioPacific Investors; led numerous funding and acquisition transactions; early career with PwC and EY/Capgemini ",
    name: "Greg Scott",
    title: "CEO & Co-founder",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "25+ years research, design, and development of optical imaging, sensor and laser systems for medical, military and commercial applications; co-founder Ion Biometrics (predecessor company); previously Principal Scientist and Chief Engineer for various imaging companies",
    name: "Steve Saggese, PhD",
    title: "CTO & Co-founder",
    img: people03,
  },
  {
    id: "feedback-4",
    content:
      "Asst. Professor of Infectious Disease and Global Health, UCSD School of Medicine and Qualcomm Institute, and Director of the Design Lab Center for Health; co-founder of Ion Biometrics; inventor of Synolo® Neo",
    name: "Eliah Aronoff-Spencer, MD, PhD",
    title: "Co-founder & Neo Inventor",
    img: people04,
  },
  {
    id: "feedback-5",
    content:  "Rafael Cury Lucchesi",
    name: "Rafael Cury Lucchesi",
    title: "Business Development Manager",
    img: people05,
  }
];

export const stats = [
  {
    id: "stats-1",
    title: "Tested",
  },
  {
    id: "stats-2",
    title: "Proven",
  },
  {
    id: "stats-3",
    title: "Trusted",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "About",
        link: "https://www.synolo.com/content/",
      },
      {
        name: "Fingerprint Reader",
        link: "https://www.synolo.com/how-it-works/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Events",
        link: "https://www.synolo.com/help-center/",
      },
      {
        name: "Suggestions",
        link: "https://www.synolo.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.synolo.com/blog/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partners",
        link: "https://www.synolo.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.synolo.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const timelineData = [
  {
    id: "grant",
    ano: 2017,
    titulo: "Gates Foundation Grant",
    conteudo:
      "A $3M grant provided to UC San Diego started it all. The Gates Foundation approached Dr. Eliah Aronoff-Spencer to lead a project to determine if - and how - newborns and infants could be identified for vaccine delivery using biometrics.",
    imagem: img2017,
  },
  {
    id: "poc-study",
    ano: 2019,
    titulo: "UCSD/Gates POC Study",
    conteudo:
      "The resulting pilot study led by UCSD's team validated that a new, non-contact, high resolution fingerprint device (the 'Panda') combined with novel image processing algorithms, could successfully identify 500 newborns and infants in a hospital setting.",
    imagem: img2019,
  },
  {
    id: "synolo-formed",
    ano: 2021,
    titulo: "Synolo® Biometrics Formed",
    conteudo:
      "Synolo® Biometrics was formed by key members of the UCSD team and seasoned entrepreneurs to commercialize the technology. Funding was provided by BioPacific Investors angel group.",
    imagem: synologo,
  },
  {
    id: "neo-launched",
    ano: 2022,
    titulo: "Synolo® Neo Launched",
    conteudo: [
      "Improved ergonomics and usability",
      "Real-time vs. offline image processing",
      "Interchangeable aperture thumbwheels",
      "Optimized imaging technology with proprietary age-correction algorithms",
      "Simplified manufacturing and assembly",
    ],
    imagem: equipment,
  },
  {
    id: "citer-study",
    ano: 2022,
    titulo: "CITeR/NSF Study Launched",
    conteudo: [
      "POC study at NY hospitals, clinics and schools",
      "~300 infants/youth covering birth to 15 years old",
      "Multi-year study conducted by CITeR and Clarkson University",
    ],
    imagem: img2022,
  },
  {
    id: "first-poc",
    ano: 2023,
    titulo: "First Commercial POC",
    conteudo: [
      "NEC, a major global company with 110,000 employees and operations in 50 countries, announced a POC study using Synolo® Neo",
      "Short term study (1-2 months) to be conducted at a major hospital in South America",
      "Collect fingerprints ~500 infants at birth and verify on discharge",
    ],
    imagem: "",
  },
  {
    id: "launch-brazil",
    ano: 2024,
    titulo: "Synolo® Launches in Brazil",
    conteudo: [
      "Synolo® announces expansion into Latin America with the commercial launch of the Synolo® Neo fingerprint reader in Brazil",
      "This initiative reinforces the company's commitment to providing innovative biometric and civil identification solutions that ensure the protection of babies and children from the earliest stages of life through key local partners",
    ],
    imagem: img2024,
  },
  {
    id: "fbi-certification",
    ano: 2025,
    titulo: "FBI Certification",
    conteudo:
      "Synolo® Neo becomes the first non-contact device designed for infant and child as well as adult biometrics to receive FBI PIV single finger certification.",
    imagem: img2025,
  },
];