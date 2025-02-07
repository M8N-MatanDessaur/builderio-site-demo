export interface NavigationItem {
  link: string;
  url: string;
  childlink?: NavigationItem[];
}
