module.exports = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://jignesh-baria.web.app/`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/Jignesh_logo.png"
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};