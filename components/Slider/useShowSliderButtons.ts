import { useMediaQuery } from 'react-responsive';

export const useShowSliderButtons = (section: string, data: any[]) => {
  const isDesktop = useMediaQuery({ minDeviceWidth: 1280 });
  const isTablet = useMediaQuery({ minDeviceWidth: 768, maxDeviceWidth: 1279 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 767 });

  let letShowSliderButtons = false;

  if (section !== 'hero') {
    if (isDesktop && data.length > 3) {
      letShowSliderButtons = true;
    } else if (isTablet && data.length > 2) {
      letShowSliderButtons = true;
    } else if (isMobile && data.length > 1) {
      letShowSliderButtons = true;
    }
  }
  return letShowSliderButtons;
};
