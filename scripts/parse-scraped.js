const fs = require('fs');
const path = require('path');

const scrapedDir = path.join(__dirname, '../scraped');
const outputFile = path.join(__dirname, '../lib/data-generated.ts');

const files = fs.readdirSync(scrapedDir).filter(f => f.endsWith('.html'));

const allMaterials = [];

files.forEach(file => {
  const filePath = path.join(scrapedDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract MP3 links
  const mp3Regex = /href="(http[^"]+\.mp3[^"]*)"/g;
  let match;
  while ((match = mp3Regex.exec(content)) !== null) {
    const url = match[1].replace(/%20/g, ' ');
    const title = url.split('/').pop().replace(/\.mp3$/i, '');
    allMaterials.push({
      type: 'audio',
      title: title,
      url: url,
      category: file.replace('.html', '')
    });
  }

  // Extract PDF links
  const pdfRegex = /href="(http[^"]+\.pdf[^"]*)"/g;
  while ((match = pdfRegex.exec(content)) !== null) {
    const url = match[1].replace(/%20/g, ' ');
    const title = url.split('/').pop().replace(/\.pdf$/i, '');
    allMaterials.push({
      type: 'pdf',
      title: title,
      url: url,
      category: file.replace('.html', '')
    });
  }

  // Extract DOC links
  const docRegex = /href="([^"]+\.doc[^"]*)"/g;
  while ((match = docRegex.exec(content)) !== null) {
    const url = match[1].replace(/%20/g, ' ');
    if (!url.startsWith('http')) continue; // Skip relative paths
    const title = url.split('/').pop().replace(/\.doc$/i, '');
    allMaterials.push({
      type: 'doc',
      title: title,
      url: url,
      category: file.replace('.html', '')
    });
  }

  // Extract AVI/DivX links
  const videoRegex = /href="(http[^"]+\.(avi|divx)[^"]*)"/gi;
  while ((match = videoRegex.exec(content)) !== null) {
    const url = match[1].replace(/%20/g, ' ');
    const title = url.split('/').pop().replace(/\.(avi|divx)$/i, '');
    allMaterials.push({
      type: 'video',
      title: title,
      url: url,
      category: file.replace('.html', '')
    });
  }
});

// Group by category
const categories = {};
allMaterials.forEach(item => {
  if (!categories[item.category]) {
    categories[item.category] = [];
  }
  categories[item.category].push(item);
});

// Generate TypeScript with JSON for proper escaping
const tsContent = `// Auto-generated from scraped HTML files
export interface MaterialItem {
  type: 'audio' | 'video' | 'pdf' | 'doc';
  title: string;
  url: string;
  category: string;
}

export const allMaterials: MaterialItem[] = ${JSON.stringify(allMaterials, null, 2)};

export const materialsByCategory: Record<string, MaterialItem[]> = {
${Object.keys(categories).map(cat => `  '${cat}': allMaterials.filter(m => m.category === '${cat}'),`).join('\n')}
};
`;

fs.writeFileSync(outputFile, tsContent);
console.log(`Generated ${outputFile} with ${allMaterials.length} materials`);
