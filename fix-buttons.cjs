const fs = require('fs');
function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Fix hover color on blue buttons
    content = content.replace(/bg-blue-600(.*?)hover:bg-gray-100/g, 'bg-blue-600$1hover:bg-blue-700');
    content = content.replace(/shadow-white\/([0-9]+)/g, 'shadow-blue-900\/5');
    
    // Some minor border colors that might have been missed
    content = content.replace(/border-t-white\/10/g, 'border-t-slate-200');
    content = content.replace(/border-b-white\/10/g, 'border-b-slate-200');
    content = content.replace(/md:border-white\/10/g, 'md:border-slate-200');
    
    // Check for weird text colors on light backgrounds
    // bg-white text-white -> bg-white text-slate-900 ? No wait, don't want to break icons if they manually set text-white on transparent
    
    // We didn't change border-white/5 in all cases due to exact word boundary.
    content = content.replace(/border-white\/5/g, 'border-slate-200');

    fs.writeFileSync(file, content);
});
console.log('Fixed buttons');
