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
    
}
