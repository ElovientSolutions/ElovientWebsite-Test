import { Helmet } from "react-helmet";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
};

const Seo = ({ 
  title = "Elovient | Custom Software Solutions & Digital Transformation Services",
  description = "Elovient Software Solutions specialises in crafting cutting-edge software products, custom solutions and digital transformation services.",
  keywords,
  url,
  image 
}: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default Seo;
