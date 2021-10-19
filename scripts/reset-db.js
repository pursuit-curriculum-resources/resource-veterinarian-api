const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "data", "backup.json");
const dest = path.join(__dirname, "..", "data", "db.json");
fs.copyFileSync(src, dest);
