import * as c3 from "c3";
import i18next from "i18next";
import format from "date-fns/format";

import { LOCALES, maybeIntlNumberFormat } from "../../i18n";
import { niceScale } from "../../data/scaling";

import {
  COLOR_TESTED,
  COLOR_TESTED_DAILY,
  DEFAULT_CHART_TIME_PERIOD,
  COLOR_CONFIRMED,
  CHART_TITLE_PADDING,
} from "../../data/constants";

const drawDailyIncreaseChart = (
  trends,
  dailyIncreaseChart,
  lang,
  timePeriod = DEFAULT_CHART_TIME_PERIOD
) => {
  const dateLocale = LOCALES[lang];
  const formatNumber = maybeIntlNumberFormat(lang);

  const cols = {
    Date: ["Date"],
    Confirmed: ["Confirmed"],
    ConfirmedAvg: ["ConfirmedAvg"],
  };

  let startIndex = timePeriod > 0 ? trends.length - timePeriod : 0;

  if (startIndex < 0) {
    startIndex = 0;
  }

  for (let i = startIndex; i < trends.length; i++) {
    const row = trends[i];

    cols.Date.push(row.date);
    cols.Confirmed.push(row.confirmed);
    if (i < trends.length - 1) {
      // Omit the last data point since it's provisional
      // and will always point downwards for the average.
      cols.ConfirmedAvg.push(row.confirmedAvg7d);
    }
  }

  const scale = niceScale(
    cols.Confirmed.slice(1).concat(cols.ConfirmedAvg.slice(1)),
    5
  );

  if (dailyIncreaseChart) {
    dailyIncreaseChart.destroy();
  }

  dailyIncreaseChart = c3.generate({
    bindto: "#daily-increase-chart",
    title: {
      show: false,
      text: i18next.t("new-cases-by-day"),
      position: "top-left", // top-left, top-center and top-right
      padding: CHART_TITLE_PADDING,
    },
    data: {
      x: "Date",
      colors: {
        Confirmed: (color, d) => {
          if (d && d.index === cols.Date.length - 2) {
            return COLOR_TESTED_DAILY;
          } else {
            return COLOR_TESTED;
          }
        },
        ConfirmedAvg: (color, d) => {
          return COLOR_CONFIRMED;
        },
      },
      columns: [cols.Date, cols.Confirmed, cols.ConfirmedAvg],
      names: {
        Confirmed: i18next.t("daily"),
        ConfirmedAvg: i18next.t("7-day-average"),
      },
      type: "bar",
      types: {
        Confirmed: "bar",
        ConfirmedAvg: "spline",
      },
      regions: {
        Confirmed: [
          { start: cols.Date[cols.Date.length - 2], style: "dashed" },
        ],
      },
    },
    point: {
      r: 0,
    },
    bar: {
      width: {
        ratio: 0.8,
      },
    },
    axis: {
      x: {
        type: "timeseries",
        tick: {
          culling: { max: 6 },
          format: (x) => {
            if (isNaN(x)) {
              return "";
            }
            const xDate = Date.parse(x);
            return format(xDate, "MMM d", {
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
          return `${formatNumber(value)} ${
            index === cols.Date.length - 2 ? i18next.t("provisional") : ""
          }`;
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
      left: 40,
      right: 10,
      top: 0,
      bottom: 0,
    },
  });
  return dailyIncreaseChart;
};

export default drawDailyIncreaseChart;
