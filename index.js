const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:gYplnE9xK2cc7lIP@cluster0.zdx7hak.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true}).then(function(){
  console.log('Conectou MongoDB')
}).catch(function(err){
  console.log(err.message)
}

)
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));


app.get('/',(req,res)=>{
    
    if(req.query.busca == null){
        res.render('home',{});
    }else{
        res.render('busca',{});
    }

  
});


app.get('/:slug',(req,res)=>{
    //res.send(req.params.slug);
    res.render('single',{});
})



app.listen(5000,()=>{
    console.log('server rodando!');
})