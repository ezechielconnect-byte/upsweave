import fs from 'fs';

const filePath = './src/i18n.ts';
let content = fs.readFileSync(filePath, 'utf-8');

const additions = {
  FR: {
    "Maçonnerie": "Maçonnerie",
    "Carrelage": "Carrelage",
    "Montage vidéo": "Montage vidéo",
    "Programmation": "Programmation"
  },
  EN: {
    "Maçonnerie": "Masonry",
    "Carrelage": "Tiling",
    "Montage vidéo": "Video Editing",
    "Programmation": "Programming"
  },
  ES: {
    "Maçonnerie": "Albañilería",
    "Carrelage": "Alicatado",
    "Montage vidéo": "Edición de video",
    "Programmation": "Programación"
  },
  DE: {
    "Maçonnerie": "Mauerwerk",
    "Carrelage": "Fliesenlegen",
    "Montage vidéo": "Videobearbeitung",
    "Programmation": "Programmierung"
  },
  IT: {
    "Maçonnerie": "Muratura",
    "Carrelage": "Piastrellatura",
    "Montage vidéo": "Montaggio video",
    "Programmation": "Programmazione"
  },
  PT: {
    "Maçonnerie": "Alvenaria",
    "Carrelage": "Azulejaria",
    "Montage vidéo": "Edição de vídeo",
    "Programmation": "Programação"
  },
  AR: {
    "Maçonnerie": "بناء",
    "Carrelage": "تبليط",
    "Montage vidéo": "تحرير الفيديو",
    "Programmation": "برمجة"
  },
  ZH: {
    "Maçonnerie": "砖石工程",
    "Carrelage": "瓷砖",
    "Montage vidéo": "视频编辑",
    "Programmation": "编程"
  }
};

for (const [lang, translations] of Object.entries(additions)) {
  const langBlockRegex = new RegExp(`(${lang}:\\s*{\\s*translation:\\s*{)([\\s\\S]*?)(}\\s*})`);
  content = content.replace(langBlockRegex, (match, p1, p2, p3) => {
    let newEntries = p2;
    for (const [key, value] of Object.entries(translations)) {
      if (!newEntries.includes('"' + key + '"')) {
        newEntries += '      "' + key + '": "' + value + '",\n';
      }
    }
    return p1 + newEntries + p3;
  });
}

fs.writeFileSync(filePath, content);
