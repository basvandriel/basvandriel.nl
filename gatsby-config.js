/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const { GOOGLE_ANALYTICS_ID } = require('./src/secrets');

// Initialize dotenv
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});

// And then you can use the config in gatsby-config.js
const config = require('gatsby-plugin-config');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Bas van Driel`,
    siteUrl: `https://www.basvandriel.nl/`,
    keywords: 'developer portfolio',
    locale: 'nl-NL',
    description: `Bas van Driel is een software ontwikkelaar in Terneuzen die specialiseserd in het maken van exceptionele websites, applicaties en alles tussen in.`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bas van Driel`,
        short_name: `Bas`,
        start_url: `/`,
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: GOOGLE_ANALYTICS_ID, head: true }
    },
  ]
}