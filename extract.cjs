const https = require('https');

https.get('https://www.webdevultra.com/', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    // Extract colors
    const colors = data.match(/#[0-9a-fA-F]{3,6}/g);
    const colorCounts = {};
    if(colors) {
      colors.forEach(c => {
        c = c.toLowerCase();
        colorCounts[c] = (colorCounts[c] || 0) + 1;
      });
      const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]).slice(0, 30);
      console.log('Top colors:', sortedColors);
    }
    
    // Extract fonts
    const fonts = data.match(/https:\/\/fonts\.googleapis\.com\/css[^"']*/g);
    console.log('Fonts:', fonts);
    
    // Extract Next.js classes or styles related to fonts
    const fontClasses = data.match(/font-[a-zA-Z0-9-]+/g);
    const fontClassCounts = {};
    if(fontClasses) {
      fontClasses.forEach(f => {
        fontClassCounts[f] = (fontClassCounts[f] || 0) + 1;
      });
      console.log('Font classes:', Object.entries(fontClassCounts).sort((a,b) => b[1]-a[1]).slice(0, 10));
    }
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
