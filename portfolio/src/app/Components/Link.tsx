interface LinkProps {
    name: string;
    href: string;
    iconSrc: string;
  }
  
  import React from "react";
  import Image from "next/image";
  
  const Link: React.FC<LinkProps> = ({ name, href, iconSrc }) => {
    return (
      <a href={href} target="_blank" className="inline-flex p-2 items-center rounded-lg m-2 bg-blue-500 bg-opacity-25 hover:bg-blue-600 hover:bg-opacity-50 transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl">
        <div className="w-8 h-8 md:w-12 md:h-12 relative flex justify-center items-center">
          <Image
            src={iconSrc}
            alt={`${name} icon`}
            layout="fill"
          />
        </div>
        <div className="pl-2 text-white font-semibold text-xs md:text-base">{name}</div>
      </a>
    );
  };
  
  export default Link;