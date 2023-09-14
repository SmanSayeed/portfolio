import { useState } from 'react';
import Image from 'next/image';
import SnakeBalls from '../Loader/SnakeBalls';

interface ImageLoaderProps {
  src: string;
  alt: string;
  preview:string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, preview }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="">
      {isLoading && <div className=" top-[50%] left-[50%]"><SnakeBalls/></div>}
      {hasError && <div>Error loading image.</div>}

        <Image
          src={isLoading?preview:src}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          width={500} // Adjust width and height as needed
          height={300}
        />
    
    </div>
  );
};

export default ImageLoader;
