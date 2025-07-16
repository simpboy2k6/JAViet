// đây là file để lưu trữ hàm

const printname= (req,res)=>{
    const name=req.query.name;
    res.render('try',{name});
}
const getname = (req,res)=>{
    res.render('try');
}
module.exports= {
    printname,                  // export kiểu object
    getname
}