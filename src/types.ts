export interface PageProps {
  id: string;
  isActive: boolean;
  onNavigate?: (pageIndex: number) => void;
  key?: string;
}

export interface ZinePageConfig {
  number: number;
  title: string;
  subtitle?: string;
  isDark: boolean;
}
