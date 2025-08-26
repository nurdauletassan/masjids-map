export const createCustomIcon = (photoUrl, name) => {
  const imageSource = photoUrl.startsWith('data:') ? photoUrl : photoUrl;
  
  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg width="64" height="80" viewBox="0 0 64 80" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="rgba(58, 47, 15, 0.20)"/>
          </filter>
        </defs>
        
        <rect x="0" y="0" width="64" height="64" rx="10" fill="white" filter="url(#shadow)"/>
        <rect x="3" y="3" width="58" height="58" rx="7" fill="url(#photo)" stroke="#FFF" stroke-width="3"/>
        
        <rect x="8" y="68" width="48" height="12" rx="6" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>
        <text x="32" y="76" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="600" fill="#374151">${name}</text>
        
        <defs>
          <pattern id="photo" patternUnits="objectBoundingBox" width="1" height="1">
            <image href="${imageSource}" width="58" height="58" preserveAspectRatio="xMidYMid slice"/>
          </pattern>
        </defs>
      </svg>
    `)}`,
    scaledSize: { width: 64, height: 80 },
    anchor: { x: 32, y: 64 }
  };
};
