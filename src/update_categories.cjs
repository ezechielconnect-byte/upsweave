const fs = require('fs');

const catTranslations = {
  'Éducation': ['Éducation', 'Education', 'Educación', 'Bildung', 'Educazione', 'Educação', 'تعليم', '教育'],
  'Artisanat': ['Artisanat', 'Crafts', 'Artesanía', 'Handwerk', 'Artigianato', 'Artesanato', 'حرف يدوية', '工艺'],
  'Informatique': ['Informatique', 'IT Support', 'Informática', 'IT', 'Informatica', 'Informática', 'معلوماتية', '信息技术'],
  'Réparation': ['Réparation', 'Repair', 'Reparación', 'Reparatur', 'Riparazione', 'Reparação', 'إصلاح', '维修'],
  'Beauté': ['Beauté', 'Beauty', 'Belleza', 'Schönheit', 'Bellezza', 'Beleza', 'جمال', '美容'],
  'Transport': ['Transport', 'Transport', 'Transporte', 'Transport', 'Trasporto', 'Transporte', 'نقل', '运输'],
  'Bien-être': ['Bien-être', 'Wellness', 'Bienestar', 'Wellness', 'Benessere', 'Bem-estar', 'عافية', '健康'],
  'Événementiel': ['Événementiel', 'Events', 'Eventos', 'Veranstaltungen', 'Eventi', 'Eventos', 'فعاليات', '活动'],
  'Déménagement': ['Déménagement', 'Moving', 'Mudanza', 'Umzug', 'Trasloco', 'Mudança', 'نقل عفش', '搬家'],
  'Nettoyage': ['Nettoyage', 'Cleaning', 'Limpieza', 'Reinigung', 'Pulizia', 'Limpeza', 'تنظيف', '清洁'],
  'Bricolage': ['Bricolage', 'DIY/Handyman', 'Bricolaje', 'Heimwerken', 'Fai da te', 'Bricolage', 'أعمال يدوية', 'DIY'],
  'Photographie': ['Photographie', 'Photography', 'Fotografía', 'Fotografie', 'Fotografia', 'Fotografia', 'تصوير', '摄影'],
  'Architecture': ['Architecture', 'Architecture', 'Arquitectura', 'Architektur', 'Architettura', 'Arquitetura', 'هندسة معمارية', '建筑'],
  'Jardinage': ['Jardinage', 'Gardening', 'Jardinería', 'Gartenarbeit', 'Giardinaggio', 'Jardinagem', 'بستنة', '园艺'],
  'Menuiserie': ['Menuiserie', 'Carpentry', 'Carpintería', 'Zimmerei', 'Falegnameria', 'Carpintaria', 'نجارة', '木工'],
  'Décoration': ['Décoration', 'Decoration', 'Decoración', 'Dekoration', 'Decorazione', 'Decoração', 'ديكور', '装饰'],
  'Mécanique': ['Mécanique', 'Mechanics', 'Mecánica', 'Mechanik', 'Meccanica', 'Mecânica', 'ميكانيكا', '机械'],
  'Soutien scolaire': ['Soutien scolaire', 'Tutoring', 'Apoyo escolar', 'Nachhilfe', 'Ripetizioni', 'Apoio escolar', 'دروس تقوية', '家教'],
  'Rédaction': ['Rédaction', 'Writing', 'Redacción', 'Schreiben', 'Scrittura', 'Redação', 'كتابة', '写作'],
  'Vidéo': ['Vidéo', 'Video', 'Vídeo', 'Video', 'Video', 'Vídeo', 'فيديو', '视频'],
  'Sécurité': ['Sécurité', 'Security', 'Seguridad', 'Sicherheit', 'Sicurezza', 'Segurança', 'أمن', '安全'],
  'Plomberie': ['Plomberie', 'Plumbing', 'Fontanería', 'Klempnerei', 'Idraulica', 'Canalização', 'سباكة', '管道'],
  'Électricité': ['Électricité', 'Electrical', 'Electricidad', 'Elektrik', 'Elettricità', 'Eletricidade', 'كهرباء', '电气'],
  'Design': ['Design', 'Design', 'Diseño', 'Design', 'Design', 'Design', 'تصميم', '设计'],
  'Marketing': ['Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing', 'تسويق', '营销'],
  'Traduction': ['Traduction', 'Translation', 'Traducción', 'Übersetzung', 'Traduzione', 'Tradução', 'ترجمة', '翻译'],
  'Coaching': ['Coaching', 'Coaching', 'Coaching', 'Coaching', 'Coaching', 'Coaching', 'تدريب', '辅导'],
  'Garde d\'enfants': ['Garde d\'enfants', 'Babysitting', 'Cuidado de niños', 'Kinderbetreuung', 'Babysitter', 'Babá', 'رعاية أطفال', '保姆'],
  'Musique': ['Musique', 'Music', 'Música', 'Musik', 'Musica', 'Música', 'موسيقى', '音乐'],
  'Comptabilité': ['Comptabilité', 'Accounting', 'Contabilidad', 'Buchhaltung', 'Contabilità', 'Contabilidade', 'محاسبة', '会计'],
  'Droit': ['Droit', 'Law', 'Derecho', 'Recht', 'Diritto', 'Direito', 'قانون', '法律'],
  'Cuisine': ['Cuisine', 'Cooking', 'Cocina', 'Kochen', 'Cucina', 'Cozinha', 'طبخ', '烹饪'],
  'Sport': ['Sport', 'Sport', 'Deporte', 'Sport', 'Sport', 'Esporte', 'رياضة', '运动'],
  'Coiffure': ['Coiffure', 'Hairdressing', 'Peluquería', 'Friseur', 'Parrucchiere', 'Cabeleireiro', 'تصفيف شعر', '美发'],
  'Garde d\'animaux': ['Garde d\'animaux', 'Pet Sitting', 'Cuidado de mascotas', 'Tierbetreuung', 'Pet sitting', 'Cuidador de animais', 'رعاية حيوانات', '宠物看护'],
  'Massage': ['Massage', 'Massage', 'Masaje', 'Massage', 'Massaggio', 'Massagem', 'مساج', '按摩'],
  'Personal Shopper': ['Personal Shopper', 'Personal Shopper', 'Personal Shopper', 'Personal Shopper', 'Personal Shopper', 'Personal Shopper', 'متسوق شخصي', '私人导购'],
  'Organisation d\'événements': ['Organisation d\'événements', 'Event Planning', 'Organización de eventos', 'Veranstaltungsplanung', 'Organizzazione di eventi', 'Organização de eventos', 'تنظيم فعاليات', '活动组织'],
  'Maquillage': ['Maquillage', 'Makeup', 'Maquillaje', 'Make-up', 'Trucco', 'Maquiagem', 'مكياج', '化妆'],
  'Esthétique': ['Esthétique', 'Aesthetics', 'Estética', 'Ästhetik', 'Estetica', 'Estética', 'تجميل', '美学'],
  'Aide à domicile': ['Aide à domicile', 'Home Care', 'Ayuda a domicilio', 'Haushaltshilfe', 'Assistenza domiciliare', 'Assistência domiciliar', 'مساعدة منزلية', '家庭护理'],
  'Serrurerie': ['Serrurerie', 'Locksmithing', 'Cerrajería', 'Schlosserei', 'Fabbro', 'Chaveiro', 'أقفال', '锁匠'],
  'Peinture': ['Peinture', 'Painting', 'Pintura', 'Malerei', 'Pittura', 'Pintura', 'دهان', '绘画'],
  'Vétérinaire': ['Vétérinaire', 'Veterinary', 'Veterinaria', 'Tierarzt', 'Veterinario', 'Veterinário', 'بيطري', '兽医'],
};

const langs = ['FR', 'EN', 'ES', 'DE', 'IT', 'PT', 'AR', 'ZH'];

let content = fs.readFileSync('src/i18n.ts', 'utf8');

langs.forEach((lang, index) => {
  const translationsToInsert = Object.keys(catTranslations).reduce((acc, key) => {
    acc[key] = catTranslations[key][index];
    return acc;
  }, {});

  const regex = new RegExp(`(${lang}:\\s*\\{\\s*translation:\\s*\\{)([\\s\\S]*?)(\\}\\s*\\})`);
  content = content.replace(regex, (match, prefix, translationKeys, suffix) => {
    let replacedText = translationKeys;
    for (const [key, value] of Object.entries(translationsToInsert)) {
      const k = JSON.stringify(key);
      const v = JSON.stringify(value);
      if (!replacedText.includes(k + ":")) {
        replacedText += `      ${k}: ${v},\n`;
      }
    }
    return prefix + replacedText + suffix;
  });
});

fs.writeFileSync('src/i18n.ts', content, 'utf8');
