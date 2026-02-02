const sharp = require('sharp');
const items = [
  { svg: 'images/og-home.svg', png: 'images/og-home.png' },
  { svg: 'images/og-rental-system.svg', png: 'images/og-rental-system.png' },
  { svg: 'images/og-intelitask.svg', png: 'images/og-intelitask.png' }
];

(async function(){
  try{
    for(const it of items){
      console.log('Generating', it.png, 'from', it.svg);
      await sharp(it.svg)
        .resize(1200, 630, { fit: 'cover' })
        .png({ quality: 90 })
        .toFile(it.png);
    }
    console.log('All images generated.');
  }catch(err){
    console.error('Error generating images:', err);
    process.exit(1);
  }
})();