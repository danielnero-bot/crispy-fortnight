export default function BoardingHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-20 pb-16">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVjDnvq5eiUVzG77SclsxB_1W9lnMzKc1zagVNNyMLYfRxYbn2Aybfq-KmjpDVc2RHLwK2QM3iawCU8CtpzXNCWTOffanPa63qJfGJ5fBOdomC0aINGLgAjiw9UMqCi1h-msBiQP5Y4gGbdqfpbTB0ymHOeBccVAHgsFQr2j21rER6shWVmh2Lwu-bQBegH4lvnQgiGs4Sz7UL8Dcg5Nd4PaAEnMOm6Yc1oqfWGlsLjIFn9QA5DOwNKg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-950/60"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Living, Learning, and Leading at ACMGS Elelenwo
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Boarding at ACMGS is a transformative community experience guided by
          the Diocese of Evo, building character, self-reliance, and lifelong
          sisterhood in a secure Christian environment.
        </p>
      </div>
    </section>
  );
}
