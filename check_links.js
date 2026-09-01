const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const routes = ["/", "/about", "/manufacturing", "/diamonds", "/services", "/global-reach", "/responsibility", "/leadership", "/contact", "/privacy", "/terms"];
  
  // Attach console listener once
  page.on("console", msg => {
    if (msg.type() === "error" || msg.type() === "warning") {
      console.log(`[${msg.type().toUpperCase()}] ${msg.text()}`);
    }
  });

  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    const response = await page.goto(url, { waitUntil: "networkidle2" });
    const status = response.status();
    console.log(`\nRoute: ${route} (Status: ${status})`);
    
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("a")).map(a => ({
        text: a.innerText.trim().replace(/\n/g, " "),
        href: a.getAttribute("href")
      }));
    });
    
    const hashLinks = links.filter(l => l.href === "#");
    console.log(`Found ${hashLinks.length} links pointing to "#"`);
    if (hashLinks.length > 0) {
      hashLinks.forEach(l => console.log(`  - Text: "${l.text}"`));
    }
  }
  
  await browser.close();
})();
