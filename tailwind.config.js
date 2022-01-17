module.exports = {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '320px',
      sm: '641px',
      md: '768px',
      lg: '1025px',
      xl: '1281px',
      // '2xl': '1537px'
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
      red: '#ff0000',
      green: '#3cff00',
      orange: '#FF6000',
      orange1: '#FF6100',
      gray: '#EEEEEE',
      gray1: '#A0AEC0',
      gray2: '#888888',
      gray3: '#545454',
      gray4: '#5E5E5E',
      gray5: '#E2E2E2',
      gray6: '#9C9C9C',
      gray7: '#959595',
      gray8: '#F8F7F4',
      gray9: '#282828',
      gray10: '#131313',
      red1: '#E81F1F',
      lightgray: '#1A202C',
      textgray: '#718096',
      blue: '#68ced0',
      borderColor: '#2C2C2C',
      black: '#141414',
      'borderColor-2': '#979797',
      inputBorder: '#6b7280',
      customColors: {
        100: '#1d1e1e',
        200: '#F0F0F0',
        300: '#088dce',
        blueError: '#1d4ed8',
        greenError: '#047857',
        redError: '#dc2626',
        yellowError: '#facc15',
      },
    },
    zIndex: {
      1: -1,
      0: 0,
      10: 10,
      20: 20,
      25: 25,
      30: 30,
      40: 40,
      50: 50,
      75: 75,
      99: 99,
      100: 100,
      999: 999,
      9999: '9999',
      auto: 'auto',
      modal: '999999',
      options: '9999999',
    },
    opacity: {
      0: '0',
      25: '.25',
      75: '.75',
      10: '.1',
      20: '.2',
      30: '.3',
      40: '.4',
      50: '.5',
      60: '.6',
      70: '.7',
      80: '.8',
      90: '.9',
      100: '1',
    },
    extend: {
      width: {
        '45%': '45%',
      },
      fontSize: {
        '1sm': '13px',
        '1xs': '11px',
        '2xs': '10px',
        '3xs': '9px',
        '4xs': '8px',
        md: '15px',
        '2.5xl': '1.75rem',
      },
      borderWidth: {
        3: '3px',
      },
      color: {},
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    // ...
    placeholderColor: false,
    animation: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropFilter: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    backgroundBlendMode: false,
    backgroundOrigin: false,
    blur: false,
    boxDecorationBreak: false,
    brightness: false,
    caretColor: false,
    clear: false,
    contrast: false,
    divideOpacity: false,
    divideStyle: false,
    // filter: false,
    float: false,
    fontVariantNumeric: false,
    gradientColorStops: false,
    grayscale: false,
    hueRotate: false,
    isolation: false,
    mixBlendMode: false,
    overscrollBehavior: false,
    placeItems: false,
    placeSelf: false,
    saturate: false,
    sepia: false,
    skew: false,
    stroke: false,
    strokeWidth: false,
    tableLayout: false,
  },
  plugins: [require('tailwindcss'), require('@tailwindcss/line-clamp')],
};
