import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Shaktisinh Zala | AI Engineer & Full Stack Developer",
  description = "Portfolio of Shaktisinh Zala - AI Engineer, Python Developer, React Developer, FastAPI Developer and Machine Learning Enthusiast.",
  image = "https://shaktisinhzala.vercel.app/og-image.png",
  url = "https://shaktisinhzala.vercel.app",
}) => {
  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="Shaktisinh Zala, AI Engineer, Python Developer, React Developer, FastAPI, Machine Learning, Azure, Portfolio, Full Stack Developer, PostgreSQL"
      />

      <meta name="author" content="Shaktisinh Zala" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;