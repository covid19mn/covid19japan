<template>
  <div>
    <div class="b-bottom bg-white">
      <div class="container">
        <div class="in-progress">
          <svg
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xml:space="preserve"
          >
            <path
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
          <span data-i18n="data-source-in-progress"
            >Data sourcing is in progress. The data set is not up to date.</span
          >
        </div>
      </div>
    </div>
    <header class="bg-white embed-hide border">
      <div class="container">
        <div class="my-5">
          <div class="toolbar">
            <div>
              <h1 data-i18n="covid-19-tracker" class="m-0">
                Монголын КОВИД-19 Коронавирусын Тандалт
              </h1>
              <div id="last-updated" class="last-updated my-1">
                <span data-i18n="last-updated">Last Updated:</span>&nbsp;
                <strong id="last-updated-time" class="last-updated-time"
                  >-</strong
                >
              </div>
            </div>
            <div class="lang-picker">
              <span class="lang-picker-languages"> </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div id="page">
      <section id="kpi" class="loading my-3">
        <div class="kpi-box" id="kpi-confirmed">
          <div class="value-wrapper">
            <div class="value"><div class="lds-dual-ring"></div></div>
            <div class="diff">&nbsp;</div>
          </div>
          <div class="label" data-i18n="kpi-confirmed">Confirmed</div>
          <div class="description"></div>
          <svg
            style="width: 0; height: 0; position: absolute;"
            aria-hidden="true"
            focusable="false"
          >
            <linearGradient id="kpi-confirmed-chart-gradient" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(244,67,54, 0.6)" />
              <stop offset="90%" stop-color="rgba(244,67,54, 0)" />
              <stop offset="100%" stop-color="rgba(244,67,54, 0)" />
            </linearGradient>
          </svg>
          <div class="chart" id="kpi-confirmed-chart"></div>
          <div class="chart-caption" data-i18n="confirmed-chart-caption">
            Confirmed cases per day
          </div>
        </div>

        <div class="kpi-box" id="kpi-recovered">
          <div class="value-wrapper">
            <div class="value"><div class="lds-dual-ring"></div></div>
            <div class="diff">&nbsp;</div>
          </div>
          <div class="label" data-i18n="kpi-recovered">Recovered</div>
          <div class="description"></div>
          <svg
            style="width: 0; height: 0; position: absolute;"
            aria-hidden="true"
            focusable="false"
          >
            <linearGradient id="kpi-recovered-chart-gradient" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(24,118,211, 0.6)" />
              <stop offset="90%" stop-color="rgba(24,118,211, 0)" />
              <stop offset="100%" stop-color="rgba(24,118,211, 0)" />
            </linearGradient>
          </svg>
          <div class="chart" id="kpi-recovered-chart"></div>
          <div class="chart-caption" data-i18n="recovered-chart-caption">
            Recoveries per day
          </div>
        </div>

        <div class="kpi-box" id="kpi-critical">
          <div class="value-wrapper">
            <div class="value"><div class="lds-dual-ring"></div></div>
            <div class="diff">&nbsp;</div>
          </div>
          <div class="label" data-i18n="kpi-critical">Critical</div>
          <div class="description"></div>
          <svg
            style="width: 0; height: 0; position: absolute;"
            aria-hidden="true"
            focusable="false"
          >
            <linearGradient id="kpi-critical-chart-gradient" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(114,4,5, 0.6)" />
              <stop offset="90%" stop-color="rgba(114,4,5, 0)" />
              <stop offset="100%" stop-color="rgba(114,4,5, 0)" />
            </linearGradient>
          </svg>
          <div class="chart" id="kpi-critical-chart"></div>
          <div class="chart-caption" data-i18n="critical-chart-caption">
            Critical patients per day
          </div>
        </div>

        <div class="kpi-box" id="kpi-deceased">
          <div class="value-wrapper">
            <div class="value"><div class="lds-dual-ring"></div></div>
            <div class="diff">&nbsp;</div>
          </div>
          <div class="label" data-i18n="kpi-deceased">Deaths</div>
          <div class="description"></div>
          <svg
            style="width: 0; height: 0; position: absolute;"
            aria-hidden="true"
            focusable="false"
          >
            <linearGradient id="kpi-deceased-chart-gradient" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(54,72,79, 0.6)" />
              <stop offset="90%" stop-color="rgba(54,72,79, 0)" />
              <stop offset="100%" stop-color="rgba(54,72,79, 0)" />
            </linearGradient>
          </svg>
          <div class="chart" id="kpi-deceased-chart"></div>
          <div class="chart-caption" data-i18n="deceased-chart-caption">
            Deaths per day
          </div>
        </div>

        <div
          class="kpi-box"
          id="kpi-active"
          data-tippy-i18n="kpi-active-tooltip"
          data-tippy-placement="bottom"
        >
          <div class="value-wrapper">
            <div class="value"><div class="lds-dual-ring"></div></div>
            <div class="diff">&nbsp;</div>
          </div>
          <div class="label"><span data-i18n="kpi-active">Active</span></div>
          <div class="description"></div>
          <svg
            style="width: 0; height: 0; position: absolute;"
            aria-hidden="true"
            focusable="false"
          >
            <linearGradient id="kpi-active-chart-gradient" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(223,14,31, 0.6)" />
              <stop offset="90%" stop-color="rgba(223,14,31, 0)" />
              <stop offset="100%" stop-color="rgba(223,14,31, 0)" />
            </linearGradient>
          </svg>
          <div class="chart" id="kpi-active-chart"></div>
          <div class="chart-caption" data-i18n="active-chart-caption">
            Active cases per day
          </div>
        </div>

        <div class="kpi-box" id="kpi-tested">
          <div class="value-wrapper">
            <div class="value"><div class="lds-dual-ring"></div></div>
            <div class="diff">&nbsp;</div>
          </div>
          <div class="vitals">
            <div class="label" data-i18n="kpi-tested">Tested</div>
            <div class="description"></div>
          </div>
          <div class="chart-container">
            <svg
              style="width: 0; height: 0; position: absolute;"
              aria-hidden="true"
              focusable="false"
            >
              <linearGradient id="kpi-tested-chart-gradient" x2="0" y2="1">
                <stop offset="0%" stop-color="rgba(164,173,192, 0.6)" />
                <stop offset="90%" stop-color="rgba(164,173,192, 0)" />
                <stop offset="100%" stop-color="rgba(164,173,192, 0)" />
              </linearGradient>
            </svg>
            <div class="chart" id="kpi-tested-chart"></div>
            <div class="chart-caption" data-i18n="tested-chart-caption">
              Tests per day
            </div>
          </div>
        </div>
      </section>

      <section class="chart-control embed-hide">
        <span data-i18n="time-period" class="time-period-caption">Time Period</span>: 
        <a data-i18n="all-time" id="time-period-all-time" class="time-period selected">All Time</a> |
        <a data-i18n="last-month" id="time-period-recent" class="time-period">Last month</a>
      </section>

      <section id="national-charts" class="embed-hide">
        <section id="trend-chart-container" class="embed-hide">
          <div id="trend-chart-box">
            <div id="trend-chart">
              <div class="loader"><div class="lds-dual-ring"></div></div>
            </div>
          </div>
        </section>

        <section id="daily-increase-container" class="embed-hide">
          <div id="daily-increase-chart-box">
            <div id="daily-increase-chart">
              <div class="loader"><div class="lds-dual-ring"></div></div>
            </div>
          </div>
        </section>
      </section>

      <section id="prefecture-sections">
        <section id="prefecture-map-container">
          <a name="map"
            ><h4>
              <span data-i18n="covid-19" class="embed-show">COVID-19</span>
              <span data-i18n="outbreak-map">Outbreak Map</span>
            </h4></a
          >
          <div id="prefecture-map-contents">
            <div id="map-container"></div>
            <p class="embed-show footnote">
              powered by
              <a href="https://covid19mongolia.mn" target="_blank"
                >covid19mongolia.mn</a
              >
            </p>
            <div id="map-legend"></div>
          </div>
        </section>

        <section id="prefecture-top-table-container" class="embed-hide">
          <h4 data-i18n="active-regions">Most Active Regions</h4>
        </section>
      </section>

      <section id="regional-charts-container" class="embed-hide">
        <svg
          style="width: 0; height: 0; position: absolute;"
          aria-hidden="true"
          focusable="false"
        >
          <linearGradient id="regional-chart-gradient" x2="0" y2="1">
            <stop offset="0%" stop-color="rgba(0, 10, 18, 0.6)" />
            <stop offset="90%" stop-color="rgba(0, 10, 18, 0)" />
            <stop offset="100%" stop-color="rgba(0, 10, 18, 0)" />
          </linearGradient>
        </svg>
      </section>

      <section id="regional-trajectory-container" class="embed-hide mt-3">
        <div id="regional-trajectory-chart-box">
          <div id="regional-trajectory">
            <div class="loader"><div class="lds-dual-ring"></div></div>
          </div>
        </div>
      </section>
    </div>

    <footer class="bg-white embed-hide border mt-5">
      <div class="container">
        <div>
          <div class="links-wrapper">
            <div class="built-by-wrapper">
              <h3
                data-i18n="covid-19-tracker"
                class="mt-0"
                style="margin-bottom:1rem"
              >
                Монголын КОВИД-19 Коронавирусын Тандалт
              </h3>
              <p data-i18n="built-by">
                This site is built by "AND Global" team members as part of our
                social responsibility efforts. The implementation is based on
                open source project referenced below.
              </p>
            </div>

            <section id="helpful-links" class="embed-hide">
              <a name="links">
                <h4 data-i18n="helpful-links" class="soft-text">
                  Helpful Links
                </h4>
              </a>
              <ul>
                <li>
                  <a href="https://mohs.mn/news/t/6">
                    Mongolian Ministry of Health
                  </a>
                </li>
                <li>
                  <a href="https://covid19.mohs.mn">
                    Covid 19 information site by Ministry of Health
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div class="credits-wrapper mb-5">
          <div>
            <p>
              Data sourced from Official Government Sources. (<a
                href="https://covid19.mohs.mn"
                >Full Details</a
              >.)
            </p>
            <p style="margin-bottom:0">
              This project is made possible by
              <a href="https://github.com/reustle/covid19japan"
                >covid19japan on Github</a
              >
            </p>
          </div>

          <div id="last-updated" class="last-updated">
            <span data-i18n="last-updated">Last Updated</span>:&nbsp;
            <strong id="last-updated-time" class="last-updated-time">-</strong>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  mounted() {
    require("~/raw/index.js");
    let event = new CustomEvent("raw_loaded", { });
    document.dispatchEvent(event);
  }
};
</script>

<style lang="scss">
@import "../../node_modules/tippy.js/dist/tippy.css";
@import "../../node_modules/c3/c3.min.css";

@import "~/raw/colors";
@import "~/raw/type";
@import "~/raw/layout";
@import "~/raw/loader";
@import "~/raw/custom";
@import "~/raw/components/OutbreakMap/map";
@import "~/raw/components/PrefectureTable/prefectureTable";
// Regional section
@import "~/raw/components/RegionalCharts/regional";
// KPI Numbers.
@import "~/raw/components/Kpi/kpi";

// Use border-box override for more simple box-sizing.
* {
  box-sizing: border-box;
}

body {
  margin: 0px;
  font-family: 'Inter', helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.4rem;
  color: $primary-black;
  background: $color-background;
}

body[data-direction=rtl] #page {
  direction: rtl;
}

#page, .container  {
  max-width: $breakpoint-1200-page-width;
  margin: 0 auto;
}
@media (min-width: $breakpoint-960) and (max-width: $breakpoint-1200-less-than) {
  #page, .container { max-width: $breakpoint-960-page-width; }
}
@media (min-width: $breakpoint-600) and (max-width: $breakpoint-960-less-than) {
  #page, .container { max-width: $breakpoint-600-page-width; }
}
@media (min-width: $breakpoint-500) and (max-width: $breakpoint-600-less-than) {
  #page, .container { max-width: $breakpoint-500-page-width; }
}
@media (max-width: $breakpoint-500) {
  #page, .container { max-width: 90%;  }
}

// Title styles

h1 {
  font-size: 1.8rem;
  line-height: 1.2em;
  font-weight: $font-weight-extra-bold;
}

h4 {
  font-size: 1.4rem;
  line-height: 1.2em;
  margin-block-end: 1rem;
  font-weight: $font-weight-bold;
}

h5 {
  font-size: 1.1rem;
  font-weight: $font-weight-bold;
  margin-block-end: 1rem;
}

.footnote {
  display: block;
  font-size: 0.9em;
  font-style: italic;
  text-align: end;
  margin-block-start: 5px;
  margin-inline-end: 10px;
  margin-block-end: 0;
  margin-inline-start: 10px;
}


header {
  padding: 10px 0;

  .toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 0.875rem;

    .lang-picker-title {
      font-style: italic;
      margin-inline-end: 0.5rem;
    }

    .lang-picker-button {
      word-wrap: none;
    }
    
    .lang-picker {
      padding-block-start: 0.5em;
      padding-block-end: 0.5em;
      padding-inline-start: 0;

      a {
        padding: 8px 16px;
        white-space: nowrap;
        text-decoration: none;
        margin-block-end: 0.3rem;

        &.active {
          background: #F1F1F1;
          border-radius: 8px;
        }
      }
    }
  }
}

a, a:hover, a:visited {
  color: #000a12;
}

.text-center {
  text-align: center;
}

// National charts
#national-charts { width: 100%; }

.chart-control {
  font-size: 0.8rem;

  margin: 10px;
  padding-block-start: 0.5em;
  padding-block-end: 0.5em;

  .time-period-caption {
    font-weight: bold;
  }


  a {
    cursor: pointer;
    text-decoration: underline;
  }
  a.selected {
    cursor: default;
    font-weight: bold;
    text-decoration: none;
  }

}


@media (min-width: $breakpoint-960) {
  #national-charts {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    //align-items: stretch;
  }
  #trend-chart-container { 
    margin-right: 0.75rem;
    flex: 1;
    width: 50%;
  }
  #daily-increase-container { 
    margin-left: 0.75rem;
    flex: 1;
    width: 50%;
  }
}

#daily-increase-chart, #trend-chart {
  min-height: 320px;
}

#daily-increase-chart-box, #trend-chart-box {
  padding-block-start: 20px;
  padding-inline-end: 10px;
  padding-block-end: 5px;
  padding-inline-start: 10px;
  border-radius: $box-border-radius;
  border: $color-box-border;
  background: $color-box-background;
  box-shadow: $color-box-shadow;
}

// Prefectural section

#prefecture-sections {
  width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

  #prefecture-map-container { 
    margin-right: 10px;
  }

  #prefecture-top-table-container { 
    margin-left: 10px;
  }

  #prefecture-map-container, #prefecture-top-table-container {
    flex: 1;
    border: $color-box-border;
    box-shadow: $color-box-shadow;
    border-radius: $box-border-radius;
    width: 50%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    background-color: #fff;
  }
}

// National charts
#trajectories { width: 100%; }

#regional-trajectory-container {
  padding-block-start: 20px;
  padding-inline-end: 10px;
  padding-block-end: 5px;
  padding-inline-start: 10px;
  border-radius: $box-border-radius;
  border: $color-box-border;
  background: $color-box-background;
  box-shadow: $color-box-shadow;
}

#regional-trajectory-chart {
  min-height: 500px;
}

#regional-trajectory-chart-box {
  padding-block-start: 10px;
  padding-inline-end: 10px;
  padding-block-end: 5px;
  padding-inline-start: 10px;
}


#all-prefectures-table-container {
  max-width: 800px;
  margin: 0 auto;
}

#helpful-links {
  align-self: flex-end;
  text-align: right;
  flex-grow: 1;

  ul {
    list-style: none;
  }

  li {
    margin-block-end: 8px;
    word-wrap: break-word;
  }
}

#travel-restrictions {
  margin-block-end: 5em;
  .country-link {
    white-space: nowrap;
  }
}


footer {
  background: white;
  margin: 0;

  .last-updated {
    align-self: flex-end;
    text-align: right;
    flex-grow: 1;
  }

}

.built-by-wrapper {
  flex-basis: 600px;
}

@media (max-width: $breakpoint-960) {
  footer {
    background-color: red;

    .links-wrapper {
      flex-direction: column;
    }

    #helpful-links {
      align-self: flex-start;
      text-align: left;

      ul {
        padding-left: 0;
      }
    }

    .built-by-wrapper {
      flex-basis: auto;
    }

    .credits-wrapper {
      flex-direction: column;
    }

    .last-updated {
      align-self: flex-start;
      margin-top: 1.5rem;
    }
  }
}


// footer {
//   margin: 0 auto;
//   padding: 1rem;
//
//   p {
//     font-size: 0.9rem;
//     line-height: 1.2rem;
//     margin: 0 0 1rem;
//   }
//
//   a, a:active {
//     color: #1976d2 !important;
//   }
//   .avatar {
//     text-decoration: none;
//     img {
//       height: 50px;
//       width: 50px;
//       margin: 5px;
//       border-radius: 50%;
//     }
//   }
// }
//
body {
  &.embed {
    .embed-hide {
      display: none;
    }
  }
  &:not(.embed) {
    .embed-show {
      display: none;
    }
  }

  // Disable box shadow and grey background for embeds.
  &.embed {
    background: $color-embed-background;

    #prefecture-map-contents,
    #kpi .kpi-box
     {
      box-shadow: none;
      border: $color-box-border;
    }

    // Smaller avatars for embedded mode.
    .avatar img {
      width: 30px;
      height: 30px;
    }
  }
}

img.emoji {
  height: 1em;
  width: 1em;
  margin-block-start: 0;
  margin-inline-end: .1em;
  margin-block-end: 0;
  margin-inline-start: .1em;
  vertical-align: -0.1em;
}

// c3 chart styling
#trend-chart-container,
#daily-increase-container,
#regional-trajectory-container {
  path.c3-line {
    stroke-width: 2px;
  }
  line.c3-xgrid, line.c3-ygrid {
    stroke-dasharray: 0 0;
    stroke: #f0f0f0 !important;
  }
}

#daily-increase-chart {
  .c3-axis-x .tick line {
    display: none;
  }
}

.hidden {
  display: none;
}
</style>
