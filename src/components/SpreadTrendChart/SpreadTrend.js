import * as c3 from "c3";
import { color as d3_color } from "d3-color";
import i18next from "i18next";
import { format as dateFormat } from "date-fns";

import { LOCALES, maybeIntlNumberFormat } from "../../i18n";
import { niceScale } from "../../data/scaling";

import {
  COLOR_ACTIVE,
  COLOR_CONFIRMED,
  COLOR_RECOVERED,
  COLOR_DECEASED,
  DEFAULT_CHART_TIME_PERIOD,
  CHART_TITLE_PADDING,
} from "../../data/constants";

const drawTrendChart = (
  sheetTrend,
  trendChart,
  lang,
  timePeriod = DEFAULT_CHART_TIME_PERIOD
) => {
  const dateLocale = LOCALES[lang];
  const formatNumber = maybeIntlNumberFormat(lang);

  const cols = {
    Date: ["Date"],
    Confirmed: ["Confirmed"],
    Active: ["Active"],
    Critical: ["Critical"],
    Deceased: ["Deceased"],
    Recovered: ["Recovered"],
    Tested: ["Tested"],
  };

  let startIndex = timePeriod > 0 ? sheetTrend.length - timePeriod : 0;

  if (startIndex < 0) {
    startIndex = 0;
  }

  for (let i = startIndex; i < sheetTrend.length; i++) {
    const row = sheetTrend[i];

    cols.Date.push(row.date);
    cols.Confirmed.push(row.confirmedCumulative);
    cols.Critical.push(row.criticalCumulative);
    cols.Deceased.push(row.deceasedCumulative);
    cols.Recovered.push(row.recoveredCumulative);
    cols.Active.push(
      row.confirmedCumulative - row.deceasedCumulative - row.recoveredCumulative
    );
    cols.Tested.push(row.testedCumulative);
  }

  const scale = niceScale(cols.Confirmed.slice(1), 5);

  if (trendChart) {
    trendChart.destroy();
  }

  trendChart = c3.generate({
    bindto: "#trend-chart",
    title: {
      show: false,
      text: i18next.t("outbreak-spread-trend"),
      position: "top-left", // top-left, top-center and top-right
      padding: CHART_TITLE_PADDING,
    },
    data: {
      x: "Date",
      color: (color, d) => {
        if (d && d.index === cols.Date.length - 2) {
          const newColor = d3_color(color);
          newColor.opacity = 0.6;
          return newColor;
        } else {
          return color;
        }
      },
      columns: [
        cols.Date,
        cols.Confirmed,
        cols.Active,
        cols.Recovered,
        cols.Deceased,
        //cols.Tested
      ],
      names: {
        Confirmed: i18next.t("kpi-confirmed"),
        Active: i18next.t("kpi-active"),
        Recovered: i18next.t("kpi-recovered"),
        Deceased: i18next.t("kpi-deceased"),
      },
      regions: {
        [cols.Confirmed[0]]: [
          { start: cols.Date[cols.Date.length - 2], style: "dashed" },
        ],
        [cols.Active[0]]: [
          { start: cols.Date[cols.Date.length - 2], style: "dashed" },
        ],
        [cols.Recovered[0]]: [
          { start: cols.Date[cols.Date.length - 2], style: "dashed" },
        ],
        [cols.Deceased[0]]: [
          { start: cols.Date[cols.Date.length - 2], style: "dashed" },
        ],
        //[cols.Tested[0]]: [{'start': cols.Date[cols.Date.length-2], 'style':'dashed'}],
      },
    },
    color: {
      pattern: [COLOR_CONFIRMED, COLOR_ACTIVE, COLOR_RECOVERED, COLOR_DECEASED],
    },
    point: {
      r: 1,
    },
    axis: {
      x: {
        type: "timeseries",
        tick: {
          count: 6,
          format: (x) => {
            if (isNaN(x)) {
              return "";
            }
            const xDate = Date.parse(x);
            return dateFormat(xDate, "MMM d", {
              locale: dateLocale,
              addSuffix: true,
            });
          },
        },
      },
      y: {
        padding: 0,
        max: scale.max,
        tick: {
          values: scale.ticks,
          format: formatNumber,
        },
      },
    },
    tooltip: {
      format: {
        value: (value, ratio, id, index) => {
          if (index && cols[id][index]) {
            const diff = parseInt(value) - cols[id][index];
            const sign = diff >= 0 ? "+" : "";
            return `${formatNumber(value)} (${sign}${formatNumber(diff)}) ${
              index === cols.Date.length - 2 ? i18next.t("provisional") : ""
            }`;
          } else {
            return formatNumber(value);
          }
        },
      },
    },
    grid: {
      x: {
        show: true,
      },
      y: {
        show: true,
      },
    },
    padding: {
      left: 45,
      right: 10,
      top: 0,
      bottom: 0,
    },
  });
  return trendChart;
};

export default drawTrendChart;
