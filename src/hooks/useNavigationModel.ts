import useBuilderData from '@/hooks/useBuilderData';

export interface SubMenuLink {
  label: string;
  url: string;
}

export interface MainMenuLink {
  label: string;
  url: string;
  subMenuLinks?: SubMenuLink[];
}

export interface NavigationModel {
  mainMenuLinks: MainMenuLink[];
}

export function useNavigationModel() {
  const data = useBuilderData({
    model: 'navigation-model',
  });

  return {
    navigation: data,
    isLoading: !data,
  };
}
