const fs = require('fs');

// 1. ActivityList.tsx
let al = fs.readFileSync('src/components/sections/activity/ActivityList.tsx', 'utf8');
al = al.replace('text-black flex flex-col', 'text-[#2D221F] flex flex-col');
al = al.replace('font-black mb-12', 'text-editorial font-black mb-12');
al = al.replace('border-black/40', 'border-[#2D221F]/15 hover:border-[#2D221F]/30');
al = al.replace('text-xl sm:text-3xl font-extrabold uppercase', 'text-editorial text-2xl sm:text-4xl uppercase tracking-wider');
al = al.replace('text-xs sm:text-sm uppercase tracking-widest', 'text-swiss text-[10px] sm:text-xs uppercase tracking-[0.3em]');
fs.writeFileSync('src/components/sections/activity/ActivityList.tsx', al);

// 2. ActivityDetail.tsx
let ad = fs.readFileSync('src/components/sections/activity/ActivityDetail.tsx', 'utf8');
ad = ad.replace(/bg-black/g, 'bg-[#2D221F]');
ad = ad.replace(/from-black/g, 'from-[#2D221F]');
ad = ad.replace(/via-black/g, 'via-[#2D221F]');
ad = ad.replace(/font-extrabold/g, 'text-editorial font-black');
ad = ad.replace(/text-white\/60/g, 'text-[#f5f4f0]/60');
ad = ad.replace(/text-white\/80/g, 'text-[#f5f4f0]/80');
ad = ad.replace(/text-white/g, 'text-[#f5f4f0]');
ad = ad.replace(/border-white/g, 'border-[#f5f4f0]');
fs.writeFileSync('src/components/sections/activity/ActivityDetail.tsx', ad);

// 3. PlaceDetail.tsx
let pd = fs.readFileSync('src/components/sections/activity/PlaceDetail.tsx', 'utf8');
pd = pd.replace(/bg-\[#0a0a0a\]/g, 'bg-[#2D221F]');
pd = pd.replace(/bg-black/g, 'bg-[#2D221F]');
pd = pd.replace(/#0a0a0a/g, '#2D221F');
pd = pd.split('rgba(10,10,10,').join('rgba(45,34,31,'); 
pd = pd.replace(/text-white\/70/g, 'text-[#f5f4f0]/70');
pd = pd.replace(/text-white\/80/g, 'text-[#f5f4f0]/80');
pd = pd.replace(/text-white/g, 'text-[#f5f4f0]');
pd = pd.replace(/border-white\/20/g, 'border-[#f5f4f0]/20');
pd = pd.replace(/border-white/g, 'border-[#f5f4f0]');
pd = pd.replace(/font-bold uppercase/g, 'text-editorial font-black uppercase');
pd = pd.replace(/bg-zinc-900/g, 'bg-[#2D221F]');
fs.writeFileSync('src/components/sections/activity/PlaceDetail.tsx', pd);

console.log('Styles updated properly');
