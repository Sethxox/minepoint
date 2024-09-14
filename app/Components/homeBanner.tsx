import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-sky-400 to-sky-700 mb-8">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            discount
          </h1>
          <p className="text-lg md:text-xl mb-2 text-slate-200">hello</p>
          <p className="text-2xl md:text-4xl font-bold text-yellow-300">
            get 50% discont for free
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image
            src="/banner-image.jpg"
            fill
            alt="bannerImage"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
