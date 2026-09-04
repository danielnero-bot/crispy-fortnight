export default function HeritageImage({
  src = "https://scontent.fabb1-3.fna.fbcdn.net/v/t39.30808-6/490347380_1091354226342917_6545726570905832107_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x960&ctp=s1280x960&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pn9sv4Enf3gQ7kNvwGxxjCJ&_nc_oc=AdpM_orZSL3N3UyeS16xNWRv5NRSbxOKId49ijGlXj1ZX3lfPZGwS4h-fzy9bfjXniWawkXiw76LuNUjEWJjMuLN&_nc_zt=23&_nc_ht=scontent.fabb1-3.fna&_nc_gid=amCwBEYEP4biRZQpQ3qeew&_nc_ss=7b289&oh=00_AQLgcRPK3SKRklzylxtDeflCMvAjX2xvMI_r-kwVXjJX7Q&oe=6AA061AF",
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