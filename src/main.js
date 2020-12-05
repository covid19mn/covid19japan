// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueI18n from "vue-i18n"

export default function(Vue, { router, head, isClient, appOptions }) {

  // // Add an external CSS file
  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://api.mapbox.com/mapbox-gl-js/v1.10.0/mapbox-gl.css"
  });

  head.link.push({
    rel: "shortcut icon",
    type: "image/png",
    href: "https://covid19mongolia.mn/static/favicon.png"
  });

  head.link.push({
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/icons/favicon-32x32.png?v=1586005473"
  });

  head.link.push({
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/icons/favicon-16x16.png?v=1586005473"
  });

  head.link.push({
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/icons/apple-touch-icon.png?v=1586005473"
  });

  head.link.push({
    rel: "mask-icon",
    href: "/static/icons/safari-pinned-tab.svg?v=1586005473",
    color: "#8ecafb"
  })

  head.link.push({
    rel: "manifest",
    href: "/static/icons/site.webmanifest?v=1586005473"
  })

  head.meta.push({
    name: "msapplication-TileColor",
    content: "#8ecafb"
  })

  head.meta.push({
    name: "msapplication-config",
    content: "/static/icons/browserconfig.xml?v=1586005473"
  })

  head.meta.push({
    name: "theme-color",
    content: "#8ecafb"
  })

  // // Add an external JavaScript before the closing </body> tag
  head.script.push({
    src: "https://api.mapbox.com/mapbox-gl-js/v1.10.0/mapbox-gl.js",
    body: true
  });

  appOptions.i18n.setLocaleMessage('en', require('~/raw/i18n/en.json'))
  appOptions.i18n.setLocaleMessage('mn', require('~/raw/i18n/mn.json'))

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
