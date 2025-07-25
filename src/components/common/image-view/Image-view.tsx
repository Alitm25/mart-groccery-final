import Image from "next/image";

interface Props {
    src?:       string | null;
    alt:        string;
    width:      number;
    height:     number;
    className?: string;
}

export function ImageView({src = '', alt, width, height, className} :Props) {

    const imageSrc = src ? ( src.startsWith('/uploads') ? 'https://nest.navaxcollege.com'+src : src ) : "";

    return (
        <Image src={imageSrc} width={width} height={height} alt={alt} className={className}/>
    );
}

