const fs = require('fs');
const path = require('path');

fs.copyFileSync(path.join(__dirname,'404.html'), path.join(__dirname,'dist','404.html'));