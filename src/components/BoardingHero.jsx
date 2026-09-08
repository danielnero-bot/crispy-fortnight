export default function BoardingHero() {
  return (
    <section id="student-experience" className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center pt-20 pb-16">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVjDnvq5eiUVzG77SclsxB_1W9lnMzKc1zagVNNyMLYfRxYbn2Aybfq-KmjpDVc2RHLwK2QM3iawCU8CtpzXNCWTOffanPa63qJfGJ5fBOdomC0aINGLgAjiw9UMqCi1h-msBiQP5Y4gGbdqfpbTB0ymHOeBccVAHgsFQr2j21rER6shWVmh2Lwu-bQBegH4lvnQgiGs4Sz7UL8Dcg5Nd4PaAEnMOm6Yc1oqfWGlsLjIFn9QA5DOwNKg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-950/65"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Living, Learning, and Leading at ACMGS Elelenwo
        </h1>
        <p className="font-body text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          From boarding and house life to clubs, faith, leadership, and friendship,
          every part of the ACMGS experience helps girls grow with confidence.
        </p>
      </div>
    </section>
  );
}
