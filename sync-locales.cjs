const fs = require('fs');
const path = require('path');

const LOCALES_DIR = '/home/finny/projects/malang/src/locales';
const LANGUAGES = ['id', 'zh', 'ja', 'ko', 'nl', 'de', 'ru', 'es'];

// Old multiline keys that were split into separate keys
const REMOVED_KEYS = [
  'planner.teaser.cta',
  'tech.timeline.title',
  'tech.hero.title',
  'tech.future.title',
  'tech.closing.title',
  'hero.intro.title',
  'hero.explorer.title',
  'tech.creative.title',
];

// Read English source as reference
const enPath = path.join(LOCALES_DIR, 'en', 'translation.json');
const enData = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

for (const lang of LANGUAGES) {
  const filePath = path.join(LOCALES_DIR, lang, 'translation.json');
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping missing: ${lang}`);
    continue;
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (e) {
    console.log(`Error parsing ${lang}: ${e.message}`);
    continue;
  }
  
  // Remove old multiline keys
  let removed = 0;
  for (const key of REMOVED_KEYS) {
    if (key in data) {
      delete data[key];
      removed++;
    }
  }
  if (removed > 0) {
    console.log(`${lang}: Removed ${removed} old keys`);
  }
  
  // Add new split keys from EN that might be missing
  const newKeys = Object.keys(enData).filter(k => !(k in data));
  if (newKeys.length > 0) {
    console.log(`${lang}: Adding ${newKeys.length} missing keys (from EN fallback)`);
    for (const key of newKeys) {
      data[key] = enData[key];
    }
  } else {
    console.log(`${lang}: All keys present`);
  }
  
  // Write back
  const sorted = {};
  Object.keys(data).sort().forEach(k => { sorted[k] = data[k]; });
  fs.writeFileSync(filePath, JSON.stringify(sorted, null, 2) + '\n');
}

console.log('\nDone! All locale files synced.');
