'use client';

import Image from 'next/image';

import React, { useEffect, useState } from 'react';

import MediaQuery from 'react-responsive';

type HeroImagesProps = {
  maxWidth?: number;
  minWidth?: number;
  width: number;
  height: number;
  src: string;
  blur: string;
};

export const HeroImages: React.FC<HeroImagesProps> = ({
  minWidth,
  maxWidth,
  width,
  height,
  src,
  blur,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    isLoaded && (
      <MediaQuery minWidth={minWidth} maxWidth={maxWidth}>
        <Image
          width={width}
          height={height}
          alt="Юлія Степаненко"
          src={src}
          priority={true}
          placeholder="blur"
          blurDataURL={blur}
        />
      </MediaQuery>
    )
  );
};
