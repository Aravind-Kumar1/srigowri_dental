/** Serializable service content (no React / Lucide). Import this from client components to avoid bloating the bundle. */

export type ServiceData = {
  title: string;
  slug: string;
  detailHeading: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  heroImageUrl: string;
  color: string;
  iconColor: string;
  benefits: string[];
  benefitsHeading?: string;
};

export const servicesData: ServiceData[] = [
  {
    title: "Invisible Aligners",
    slug: "invisible-aligners-braces",
    detailHeading: "Invisible Aligners",
    description:
      "Straighten your teeth seamlessly with custom, medical-grade clear aligners designed for maximum comfort and convenience without traditional metal braces.",
    longDescription:
      "Invisible aligners are a modern and discreet solution for straightening teeth. These clear, removable trays gradually move your teeth into the correct position, making them ideal for adults and teenagers. Unlike traditional braces, aligners are comfortable, removable, and nearly invisible. They are custom-designed and custom-milled from medical-grade materials, providing a seamless alignment experience designed for maximum comfort and convenience.",
    imageUrl: "/images/ser_one.png",
    heroImageUrl: "/images/ser_one.png",
    color: "bg-sky-100/50",
    iconColor: "text-sky-600",
    benefits: [
      "Nearly invisible & highly aesthetic",
      "Removable for eating & cleaning",
      "Comfortable medical-grade material",
      "Predictable teeth alignment results",
    ],
  },
  {
    title: "Dental Implants",
    slug: "dental-implants",
    detailHeading: "Dental Implants",
    description:
      "Restore your complete smile with permanent, high-grade titanium implants that act like natural roots to support beautiful, custom-milled ceramic crowns.",
    longDescription:
      "Dental implants are a permanent, state-of-the-art solution for missing teeth. The procedure involves placing a high-grade titanium post into the jawbone, which seamlessly integrates with your bone to act like a natural tooth root. This strong foundation is then used to support a custom-milled, highly aesthetic ceramic crown. Implants restore complete bite function, prevent bone loss, and blend perfectly with your natural smile.",
    imageUrl: "/images/ser_two.png",
    heroImageUrl: "/images/ser_two.png",
    color: "bg-cyan-100/50",
    iconColor: "text-cyan-600",
    benefits: [
      "Permanent tooth replacement root",
      "High-grade titanium construction",
      "Custom-milled ceramic crowns",
      "Full bite restoration & bone preservation",
    ],
  },
  {
    title: "Crown & Bridge",
    slug: "crowns-bridges",
    detailHeading: "Crown & Bridge",
    description:
      "Protect decayed teeth with premium zirconia crowns, and bridge empty gaps from missing teeth using highly durable, perfectly color-matched ceramic bridges.",
    longDescription:
      "Crowns and bridges are essential restorative treatments designed to repair damaged teeth and fill empty spaces. Premium zirconia and ceramic crowns protect decayed or weakened teeth, restoring their structural integrity and natural appearance. A dental bridge replaces missing teeth by securely anchoring highly durable, perfectly color-matched ceramic teeth to adjacent healthy teeth, restoring your natural smile and chew function.",
    imageUrl: "/images/ser_three.png",
    heroImageUrl: "/images/ser_three.png",
    color: "bg-blue-100/50",
    iconColor: "text-blue-600",
    benefits: [
      "Premium, high-strength zirconia crowns",
      "Perfectly color-matched ceramic bridges",
      "Restores natural chewing and speaking",
      "Protects and reinforces weakened teeth",
    ],
  },
  {
    title: "Pediatric Care",
    slug: "pediatric-dentistry",
    detailHeading: "Pediatric Care",
    description:
      "Give your child a positive early start with gentle, specialized pediatric dentistry focused on proactive preventive care, sealants, and friendly dental education.",
    longDescription:
      "Our pediatric care is dedicated to giving children a positive, welcoming early start in oral health. We focus on proactive, preventive treatments tailored to children's developing teeth, including gentle professional cleanings, protective dental sealants, and cavity treatments. Our friendly specialists emphasize positive dental education, helping children build great oral hygiene habits in a warm, anxiety-free environment.",
    imageUrl: "/images/ser_four.png",
    heroImageUrl: "/images/ser_four.png",
    color: "bg-indigo-100/50",
    iconColor: "text-indigo-600",
    benefitsHeading: "Pediatric services include",
    benefits: [
      "Proactive cavity prevention & sealants",
      "Gentle professional cleanings for kids",
      "Friendly, patient-centered education",
      "Early orthodontic evaluation & tracking",
    ],
  },
  {
    title: "Emergency Care",
    slug: "emergency-dental-care",
    detailHeading: "Emergency Care",
    description:
      "Get immediate, compassionate relief for critical dental emergencies, including severe toothaches, chipped teeth, infections, and unexpected jaw injuries with same-day priority.",
    longDescription:
      "Dental emergencies can be stressful and require prompt, expert care. We offer same-day priority appointments to provide immediate, compassionate relief for critical emergencies. Whether you are experiencing severe toothaches, a chipped or knocked-out tooth, acute dental infections, or unexpected jaw injuries, our experienced team is equipped to relieve your pain and preserve your oral health.",
    imageUrl: "/images/ser_five.png",
    heroImageUrl: "/images/ser_five.png",
    color: "bg-rose-100/50",
    iconColor: "text-rose-600",
    benefitsHeading: "Emergency treatments include",
    benefits: [
      "Same-day priority emergency scheduling",
      "Rapid, compassionate pain relief",
      "Chipped, broken, or knocked-out teeth care",
      "Treatment for severe dental infections & trauma",
    ],
  },
  {
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    detailHeading: "Cosmetic Dentistry",
    description:
      "Transform your confidence with premium aesthetic procedures, including professional laser whitening, ultra-thin porcelain veneers, and complete custom-tailored smile designing.",
    longDescription:
      "Cosmetic dentistry focuses on elevating the beauty of your smile and boosting your overall confidence. We offer premium aesthetic procedures customized to your unique features and goals. From professional laser teeth whitening for a dramatically brighter smile, to ultra-thin porcelain veneers that correct imperfections, and complete custom-tailored smile designing, we blend advanced clinical artistry with modern technology to craft your perfect smile.",
    imageUrl: "/images/ser_six.png",
    heroImageUrl: "/images/ser_six.png",
    color: "bg-violet-100/50",
    iconColor: "text-violet-600",
    benefitsHeading: "Cosmetic procedures include",
    benefits: [
      "Professional rapid laser whitening",
      "Ultra-thin custom porcelain veneers",
      "Complete aesthetic smile designing",
      "Minor alignment & shape corrections",
    ],
  },
  {
    title: "General Dentistry",
    slug: "general-dentistry",
    detailHeading: "General Dentistry & Oral Wellness",
    description:
      "Maintain lifetime oral wellness with comprehensive checkups, meticulous professional scaling, digital x-rays, and modern aesthetic composite fillings for early decay control.",
    longDescription:
      "General dentistry forms the foundation of lifelong oral health. We focus on preventive care and early detection of dental issues. Our treatments include comprehensive dental examinations, low-radiation digital x-rays, precise scaling and root planing to prevent gum disease, and high-strength, tooth-colored composite fillings to restore decayed teeth seamlessly. Routine visits help prevent complex issues, keeping your natural teeth strong, healthy, and beautiful.",
    imageUrl: "/images/ser_seven.png",
    heroImageUrl: "/images/ser_seven.png",
    color: "bg-slate-100/50",
    iconColor: "text-slate-600",
    benefits: [
      "Comprehensive checkups & digital x-rays",
      "Meticulous professional scaling & polishing",
      "Aesthetic tooth-colored composite fillings",
      "Early cavity detection & gum care control",
    ],
  },
  {
    title: "Advanced Technology",
    slug: "advanced-technology",
    detailHeading: "Advanced Diagnostic & Laser Suite",
    description:
      "Experience unparalleled treatment safety and precision with our state-of-the-art diagnostic suite, 3D CBCT imaging, intraoral scanners, and minimally invasive dental lasers.",
    longDescription:
      "Our clinic is at the forefront of modern dentistry, utilizing a state-of-the-art diagnostic suite to provide highly precise, comfortable, and efficient treatments. With 3D CBCT imaging, we obtain detailed three-dimensional views of your jaw structure for safe implant planning. Digital intraoral scanners replace messy traditional impressions with fast, accurate 3D models. We also employ minimally invasive dental lasers for quick, near-painless gum treatments and faster healing times, ensuring the highest standards of safety and care.",
    imageUrl: "/images/ser_eight.png",
    heroImageUrl: "/images/ser_eight.png",
    color: "bg-emerald-100/50",
    iconColor: "text-emerald-600",
    benefits: [
      "3D CBCT high-precision dental imaging",
      "Mess-free 3D digital intraoral scanners",
      "Minimally invasive therapeutic lasers",
      "Enhanced safety, precision, & rapid healing",
    ],
  },
];
