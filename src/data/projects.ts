export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  coverImage: string;
  images: string[];
  description: string;
  testimonial?: { text: string; client: string };
}

export const projects: Project[] = [
  {
    id: "wedding-priya-karthik",
    title: "Priya & Karthik's Wedding",
    category: "Wedding",
    location: "Coimbatore",
    date: "March 2024",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    ],
    description: "A beautiful traditional Tamil wedding held at the Karpagambal Hall in Coimbatore. Every ritual from the Kashi Yatra to the Mangalsutra ceremony was captured in vivid detail. The joy and emotion of the day lives on in every frame.",
    testimonial: { text: "AS Mani Studio captured our wedding so beautifully. Every photo tells a story we'll cherish forever.", client: "Priya & Karthik" }
  },
  {
    id: "thottil-aadvik",
    title: "Aadvik's Thottil Ceremony",
    category: "Thottil",
    location: "Coimbatore",
    date: "January 2024",
    coverImage: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80",
      "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=800&q=80",
      "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&q=80",
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    ],
    description: "Little Aadvik's baby naming ceremony was a joyous occasion filled with family, flowers, and blessings. We documented every tender moment — from the first placement in the thottil to the gentle prayers of the grandparents.",
    testimonial: { text: "The Thottil ceremony photos are priceless. We cry happy tears every time we see them.", client: "Meena, Baby Naming" }
  },
  {
    id: "manjal-sowmya",
    title: "Sowmya's Manjal Neerattu Vizha",
    category: "Manjal Neerattu Vizha",
    location: "Tirupur",
    date: "February 2024",
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    ],
    description: "Sowmya's coming-of-age ceremony was a vibrant tapestry of colour, family love, and sacred tradition. We captured the rituals, portraits, and candid family moments with the reverence this milestone deserves.",
    testimonial: { text: "Professional, warm, and incredibly talented. Our Manjal function looked like a film.", client: "Sowmya's Family" }
  },
  {
    id: "engagement-ananya-vikram",
    title: "Ananya & Vikram Engagement",
    category: "Engagement",
    location: "Ooty",
    date: "December 2023",
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    ],
    description: "An enchanting outdoor engagement shoot set against the misty hills of Ooty. Golden hour light, cool air, and two people completely in love — it doesn't get better than this.",
  },
  {
    id: "birthday-arjun",
    title: "Arjun's First Birthday",
    category: "Birthday",
    location: "Coimbatore",
    date: "April 2024",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80",
      "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&q=80",
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80",
    ],
    description: "Arjun's first birthday was an explosion of colour, cake, and pure joy. We captured every precious smash-and-laugh moment for this little one's milestone celebration.",
  },
  {
    id: "wedding-kavitha-rajan",
    title: "Kavitha & Rajan's Wedding",
    category: "Wedding",
    location: "Salem",
    date: "November 2023",
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    ],
    description: "A grand traditional Tamil Brahmin wedding in Salem with three days of ceremonies. Every moment — from the Nalangu to the final Aashirvad — was documented with precision and heart.",
  },
  {
    id: "gruhapravesam-suresh",
    title: "Suresh Family Gruhapravesam",
    category: "Special Event",
    location: "Coimbatore",
    date: "May 2024",
    coverImage: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    ],
    description: "A warm and auspicious housewarming ceremony for the Suresh family. Sacred rituals, family blessings, and the joy of a new home — all preserved for generations.",
  },
  {
    id: "engagement-deepa-siva",
    title: "Deepa & Siva Engagement",
    category: "Engagement",
    location: "Coimbatore",
    date: "October 2023",
    coverImage: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    ],
    description: "A beautiful studio and outdoor engagement session for Deepa and Siva. Elegant, romantic, and completely authentic to who they are as a couple.",
  },
  {
    id: "thottil-nithyashree",
    title: "Nithyashree's Naming Ceremony",
    category: "Thottil",
    location: "Erode",
    date: "June 2024",
    coverImage: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80",
      "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&q=80",
    ],
    description: "Baby Nithyashree's Thottil ceremony brought together three generations of family in a room full of love. We captured the rituals and the tender family moments that words can't describe.",
  },
  {
    id: "birthday-milestone-70",
    title: "Rajamani Sir's 70th Birthday",
    category: "Birthday",
    location: "Coimbatore",
    date: "July 2024",
    coverImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    ],
    description: "A milestone 70th birthday celebration for a beloved patriarch. Family flew in from across the country for this grand occasion. The photos are a tribute to a life well-lived.",
  },
  {
    id: "wedding-divya-arun",
    title: "Divya & Arun's Wedding",
    category: "Wedding",
    location: "Coimbatore",
    date: "February 2024",
    coverImage: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    ],
    description: "Divya and Arun's wedding was an intimate affair full of traditional rituals and heartfelt moments. From the sacred Kanyadanam to the vibrant reception, every emotion was beautifully preserved.",
    testimonial: { text: "We could not have asked for a more attentive and gifted photographer. Every family member is visible and every emotion captured.", client: "Divya & Arun" }
  },
  {
    id: "manjal-pavithra",
    title: "Pavithra's Manjal Function",
    category: "Manjal Neerattu Vizha",
    location: "Karur",
    date: "August 2024",
    coverImage: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=800&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80",
    ],
    description: "Pavithra's Manjal Neerattu Vizha was a colourful, deeply moving event attended by close family and loved ones. We documented every ritual with care and cultural sensitivity.",
  },
];
