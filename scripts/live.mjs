import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:900} });
const p = await ctx.newPage();
const errs=[];
p.on('response', r=>{ if(r.status()>=400) errs.push(r.status()+" "+r.url()); });
const base="https://kenikiara.github.io/kendesigners.com";
await p.goto(base+"/", { waitUntil:"networkidle", timeout:45000 });
for (let y=0;y<=6500;y+=500){ await p.evaluate(Y=>scrollTo(0,Y),y); await p.waitForTimeout(180); }
await p.evaluate(()=>scrollTo(0,0)); await p.waitForTimeout(800);
const info = await p.evaluate(()=>({
  title:document.title,
  h1:document.querySelector('h1')?.innerText,
  navLinks:[...document.querySelectorAll('header a')].length,
  cards:document.querySelectorAll('[data-card]').length,
  imgs:[...document.querySelectorAll('img')].map(i=>({src:i.currentSrc||i.src, ok:i.complete && i.naturalWidth>0})),
}));
console.log("TITLE:", info.title);
console.log("H1:", info.h1);
console.log("nav links:", info.navLinks, "| work cards:", info.cards);
console.log("images loaded:", info.imgs.filter(i=>i.ok).length+"/"+info.imgs.length);
info.imgs.filter(i=>!i.ok).forEach(i=>console.log("  BROKEN IMG:", i.src));
console.log("HTTP errors:", errs.length); errs.slice(0,10).forEach(e=>console.log("  "+e));
await b.close();
