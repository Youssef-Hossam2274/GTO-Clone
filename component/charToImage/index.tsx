import React from 'react';
import Image from 'next/image';

interface CharToImageProps {
    text: string[];
    mapCharImage: { [key: string]: string };
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
