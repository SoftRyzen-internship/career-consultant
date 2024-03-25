import { useState, useEffect, useRef } from 'react';

export const useReadMoreButton = (text: string) => {
  const [isShownReadMoreBtn, setIsShownReadMoreBtn] = useState(false);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const textElement = textRef.current;

    const calculateAndSetTruncation = () => {
      if (textElement) {
        const isTextTruncated =
          textElement.scrollHeight > textElement.clientHeight;
        setIsShownReadMoreBtn(isTextTruncated);
      }
    };

    calculateAndSetTruncation();

    window.addEventListener('resize', calculateAndSetTruncation);

    return () => {
      window.removeEventListener('resize', calculateAndSetTruncation);
    };
  }, [text]);

  return { isShownReadMoreBtn, textRef };
};
