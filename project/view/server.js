const express = require('express');
const path = require('path');
require('dotenv').config();
const app= new express();

const webroute = require('../route/webs'); // lấy function từ file khác ko phải kiểu object
const engineconfig = require('../config/webconfig');

const port= process.env.PORT || 4040;      // cái dấu hoặc này là nếu ko có port thì nó sẽ lấy giá trị 4040

engineconfig(app);
app.use('/',webroute);

app.listen(port,()=>{
    console.log(`Run in link localhost:${port}`);
});