import { theme } from '@refract-ui/sc';

const defaultTheme = theme({
    colors: [
        primary: {
            yellow: '#FEF600'
        },
        neutral: {
            gray: '#3A3A3A',
            white: '#FFFFFF',
            black: '#000000'
        }
    ],
    typography: {
        h1: {
            size: 6,
            lineHeight: 5.689375
        },
        h2: {
            size: 3.75,
            lineHeight: 3.8125
        },
        h3: {
            size: 2.8125,
            lineHeight: 3
        },
        bodyBold: {
            size: 1.5,
            lineHeight: 1.5625,
            weight: 700
        },
        body: {
            size: 1.5,
            lineHeight: 1.5625
        }
    }
});

export type RefractTheme = typeof defaultTheme;

export default defaultTheme;
