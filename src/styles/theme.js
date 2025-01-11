const COLORS = {
  brown: {
    900: '#3F3F3F',
    700: '#5A4726',
    500: '#BFAE9A',
    300: '#DAC7A7',
  },
  yellow: {
    700: '#D9C48B',
    500: '#F2DB95',
  },
  blue: {
    900: '#1E2D40',
    700: '#203341',
    500: '#596C73',
    300: '#8C9FA6',
  },
  neutral: {
    900: '#000000',
    700: '#404040',
    500: '#919191',
    300: '#E2E2E2',
    100: '#F9F9F9',
    white: 'rgba(255, 255, 255, 1)',
    white20: 'rgba(255, 255, 255, 0.2)',
  },
};

const FONT = {
  family: "'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  size: {
    button: '18px',
    h1: '35px',
    h2: '30px',
    bodyDefault: '15px',
    bodyTitle: '14px',
    cardTitle: '10px',
  },
};

const theme = {
  colors: COLORS,
  font: FONT,
};

export default theme;
