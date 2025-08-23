export async function preloadFonts() {
  const fonts = [
    new FontFace('Vrdznagir', 'url(/font/Vrdznagir.woff2) format("woff2")', { style: 'normal', weight: '400' }),
    new FontFace('family-home', 'url(/font/family-home.woff2) format("woff2")', { style: 'normal', weight: '400' }),
  ];

  await Promise.all(fonts.map(font => font.load().then(loadedFont => document.fonts.add(loadedFont))));
}
