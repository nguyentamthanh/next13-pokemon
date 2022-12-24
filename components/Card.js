import iconBack from "../assets/images/icon_back.png";
import Image from "next/image";
import { useState } from "react";
function Card({}) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="mb-4 mr-4 inline-block w-100px h-140px">
      <div
        className={`transition-transform duration-1000 w-full h-full transform cursor-pointer relative preserve-3d transform-[1]`}
      >
        <div className="absolute w-full h-full backface-hidden rounded-2xl p-4 shadow-lg">
          <div className="w-full h-full flex justify-center items-center">
            <Image
              width={60}
              height={60}
              src={iconBack}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
