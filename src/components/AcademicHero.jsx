export default function AcademicsHero({
  eyebrow = "Academic Life at ACMGS",
  title = "Education, moral formation, and spiritual growth",
  description = "Our Nigerian National Curriculum is delivered across Junior and Senior Secondary School, with Science, Arts, and Commercial pathways aligned with WAEC and NECO standards.",
  backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDXV8ZyOqXDYN9bxYfxUfMLjBXNEeTlwCKybREndTOh4sZs54bh-lcwn0pX8AZjQdSG92rxthpKMWngJ5Dx9m5xkATVAqbcSebvSJchrXQUBTvDwSDkoUb09e77rFZwM-o4C51EymN4mCvBTjTsIzgktL7Eo4wujAg5PeNr-_XaAvfXV9OYnufEbjqqGviw4ybDZWO5nvH4VDllSLChp3sBQI6i9uE-YyELha4b5whfERp6bj-yKSkWwQ",
}) {
  return (
    <section className="relative min-h-[614px] flex items-center justify-center overflow-hidden bg-surface-container-low">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />

      <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding">
        <span className="font-label-caps text-label-caps text-tertiary-fixed tracking-[0.2em] mb-4 block">
          {eyebrow}
        </span>
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-primary mb-6 max-w-4xl mx-auto">
          {title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl mx-auto mb-10">
          {description}
        </p>
      </div>
    </section>
  );
}
