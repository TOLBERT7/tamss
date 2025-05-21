export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  detailedDescription: string;
}

export interface SectionProps {
  id: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: boolean;
  dropdownItems?: NavItem[];
}