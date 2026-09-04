export default function HeritageImage({
  src = "https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/488550235_1083739800437693_6202897360043229570_n.jpg?stp=dst-jpg_tt6&cstp=mx621x1104&ctp=s621x1104&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=s0H5mo8AANQQ7kNvwHMVZ0s&_nc_oc=AdqKSyfWQPiv-fdPIU_3oDxfTGJTmHPOIEOY2XfTwsKv8JozJPY5VGEJQRoqcccx7o56tbYtObgtuuPlRwFsgyV2&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&_nc_gid=8ua_pouO2pSQo2nqSwyTWA&_nc_ss=78289&oh=00_AQKEkZcC9FWiFIjz0BV5fqP1-cNGSIZBbShabpHkC5KGcw&oe=6AA073E7",
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