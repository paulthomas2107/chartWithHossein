const colorPrimary = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-primary')
  .trim();

const colorLabel = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-label')
  .trim();

const fontFamily = getComputedStyle(document.documentElement)
  .getPropertyValue('--font-family')
  .trim();

const defaultOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    width: '100%',
    height: 180,
    offsetY: 18,
  },
  dataLabels: {
    enabled: false,
  },
};

let barOptions = {
  ...defaultOptions,
  chart: {
    ...defaultOptions.chart,
    type: 'area',
  },
  tooltip: {
    enabled: true,
    style: {
      fontFamily: fontFamily,
    },
    y: {
      formatter: (value) => `${value}K`,
    },
  },
  series: [
    {
      name: 'Views',
      data: [15, 50, 18, 90, 30, 65],
    },
  ],
};

let chart = new ApexCharts(document.querySelector('.area-chart'), barOptions);

chart.render();
