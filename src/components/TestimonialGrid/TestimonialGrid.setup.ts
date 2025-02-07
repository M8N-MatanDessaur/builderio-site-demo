import { CommonComponentProps } from '@/utils/common-types';

export interface Testimonial {
  title: string;
  text: string;
  author: string;
  rating: number;
  imageUrl?: string;
}

export interface TestimonialGridProps extends CommonComponentProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
  itemsPerPage?: number;
}

export const defaultTestimonials: Testimonial[] = [
  {
    title: "Life-changing Platform",
    text: "This platform has completely transformed how we operate. The efficiency gains have been remarkable, and our team couldn't be happier with the results.",
    author: "Sarah Johnson",
    rating: 5,
    imageUrl: "/testimonials/sarah.jpg"
  },
  {
    title: "Outstanding Support",
    text: "The customer support team has been exceptional. They've gone above and beyond to help us implement the solution effectively.",
    author: "Michael Chen",
    rating: 5,
    imageUrl: "/testimonials/michael.jpg"
  },
  {
    title: "Game Changer",
    text: "We've seen a 200% increase in productivity since implementing this solution. The interface is intuitive and the features are exactly what we needed.",
    author: "Emily Rodriguez",
    rating: 5,
    imageUrl: "/testimonials/emily.jpg"
  },
  {
    title: "Best Decision Ever",
    text: "After evaluating multiple options, we're so glad we chose this platform. It's been instrumental in our growth over the past year.",
    author: "David Smith",
    rating: 5,
    imageUrl: "/testimonials/david.jpg"
  },
  {
    title: "Exceeded Expectations",
    text: "The platform has exceeded our expectations in every way. The automated workflows have saved us countless hours.",
    author: "Lisa Thompson",
    rating: 5,
    imageUrl: "/testimonials/lisa.jpg"
  },
  {
    title: "Incredible ROI",
    text: "The return on investment has been incredible. We've been able to scale our operations without increasing headcount.",
    author: "James Wilson",
    rating: 5,
    imageUrl: "/testimonials/james.jpg"
  }
];

export const defaultProps = {
  testimonials: defaultTestimonials,
  backgroundColor: '#ffffff',
  textColor: '#000000',
  accentColor: '#007AFF',
  title: 'What Our Clients Say',
  subtitle: 'Trusted by thousands of satisfied customers worldwide',
  itemsPerPage: 6,
  className: ''
} as const;
