import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <title>Tazim Madre - Full Stack Developer & UI/UX Designer</title>
      <meta name="description" content="Portfolio of Tazim Madre, a Full Stack Developer and UI/UX Designer specializing in creating beautiful and functional web applications." />
      <meta name="keywords" content="Tazim Madre, Full Stack Developer, UI/UX Designer, Web Development, React, JavaScript" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Tazim Madre - Full Stack Developer & UI/UX Designer" />
      <meta property="og:description" content="Portfolio of Tazim Madre, a Full Stack Developer and UI/UX Designer specializing in creating beautiful and functional web applications." />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tazim Madre - Full Stack Developer & UI/UX Designer" />
      <meta name="twitter:description" content="Portfolio of Tazim Madre, a Full Stack Developer and UI/UX Designer specializing in creating beautiful and functional web applications." />
      
      {/* Other important meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Tazim Madre" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;