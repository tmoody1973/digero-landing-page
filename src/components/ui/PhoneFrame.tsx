import Image from "next/image";

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  priority?: boolean;
}

export function PhoneFrame({
  src,
  alt,
  className = "",
  width = 280,
  priority = false,
}: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width }}>
      <div className="overflow-hidden rounded-[2rem] shadow-2xl">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={Math.round(width * 2.17)}
          className="w-full"
          priority={priority}
        />
      </div>
    </div>
  );
}
