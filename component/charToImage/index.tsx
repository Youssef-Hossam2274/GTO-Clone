import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CharToImageProps {
    text: string[];
    mapCharImage: Record<string, StaticImageData>;
    class_name: string;
}

const CharToImage: React.FC<CharToImageProps> = ({ text, mapCharImage, class_name }) => {
    return (
        <div className={class_name}>
            {
                text.map((char =>{
                    return(
                        <div className="charImg" key="">
                            <Image src={mapCharImage[char]} alt='Img'/>
                        </div>
                    ) 
                }))
            }
        </div>
    );
};

export default CharToImage;
