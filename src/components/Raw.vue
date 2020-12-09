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
        <div class="my-4">
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
            <LanguageSelector />
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

    <section class="bg-white border mt-5">
      <FaqSection />
    </section>

    <footer class="bg-white embed-hide border">
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
                <h4 data-i18n="helpful-links" class="soft-text text-md">
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
        <div class="credits-wrapper">
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
import FaqSection from "~/components/FaqSection.vue"
import LanguageSelector from "~/components/LanguageSelector.vue"

export default {
  components: {
    FaqSection,
    LanguageSelector
  },
  mounted() {
    require("~/raw/index.js");
    let event = new CustomEvent("raw_loaded", { detail: { context: this } });
    document.dispatchEvent(event);
  },
  methods: {
    changeVueLanguage(e) {
      this.$i18n.locale = e.detail.locale
    }
  },
  beforeDestroy() {
    let event = new CustomEvent("reset_raw", { });
    document.dispatchEvent(event);
  }
};
</script>
