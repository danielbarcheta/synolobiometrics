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
import biometricupdate from "../assets/biometricupdate.png";
import cryptoid from "../assets/cryptoid.png"

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

export const pressData = [
  {
    id: 1,
    title: "Synolo® launches infant fingerprint biometric scanner in Brazil",
    subtitle: "Dec 18, 2024",
    summary:
      "Exclusive Interview: U.S.-based Synolo® Biometrics has launched its biometric scanner specially designed for infant and neo-natal identification in the Brazilian market.",
    link: "https://www.biometricupdate.com/202412/synolo-launches-infant-fingerprint-biometric-scanner-in-brazil",
    image: biometricupdate,
  },
  {
    id: 2,
    title: "Synolo® Neo Scanner Now Available in Brazil",
    subtitle: "Dec 17, 2024",
    summary:
      "Synolo® Biometrics, Inc., a global pioneer in infant and neonatal biometric identification, announced its strategic expansion into the Latin American market with the launch of its Synolo® Neo fingerprint scanner in Brazil. (Portuguese)",
    link: "https://cryptoid.com.br/biometria/synolo-biometrics-lanca-solucao-para-biometria-infantil-na-america-latina/",
    image: cryptoid,
  },
  {
    id: 3,
    title: "Uniqueness of fingerprints from birth explained in academic study",
    subtitle: "February 14, 2023",
    summary:
      "“Glover et al provide the missing link in our understanding of the timing and drivers of human fingerprint development,” writes Dr. Aronoff-Spencer.",
    link: "https://www.biometricupdate.com/202302/uniqueness-of-fingerprints-from-birth-explained-in-academic-study",
    image: biometricupdate,
  },
  {
    id: 4,
    title: "Clinical research shows infant fingerprint biometrics nearing real-world effectiveness",
    subtitle: "Jan 3, 2023",
    summary:
      "Confirming the identity of newborns in healthcare settings with biometrics may be within reach with current technology, according to a new academic research paper published by the U.S National Library of Medicine.",
    link: "https://www.biometricupdate.com/202301/clinical-research-shows-infant-fingerprint-biometrics-nearing-real-world-effectiveness",
    image: biometricupdate,
  },
  {
    id: 5,
    title: "NEC, researchers, collaborate on infant fingerprint biometrics scanner commercialization",
    subtitle: "Nov 1, 2022",
    summary:
      "The developer of a device for capturing infants’ fingerprint biometrics is working towards commercialization as one of its co-founders prepares to present its technology at an event this month focused on Latin America.",
    link: "https://www.biometricupdate.com/202211/nec-in-talks-with-researchers-commercializing-infant-fingerprint-biometrics-scanner",
    image: biometricupdate,
  },
  {
    id: 6,
    title: "UC San Diego researchers unveil non-touch optical technology for infant fingerprinting",
    subtitle: "Sep 13, 2018",
    summary:
      "University of California San Diego researchers have unveiled their non-touch optical capture device for newborn fingerprinting, which they say can capture fingerprints from the day of birth.",
    link: "https://www.biometricupdate.com/201809/uc-san-diego-researchers-unveil-non-touch-optical-technology-for-infant-fingerprinting",
    image: biometricupdate,
  },
  {
    id: 7,
    title: "Potential breakthrough in infant biometrics heads for trial in Kenya after ID4Africa appeal",
    subtitle: "Jun 28, 2018",
    summary:
      "A team of researchers at the University of California San Diego’s Qualcomm Institute has experience in global development projects, including in Africa, and identity expertise in addition to health technology development specifically for resource-limited and remote settings.",
    link: "https://www.biometricupdate.com/201806/potential-breakthrough-in-infant-biometrics-heads-for-trial-in-kenya-after-id4africa-appeal",
    image: biometricupdate,
  },
];

export const productHighlights = {
  hero: {
    title: "Synolo® Neo",
    subtitle: "Total biometrics from birth",
    description:
      "Biometric identification solution for newborns and young children, with contactless scanner, high resolution, and advanced algorithms. Avoid baby swaps and ensure civil identity from birth.",
  },
  features: [
    {
      icon: "Fingerprint",
      title: "Contactless Capture",
      text: "Eliminates common distortions found in contact scanners, especially useful for newborns and young children.",
    },
    {
      icon: "Cpu",
      title: "Image Processing",
      text: "Corrects age-related effects, enabling matching from early childhood to adulthood.",
    },
    {
      icon: "Camera",
      title: "High Resolution",
      text: "Scanner with native 3000 PPI and processed image at 500 PPI for compatibility with any ABIS.",
    },
    {
      icon: "MousePointerClick",
      title: "Ergonomic Design",
      text: "One-hand use and magnetic pads adaptable to any finger or age.",
    },
    {
      icon: "Package",
      title: "Multiple Use Cases",
      text: "Fingerprint capture of babies, children, adults, and palm prints.",
    },
  ],
  specs: [
    { label: "Sensor Resolution", value: "3000 PPI" },
    { label: "Processed Image", value: "500 PPI" },
    { label: "FPS", value: "14 Hz" },
    { label: "Light Source", value: "Blue LED" },
    { label: "Interface", value: "USB-C 3.0 Superspeed" },
    { label: "Dimensions", value: "14cm x 5.3cm x 6cm" },
    { label: "Weight", value: "146g" },
    { label: "Compatibility", value: "Windows 10, 11, and Linux" },
  ],
  cta: {
    title: "Ready to innovate with infant biometrics?",
    description: "Get in touch and discover how Synolo® Neo can transform civil identification.",
    buttonText: "Contact Us",
  }
};
