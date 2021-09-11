var express = require('express');
var router = express.Router();

/* GET home page. */
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
  res.render('index', { products,admin:false});
});

module.exports = router;
