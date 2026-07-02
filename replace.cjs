const fs = require('fs');
const path = require('path');

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

    // Root dark mode backgrounds
    content = content.replace(/bg-\[\#050505\]/g, 'bg-slate-50');
    content = content.replace(/bg-\[\#0a0a0f\]/g, 'bg-slate-100');
    content = content.replace(/bg-\[\#050508\]/g, 'bg-slate-50');
    
    // Specifically handle the dark mode "bg-black" to "bg-white" but not inside strings like "text-black"
    content = content.replace(/bg-black/g, 'bg-white');

    // General text
    content = content.replace(/text-white/g, 'text-slate-900');
    
    // borders
    content = content.replace(/border-white\/10/g, 'border-slate-200');
    content = content.replace(/border-white\/20/g, 'border-slate-300');
    content = content.replace(/border-white\/5/g, 'border-slate-200');
    content = content.replace(/border-gray-800/g, 'border-slate-200');
    content = content.replace(/border-gray-700/g, 'border-slate-200');

    // subtle backgrounds
    content = content.replace(/bg-white\/5\b/g, 'bg-white');
    content = content.replace(/bg-white\/10\b/g, 'bg-slate-100');
    content = content.replace(/bg-white\/20\b/g, 'bg-slate-200');
    content = content.replace(/hover:bg-white\/5\b/g, 'hover:bg-slate-50');
    content = content.replace(/hover:bg-white\/10\b/g, 'hover:bg-slate-100');
    content = content.replace(/hover:bg-white\/20\b/g, 'hover:bg-slate-200');

    // dark transparent backgrounds
    content = content.replace(/bg-black\/20/g, 'bg-slate-200\/50');
    content = content.replace(/bg-black\/40/g, 'bg-slate-200\/80');
    content = content.replace(/bg-white\/40/g, 'bg-slate-200\/50'); // the replace bg-black above might have created this
    content = content.replace(/bg-black\/50/g, 'bg-slate-200\/80');
    content = content.replace(/bg-black\/60/g, 'bg-slate-300\/80');
    content = content.replace(/bg-black\/80/g, 'bg-slate-700\/80');
    
    // Fixing bg-white/X -> bg-slate-200/X from previous bg-black replacement
    content = content.replace(/bg-white\/20/g, 'bg-slate-200');
    content = content.replace(/bg-white\/40/g, 'bg-slate-200');
    content = content.replace(/bg-white\/50/g, 'bg-slate-300');
    content = content.replace(/bg-white\/60/g, 'bg-slate-300');
    content = content.replace(/bg-white\/80/g, 'bg-slate-700');

    // text colors
    content = content.replace(/text-gray-400/g, 'text-slate-600');
    content = content.replace(/text-gray-300/g, 'text-slate-700');
    content = content.replace(/text-gray-500/g, 'text-slate-500');

    // Inverse original primary buttons
    content = content.replace(/bg-white text-black/g, 'bg-blue-600 text-white');

    // Fix navbar transparent text
    content = content.replace(/text-slate-900 transition-colors hover:text-blue-400/g, 'text-slate-600 transition-colors hover:text-blue-600');
    
    // Fix gradients
    content = content.replace(/from-blue-900\/20/g, 'from-blue-100/50');
    content = content.replace(/to-indigo-900\/20/g, 'to-indigo-100/50');

    // Restore text-white for buttons with bg-blue-600
    // A bit hacky but works for most tailwind strings. Since we can't do full AST easily, we do basic string fixes.
    content = content.replace(/bg-blue-600 text-slate-900/g, 'bg-blue-600 text-white');
    content = content.replace(/bg-blue-[0-9]{3} hover:bg-blue-[0-9]{3} text-slate-900/g, 'bg-blue-600 hover:bg-blue-700 text-white');

    fs.writeFileSync(file, content);
});

console.log("Done replacing colors.");
