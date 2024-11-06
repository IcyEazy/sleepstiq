import { James, VapeImg1, VapeImg2 } from "../assets/images";

export interface HappyCustomersTestimonialsProps {
  id: string;
  avatar?: string;
  name: string;
  role?: string;
  content: string;
  rating?: number;
}

export const happyCustomers: HappyCustomersTestimonialsProps[] = [
  {
    id: "1",
    avatar: James,
    name: "James Miller",
    role: "CEO, Techbias",
    content:
      "I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq. ",
    rating: 5,
  },
  {
    id: "2",
    avatar: James,
    name: "John Matthews",
    role: "Frontend Developer",
    content:
      "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
    rating: 5,
  },
  {
    id: "3",
    avatar: James,
    name: "Eunice Oliver",
    role: "Backend Developer",
    content:
      "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
    rating: 5,
  },
  {
    id: "4",
    avatar: James,
    name: "laura Davies",
    role: "CEO, Platoon",
    content: "It’s a really good product and helps me sleep better at night!",
    rating: 5,
  },
  {
    id: "5",
    avatar: James,
    name: "Jane Books",
    role: "Frontend Developer",
    content:
      "Helps me relax and remember to breathe. Stress level definitely goes down",
    rating: 5,
  },
  {
    id: "6",
    avatar: James,
    name: "James Miller",
    role: "CEO, Techbias",
    content:
      "I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq. ",
    rating: 5,
  },
  {
    id: "7",
    avatar: James,
    name: "John Matthews",
    role: "Frontend Developer",
    content:
      "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
    rating: 5,
  },
  {
    id: "8",
    avatar: James,
    name: "Eunice Oliver",
    role: "Backend Developer",
    content:
      "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
    rating: 5,
  },
  {
    id: "9",
    avatar: James,
    name: "laura Davies",
    role: "CEO, Platoon",
    content: "It’s a really good product and helps me sleep better at night!",
    rating: 5,
  },
  {
    id: "10",
    avatar: James,
    name: "Jane Books",
    role: "Frontend Developer",
    content:
      "Helps me relax and remember to breathe. Stress level definitely goes down",
    rating: 5,
  },
];

export interface ProductReviewProps {
  id: string;
  product_image: string;
  review_content: string;
  reviewer: string;
  rating: number;
}

export const customersProductReviews: ProductReviewProps[] = [
  {
    id: "1",
    product_image: VapeImg1,
    review_content:
      "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
    reviewer: "Rachel Dill",
    rating: 5,
  },
  {
    id: "2",
    product_image: VapeImg2,
    review_content:
      "It really helps me fall right to sleep compared to melatonin pills.",
    reviewer: "Javier Mendez",
    rating: 5,
  },
  {
    id: "3",
    product_image: VapeImg2,
    review_content:
      "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
    reviewer: "Naomi Nwazurile",
    rating: 5,
  },
  {
    id: "4",
    product_image: VapeImg1,
    review_content:
      "I have been falling asleep faster and sleeping thru the night.",
    reviewer: "Nate Jacobs",
    rating: 5,
  },
  {
    id: "5",
    product_image: VapeImg1,
    review_content:
      "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
    reviewer: "Rachel Dill",
    rating: 5,
  },
  {
    id: "6",
    product_image: VapeImg2,
    review_content:
      "It really helps me fall right to sleep compared to melatonin pills.",
    reviewer: "Javier Mendez",
    rating: 5,
  },
  {
    id: "7",
    product_image: VapeImg2,
    review_content:
      "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
    reviewer: "Naomi Nwazurile",
    rating: 5,
  },
  {
    id: "8",
    product_image: VapeImg1,
    review_content:
      "I have been falling asleep faster and sleeping thru the night.",
    reviewer: "Nate Jacobs",
    rating: 5,
  },
];

export interface FAQProps {
  id: string;
  question: string;
  answer: string;
}

export const sleepstiqFaqs: FAQProps[] = [
  {
    id: "1",
    question: "Q1: How does it work?",
    answer:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
  },
  {
    id: "2",
    question: "Q2: Why inhale melatonin?",
    answer:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
  },
  {
    id: "3",
    question: "Q3: How much melatonin is there per inhale?",
    answer:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
  },
  {
    id: "4",
    question: "Q4: Is it an e-cigarette or tobacco product?",
    answer:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
  },
  {
    id: "5",
    question: "Q5: What's in it?",
    answer:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
  },
  {
    id: "6",
    question: "Q6: What's not in it?",
    answer:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
  },
  {
    id: "7",
    question: "Q7: How long does it last?",
    answer:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
  },
  {
    id: "8",
    question: "Q8: How do I know it has run out/died?",
    answer:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
  },
];

export const orderFaqs: FAQProps[] = [
  {
    id: "1",
    question: "Q1: How does it work?",
    answer: "You can order from the application",
  },
  {
    id: "2",
    question: "Q2: How long does it take to process orders",
    answer: "Does not take long",
  },
];

export const melantoninFaqs: FAQProps[] = [
  {
    id: "1",
    question: "Q1: Why inhale melatonin?",
    answer:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
  },
  {
    id: "2",
    question: "Q2: How much melatonin is there per inhale?",
    answer:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
  },
];
