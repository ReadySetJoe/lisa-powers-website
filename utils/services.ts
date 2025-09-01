type Service = {
  title: string;
  desc: string;
  img: string;
  content: string;
  pricing: string;
};

export const SERVICES: Record<string, Service> = {
  "house-sitting": {
    title: "House Sitting",
    desc: "Reliable care for your home when you’re away.",
    img: "/images/house-sitting.jpg",
    content: `I’ll care for your home while you’re away — checking mail, watering plants, and making sure everything is safe and secure. You can travel with peace of mind knowing your house is in good hands.`,
    pricing: "$30 per day",
  },
  "pet-sitting": {
    title: "Pet Sitting",
    desc: "Compassionate attention for your furry family members.",
    img: "/images/pet-sitting.jpg",
    content: `Daily visits to feed, walk, and play with your pets. I provide loving attention and keep your pets happy while you’re away.`,
    pricing: "$25 per visit / $40 overnight",
  },
  "photo-archiving": {
    title: "Photo Archiving",
    desc: "Organize and preserve precious family memories.",
    img: "/images/photo-archiving.jpg",
    content: `I’ll organize, scan, and digitally archive your family photos, ensuring your memories are preserved and easy to share.`,
    pricing: "$50 per 100 photos",
  },
  "bracelet-making": {
    title: "Bracelet Making",
    desc: "Custom, handmade bracelets crafted with care.",
    img: "/images/bracelet-making.jpg",
    content: `Custom, handmade bracelets using quality materials. Choose your colors, style, and personalization for a unique gift or keepsake.`,
    pricing: "$15 per bracelet",
  },
  monogramming: {
    title: "Monogramming",
    desc: "Personalized monogrammed gifts and keepsakes.",
    img: "/images/monogramming.jpg",
    content: `Personalized monogramming for towels, bags, and gifts. Perfect for special occasions or adding a personal touch to everyday items.`,
    pricing: "$10 per item",
  },
  "weekday-meal-help": {
    title: "Weekday Meal Help",
    desc: "Support with shopping, prepping, and family meals.",
    img: "/images/weekday-meal-help.jpg",
    content: `Assistance with grocery shopping, meal prep, and cooking for busy families. Healthy, home-cooked meals tailored to your preferences.`,
    pricing: "$40 per meal / $100 weekly package",
  },
  "car-pool-help": {
    title: "Car Pool Help",
    desc: "Dependable transportation support for busy families.",
    img: "/images/car-pool-help.jpg",
    content: `Reliable transportation for school, activities, or appointments. Safe and punctual service for children and families.`,
    pricing: "$20 per trip / $80 weekly package",
  },
};
