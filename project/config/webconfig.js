// cái này để có thiết lập định dạng của web

const path = require('path');

console.log('file:',path.join(__dirname,'../engine_ejs'));
const engineconfig = (app)=>{
    app.set('view engine','ejs');
    app.set('views',path.join(__dirname,'../engine_ejs'));
}

module.exports = engineconfig;//exports phải có 's'