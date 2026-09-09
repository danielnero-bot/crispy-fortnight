import heritageImage from "../assets/images/heritage.jpg";

export default function HeritageImage({
  src = heritageImage,
  alt = "Archival image of ACMGS",
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
      <div className="relative w-full h-64 sm:h-80 md:h-[420px] lg:h-[500px] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,35,71,0.05)]">
        <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply" />
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover relative z-0"
        />
      </div>
    </section>
  );
}
