import { Image } from '@/utils/common-types';

export interface Logo {
  name: string;
  image: {
    image: string | File;
    alt: string;
    width?: number;
    height?: number;
  };
  link?: string;
}

export interface LogoCloudProps {
  logos?: Logo[];
  backgroundColor?: string;
  textColor?: string;
  title?: string;
  subtitle?: string;
  headingColor?: string;
  subtitleColor?: string;
  grayscale?: boolean;
  className?: string;
}

export const defaultProps: LogoCloudProps = {
  logos: [
    {
      name: "TechCorp",
      image: {
        image: "/logos/techcorp.svg",
        alt: "TechCorp Logo",
        width: 150,
        height: 50
      },
      link: "https://techcorp.example.com"
    },
    {
      name: "InnovateX",
      image: {
        image: "/logos/innovatex.svg",
        alt: "InnovateX Logo",
        width: 150,
        height: 50
      },
      link: "https://innovatex.example.com"
    },
    {
      name: "FutureWorks",
      image: {
        image: "/logos/futureworks.svg",
        alt: "FutureWorks Logo",
        width: 150,
        height: 50
      },
      link: "https://futureworks.example.com"
    },
    {
      name: "GlobalTech",
      image: {
        image: "/logos/globaltech.svg",
        alt: "GlobalTech Logo",
        width: 150,
        height: 50
      },
      link: "https://globaltech.example.com"
    },
    {
      name: "SmartSolutions",
      image: {
        image: "/logos/smartsolutions.svg",
        alt: "SmartSolutions Logo",
        width: 150,
        height: 50
      },
      link: "https://smartsolutions.example.com"
    },
    {
      name: "DataFlow",
      image: {
        image: "/logos/dataflow.svg",
        alt: "DataFlow Logo",
        width: 150,
        height: 50
      },
      link: "https://dataflow.example.com"
    }
  ],
  backgroundColor: "#ffffff",
  textColor: "var(--primary)",
  title: "Trusted by Leading Companies",
  subtitle: "Join thousands of companies who trust our platform",
  headingColor: "var(--secondary)",
  subtitleColor: "var(--text-muted)",
  grayscale: true,
  className: ""
} as const;
