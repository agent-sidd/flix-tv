var express= require('express');
const app =express();
var cors=require('cors');
var path = require('path');
var axios = require('axios');
var ejs = require('ejs');
var url = require('url');
const fs = require('fs');
const bodyParser = require("body-parser");
const { query, response } = require('express');
const querystring = require('querystring');
const { json } = require('body-parser');
var http = require('http');
  app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "x-vsaas-session, x-no-redirect, x-real-ip, rang, Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
var user_agent;
app.use(express.static(path.join(__dirname+'/public')));
app.set('view engine',ejs);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const PORT=process.env.PORT || 3000;
const key = 'f274625ee8526fcb3150182ed7668864'
app.get('/',function(req,res){
   const arr = ["337404","632357","19404","724089","278","238","460465","399566","808023","615457","691179","717192","527774","791373","259693","634528","138843","458576","587807","447332","508442","529203","736069",
   "544401","256040","350312","20453","155","374720","120","121","122","419430","413052","201088","284427","671","672","673","674","675"]
   var max = arr.length;
   var min = 0;
   var r1 = Math.floor(Math.random()*(max-min) + min);
   do{
   var r2 = Math.floor(Math.random()*(max-min) + min);
   }while(r1==r2)
   do{
    var r3 = Math.floor(Math.random()*(max-min) + min);
    
   }  while(r3==r2 && r3==r1)
   do{
    var r4 = Math.floor(Math.random()*(max-min) + min);
   }  while(r4==r2 && r4==r1 && r4==r3)
   do{
    var r5 = Math.floor(Math.random()*(max-min) + min);
   }  while(r5==r4 && r5==r2 && r5==r1 && r5==r3)
   console.log(r1 + " " + r2 + "  " + r3 + " " + r4)

  var bn1 = 'https://api.themoviedb.org/3/movie/'+ arr[r1] +'?api_key='+key+'&append_to_response=recommendations,videos,credits&page=1';
  var bn2 = 'https://api.themoviedb.org/3/movie/'+ arr[r2] +'?api_key='+key+'&append_to_response=recommendations,videos,credits&page=1';
  var bn3 = 'https://api.themoviedb.org/3/movie/'+ arr[r3] +'?api_key='+key+'&append_to_response=recommendations,videos,credits&page=1';
  var bn4 = 'https://api.themoviedb.org/3/movie/'+ arr[r4] +'?api_key='+key+'&append_to_response=recommendations,videos,credits&page=1';
  var bn5 = 'https://api.themoviedb.org/3/movie/'+ arr[r5] +'?api_key='+key+'&append_to_response=recommendations,videos,credits&page=1';
  var trending = 'https://api.themoviedb.org/3/trending/movies/week?api_key='+key+'&page=1';
  var popular = 'https://api.themoviedb.org/3/movie/popular?api_key='+key+'&page=1';
  var action ='https://api.themoviedb.org/3/discover/movie?api_key='+key+'&with_genres=28&page=1' ;
  var anime = 'https://api.themoviedb.org/3/discover/movie/?api_key='+key+'&with_genres=16&page=1';
  var scifi = 'https://api.themoviedb.org/3/discover/movie/?api_key='+key+'&with_genres=878&page=1';
  var comedy = 'https://api.themoviedb.org/3/discover/movie/?api_key='+key+'&with_genres=35&page=1';
  var latest_series = 'https://api.themoviedb.org/3/tv/popular?api_key='+key+'&page=1';
  var doc = 'https://api.themoviedb.org/3/discover/movie/?api_key='+key+'&with_genres=99&page=1';
  var horror = 'https://api.themoviedb.org/3/discover/movie/?api_key='+key+'&with_genres=27&page=1';
  console.log(anime)
  var bn1 = axios.get(bn1);
  var bn2 = axios.get(bn2); 
  var bn3 = axios.get(bn3); 
  var  bn4= axios.get(bn4);
  var  bn5= axios.get(bn5);
  var trending = axios.get(trending);
  var popular = axios.get(popular); 
  var action = axios.get(action);
  var anime = axios.get(anime);
  var scifi = axios.get(scifi);
  var comedy = axios.get(comedy);
  var latest_series = axios.get(latest_series);
  var doc = axios.get(doc);
  var horror = axios.get(horror);
  axios.all([bn1, bn2, bn3, bn4, trending, popular, action, anime, scifi, comedy, latest_series,doc,horror,bn5]).then(axios.spread((...responses) => {
   
    var bn1_dt = responses[0].data;
    var bn2_dt = responses[1].data;
    var bn3_dt = responses[2].data;
    var bn4_dt = responses[3].data;
    var trending_dt = responses[4].data.results;
    var popular_dt = responses[5].data.results;
    var action_dt = responses[6].data.results;
    var anime_dt = responses[7].data.results;
    var scifi_dt  = responses[8].data.results;
    var comedy_dt  = responses[9].data.results;
    var popular_tv_dt = responses[10].data.results;
    var doc_dt = responses[11].data.results;
    var horror_dt = responses[12].data.results;
    var bn5_dt = responses[13].data;
    var status =0;
    if(bn1_dt){
      status=1;
    }
   console.log(anime_dt)
    res.render('home.ejs',{status:status,bn1_dt:bn1_dt,bn2_dt:bn2_dt,bn3_dt:bn3_dt,bn4_dt:bn4_dt,trending_dt:trending_dt,popular_dt:popular_dt,anime_dt:anime_dt, scifi_dt:scifi_dt,action_dt:action_dt,comedy_dt:comedy_dt,popular_tv_dt:popular_tv_dt,doc_dt:doc_dt,horror_dt:horror_dt,bn5_dt})
  }))
 
   //res.render('home.ejs')
})

app.listen(PORT,()=>{
    console.log(`stream started at ${'http://localhost:3000'}`);
});
