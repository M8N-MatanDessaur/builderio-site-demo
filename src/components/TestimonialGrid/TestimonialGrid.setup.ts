import { CommonComponentProps, Image } from '@/utils/common-types';

export interface Testimonial {
  title: string;
  text: string;
  author: string;
  authorTitle?: string;
  rating: number;
  image?: Image;
  ariaLabel?: string;
}

export interface TestimonialGridProps extends CommonComponentProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
  itemsPerPage?: number;
  loadMoreAriaLabel?: string;
}

export const defaultTestimonials: Testimonial[] = [
  {
    title: "Life-changing Platform",
    text: "This platform has completely transformed how we operate. The efficiency gains have been remarkable, and our team couldn't be happier with the results.",
    author: "Sarah Johnson",
    authorTitle: "CEO at TechCorp",
    rating: 5,
    image: {
      src: "/testimonials/sarah.jpg",
      alt: "Sarah Johnson, CEO at TechCorp",
      loading: "lazy"
    }
  },
  {
    title: "Outstanding Support",
    text: "The customer support team has been exceptional. They've gone above and beyond to help us implement the solution effectively.",
    author: "Michael Chen",
    authorTitle: "CTO at InnovateX",
    rating: 5,
    image: {
      src: "/testimonials/michael.jpg",
      alt: "Michael Chen, CTO at InnovateX",
      loading: "lazy"
    }
  },
  {
    title: "Game Changer",
    text: "We've seen a 200% increase in productivity since implementing this solution. The interface is intuitive and the features are exactly what we needed.",
    author: "Emily Rodriguez",
    authorTitle: "Product Manager at GrowthCo",
    rating: 5,
    image: {
      src: "/testimonials/emily.jpg",
      alt: "Emily Rodriguez, Product Manager at GrowthCo",
      loading: "lazy"
    }
  },
  {
    title: "Best Decision Ever",
    text: "After evaluating multiple options, we're so glad we chose this platform. It's been instrumental in our growth over the past year.",
    author: "David Smith",
    authorTitle: "Director of Operations at ScaleUp",
    rating: 5,
    image: {
      src: "/testimonials/david.jpg",
      alt: "David Smith, Director of Operations at ScaleUp",
      loading: "lazy"
    }
  },
  {
    title: "Exceeded Expectations",
    text: "The platform has exceeded our expectations in every way. The automated workflows have saved us countless hours.",
    author: "Lisa Thompson",
    authorTitle: "Head of Marketing at MarketPro",
    rating: 5,
    image: {
      src: "/testimonials/lisa.jpg",
      alt: "Lisa Thompson, Head of Marketing at MarketPro",
      loading: "lazy"
    }
  },
  {
    title: "Incredible ROI",
    text: "The return on investment has been incredible. We've been able to scale our operations without increasing headcount.",
    author: "James Wilson",
    authorTitle: "CFO at FinanceHub",
    rating: 5,
    image: {
      src: "/testimonials/james.jpg",
      alt: "James Wilson, CFO at FinanceHub",
      loading: "lazy"
    }
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
  className: '',
  ariaLabel: 'Client testimonials section',
  description: 'Read what our clients have to say about their experience with our platform',
  loadMoreAriaLabel: 'Load more testimonials'
} as const;
