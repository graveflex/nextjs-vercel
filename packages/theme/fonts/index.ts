import localFont from 'next/font/local';

export const PPFragment = localFont({
  src: [
    {
      path: './PPFragment/PPFragment-GlareLight.otf',
      weight: '300'
    },
    {
      path: './PPFragment/PPFragment-GlareLightItalic.otf',
      weight: '300',
      style: 'italic'
    },
    {
      path: './PPFragment/PPFragment-GlareRegular.otf',
      weight: '400'
    },
    {
      path: './PPFragment/PPFragment-GlareRegularItalic.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './PPFragment/PPFragment-GlareExtraBold.otf',
      weight: '800'
    },
    {
      path: './PPFragment/PPFragment-GlareExtraBoldItalic.otf',
      weight: '800',
      style: 'italic'
    }
  ]
});
