
const express = require('express');


    const app = express();
app.set('view engine', 'ejs');
app.set('views','./views');
const hoursMid = (req,res,next) => {
 

var currentdate = new Date(),
    currentday = currentdate.getDay(),
    
    currenthour = currentdate.getHours();

if (currentday <=5 && currentday >=1 && currenthour >=9 && currenthour <= 17 ) {
 next(); 
} 
else 
 {  res.render('closed')}

}

app.use(hoursMid);


app.get('/home',(req,res) =>{
    res.render('home')
});

app.get('/services',(req,res) =>{
    res.render('services')
});

app.get('/contact',(req,res) =>{
    res.render('contact')
})

app.get('/*',(req,res) =>{
    res.render('404')
})

const port = 3000 ;

app.listen(port,()=>{console.log('running at 3000')});
