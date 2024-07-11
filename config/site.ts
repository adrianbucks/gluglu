import { FeaturesSection, SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Gluglu",
  description:
    "Get your project off to an explosive start with Gluglu! Harness the power of AI to generate your next project in minutes.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`, // TODO: change image
  links: {
    twitter: "https://twitter.com/miickasmt", // TODO: change twitter
    github: "https://github.com/mickasmt/next-saas-stripe-starter", // TODO: change github
  },
  mailSupport: "support@saas-starter.com", // TODO: change support email
};

export const featuresSection: FeaturesSection = {
  label: "Features",
  title: "Discover all features.",
  subtitle:
    "Take advantage of the many features that GluGlu offers to get your project off to a flying start.",
  card: {
    showIcon: true,
    showTitle: true,
    ctaText: "Read more",
    ctaIcon: "chevronRight",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];
