import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/avatar_img.png"
        width={678}
        height={678}
        alt=""
        className="w-full h-full translate-y-10"
      />
    </div>
  );
};

export default Avatar;
