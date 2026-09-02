export default function HeritageImage({
  src = "https://lh3.googleusercontent.com/aida-public/AB6AXuC3FtiQSVr9HZ0UWrjOEa9FBrH9n-eLVPYtSpJTcI8PtDx9lTdJjj2-Dbc4cjhTdJ7SRbX95_10E5col1j-vnaAPXcYGUADlp5nOdWg9h86Rc5VtHnAkjNG98KvnwjBTL7_OtXozD4u9VfUIIjz6i3CMtmP-7v30LUyooL6EFOxKpFu4OD2UCFHrNIfBf9FCWPy0H45eFgrj_EJt5VMDXpxH1dEZ9aX7UTbg8YUPRPpi8RTOUK8eEGL9g",
  alt = "Archival image of ACMGS",
}) {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-padding">
      <div className="relative w-full h-[512px] md:h-[614px] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,35,71,0.05)]">
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