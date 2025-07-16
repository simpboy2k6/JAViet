// cái này sẽ chạy server web của ta

const express = require('express');
const {printname,getname } = require('../control/webcontrol.js');// đây là nó lấy function dạng object

const router= express.Router();

router.get('/',getname);
router.get('/ab',printname);

module.exports= router;
