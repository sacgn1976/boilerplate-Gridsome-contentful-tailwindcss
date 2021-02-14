// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss")

module.exports = {
  siteName: 'Boilerplate Gridsome, contentful and tailwindcss',
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CTF_SPACE,
        accessToken: process.env.CTF_ACCESS_TOKEN,
        host: "cdn.contentful.com",
        environemnt: process.env.CTF_ENVIRONMENT,
        typename: "Contentful",
      }
    },{
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
    }
  ],
}
