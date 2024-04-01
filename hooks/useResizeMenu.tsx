import { useEffect } from 'react';

export const useResizeMenu = (action: () => void) => {
  useEffect(() => {
    const handleViewportChange = () => {
      if (window.innerWidth >= 1280) {
        action();
      }
    };

    window.addEventListener('resize', handleViewportChange);

    return () => window.removeEventListener('resize', handleViewportChange);
  }, [action]);
};
