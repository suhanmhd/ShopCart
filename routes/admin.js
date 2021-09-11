var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"IPHONE 11",
      category:"mobile",
      description:"this is nice phone",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYue3RyyVpGkcVeFevv_kx1FHUGxJU1QSDLQ&usqp=CAU"
    },
    {
      name:"IPHONE 11",
      category:"mobile",
      description:"this is nice phone",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYue3RyyVpGkcVeFevv_kx1FHUGxJU1QSDLQ&usqp=CAU"
    },
    {
      name:"IPHONE 11",
      category:"mobile",
      description:"this is nice phone",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYue3RyyVpGkcVeFevv_kx1FHUGxJU1QSDLQ&usqp=CAU"
    },
    {
      name:"IPHONE 11",
      category:"mobile",
      description:"this is nice phone",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYue3RyyVpGkcVeFevv_kx1FHUGxJU1QSDLQ&usqp=CAU"
    },
    
    
  ]

  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')

})
router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.image);
})

module.exports = router;
