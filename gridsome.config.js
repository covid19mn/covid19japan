// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.sass'),
        // or if you use scss
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, './src/raw/globals.scss'),
        // or scss
        path.resolve(__dirname, './src/sass/*.scss'),
      ],
    })
}

module.exports = {
  siteName: "covid19mongolia",
  siteUrl: "https://covid19mongolia.mn",
  pathPrefix: "/",
  outputDir: "/docs",
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/questions/**/*.md',
        typeName: 'Question'
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'G-PSSYC29G00'
      }
    },
    {
      use: 'gridsome-plugin-sentry',
      options: {
        dsn: 'https://bfc7be47074140f6a549f727fe487320@o481524.ingest.sentry.io/5530345',
        blacklistUrls: [
          // Chrome extensions
          /extensions\//i,
          /^chrome:\/\//i,
        ],
        debug: false,
        ignoreErrors: [
          // Ignore Google Translate Chrome extension errors.
          // See: https://medium.com/@amir.harel/a-b-target-classname-indexof-is-not-a-function-at-least-not-mine-8e52f7be64ca
          "a[b].target.className.indexOf is not a function",
        ]
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'mn',
          'en',
        ],
        fallbackLocale: 'mn', // fallback language
        defaultLocale: 'mn', // default language
        enablePathRewrite: false, // rewrite path with locale prefix, default: true
        enablePathGeneration: true,
      }
    }
  ]
}
