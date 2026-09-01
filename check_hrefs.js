
const fs = require("fs");
const path = require("path");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith(".tsx")) {
      results.push(file);
    }
  });
  return results;
}

const files = [...walk("app"), ...walk("components")];
files.forEach(file => {
  const content = fs.readFileSync(file, "utf8");
  const matches = content.match(/href="([^"]+)"/g);
  if (matches) {
    const hashLinks = matches.filter(m => m.includes("href=\"#\""));
    if (hashLinks.length > 0) {
      console.log(`\nFile: ${file}`);
      console.log(`Found ${hashLinks.length} placeholder links (href="#")`);
    }
  }
});

