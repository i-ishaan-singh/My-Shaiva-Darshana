const fs = require('fs');
const path = require('path');

var referrencesPath = path.join(__dirname, 'Others','referrences.txt' );
var referrencesOpPath = path.join(__dirname, 'src\\Pages\\Referrences\\assets', 'ref.json' );

var obj = {};

fs.readFileSync(referrencesPath).toString().split('\n').forEach(function(_r){
    _r = _r.trim();
    if(_r){
        obj[_r] = true;
    }
});

fs.writeFileSync(referrencesOpPath, JSON.stringify(obj));