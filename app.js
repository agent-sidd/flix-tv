var express= require('express');
const app =express();
var cors=require('cors');
var path = require('path');
var axios = require('axios');
var ejs = require('ejs');
var url = require('url');
const fs = require('fs');
const ColorThief =require('colorthief')
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
/*app.get('*',function(req,res){
  var p = req.params[0];
  var q = req.query;
  console.log(p);
  var params_list = {
    "0":"/",
    "1":"/details/tv",
    "2":"details/mv",
    "3":"/genre/Action",
    "4":"/genre/Adventure",
    "5":"/genre/Comedy",
    "6":"/genre/Crime",
    "7":"/genre/Drama",
    "8":"/genre/Family",
    "9":"/genre/Fantasy",
    "10":"/genre/Horror",
    "11":"/genre/Music",
    "12":"/genre/Rommance",
    "13":"/genre/War",
    "14":"/genre/Thriller",
    "15":"/genre/Sceince",
    "16":"/movies/popular",
    "17":"/movies/now_playing",
    "18":"/movies/upcoming",
    "19":"/movies/trending",
     "20":"/movies/top_rated",
    "21":"/tv/popular",
    "22":"/tv/upcoming",
    "23":"/tv/top_rated",
     "24":"/tv/now_playing",
    "25":"/tv/trending",
    "26":"/watch/mv",
    "27":"/watch/tv",
    "28":"/page-not-found"
  };
  var route_nm;
  var found = 0 ;
  for (route_nm in params_list ){
    
    if(p == params_list[route_nm]){
       found =1;
    }
  }
  if(found){
    console.log("found")
    //res.redirect(q);
  }
  else{
    console.log("not found")
   // res.redirect('/page-not-found');
  }
  
 
})
*/
app.get('/',function(req,res){
   const arr = ["337404","632357","49018","584044","581726","825997","724089","278","238","460465","399566","808023","615457","691179","717192","527774","791373","259693","634528","138843","458576","587807","447332","508442","529203","736069",
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
  var myst = 'https://api.themoviedb.org/3/discover/movie/?api_key='+key+'&with_genres=9648&page=1';
  var horror = 'https://api.themoviedb.org/3/discover/movie/?api_key='+key+'&with_genres=27&page=1';
  console.log(trending)
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
  var myst = axios.get(myst);
  var horror = axios.get(horror);
  axios.all([bn1, bn2, bn3, bn4, trending, popular, action, anime, scifi, comedy, latest_series,myst,horror,bn5]).then(axios.spread((...responses) => {
   
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
    var myst_dt = responses[11].data.results;
    var horror_dt = responses[12].data.results;
    var bn5_dt = responses[13].data;
    var status =0;
    if(bn1_dt){
      status=1;
    }
   
    res.render('home.ejs',{status:status,bn1_dt:bn1_dt,bn2_dt:bn2_dt,bn3_dt:bn3_dt,bn4_dt:bn4_dt,trending_dt:trending_dt,popular_dt:popular_dt,anime_dt:anime_dt, scifi_dt:scifi_dt,action_dt:action_dt,comedy_dt:comedy_dt,popular_tv_dt:popular_tv_dt,myst_dt:myst_dt,horror_dt:horror_dt,bn5_dt})
  }))
 
   //res.render('home.ejs')
})
app.get('/search',function(req,res){
 var q = req.query.q; 
 var pg =req.query.page;

 var url_qyery ="https://api.themoviedb.org/3/search/multi?api_key="+ key + "&query="+ q + "&page="+pg+"&include_adult=false";
 axios.get(url_qyery)
 .then(function (response) {
  var data=response.data.results;
  var dt =response.data
   
    var total_pg= dt.total_pages;
  if(dt.total_results==0){
     var success = 0;
   }
else{
      var success = 1;
      
      
      
 }  
 res.render('category.ejs',{data:data,success:success,q:q,pg:pg,total_pg:total_pg})
}).catch(error => console.error(error))
})


app.get('/genre/:cat',function(req,res){
  var   q = req.params.cat;
   var pg =req.query.page;
  var cat = {
  "Action":"28",
  "Adventure":"12",
  "Comedy":"35",
  "Crime":"80",
  "Drama":"18",
  "Family":"10751",
  "Fantasy":"14",
  "Horror":"27",
  "Music":"10402",
  "Rommance":"10749",
  "War":"10752",
  "Thriller":"53",
  "Science":"878"
  };

  var genre_id = 0;
  for (cat_nm in cat ){
    if(cat_nm == q){
       genre_id = cat[cat_nm];
    }
  }
  if(genre_id == 0){
    res.redirect('/page-not-found')
  }
  else{
    var url  = "https://api.themoviedb.org/3/discover/movie?api_key="+key + "&with_genres="+genre_id+"&page="+ pg;
    axios.get(url)
    .then(function (response) {
     var data=response.data.results;
     var dt =response.data
      total_pg = dt.total_pages
     if(dt.total_results==0){
        var success = 0;
      }
   else{
         var success = 1;         
    }  
  
    res.render('genre.ejs',{data:data,success:success,q:q,pg:pg,total_pg:total_pg})
   }).catch(error => console.error(error))
  }
  
})
app.get('/movies/:cat',function(req,res){
  var q = req.params.cat;
  var pg = req.query.page;
  if(q == "trending" || q == "top_rated" || q == "popular" || q == "now_playing" || q == "upcoming"){
     if(q=="trending"){
      var url  = "https://api.themoviedb.org/3/trending/movies/week?api_key=" +key + "&page="+ pg;
     }
     else{
    var url  = "https://api.themoviedb.org/3/movie/" + q + "?api_key=" +key + "&page="+ pg;
     }
     axios.get(url)
     .then(function (response) {
      var data=response.data.results;
      var dt =response.data
       total_pg = dt.total_pages
      if(dt.total_results==0){
         var success = 0;
       }
    else{
          var success = 1;         
     }  
      if(q== "top_rated"){
          var cat = "Top Rated";
      }
    else if(q== "upcoming"){
        var cat = "Upcoming";
    }
    else if(q== "trending"){
      var cat = "Trending";
    }
    else if(q== "popular"){
    var cat = "Popular";
    }  
    else if(q== "now_playing"){
    var cat = "Now Playing";
   }
     res.render('movies.ejs',{data:data,success:success,cat:cat,pg:pg,total_pg:total_pg})
    }).catch(error => console.error(error))
  }
  else{
      
    res.redirect('/page-not-found');
  
   }
})


app.get('/tv/:cat',function(req,res){
  var q = req.params.cat;
  var pg = req.query.page;
  if(q == "trending" || q == "top_rated" || q == "popular" || q == "now_playing" || q == "upcoming"){
     if(q=="trending"){
      var url  = "https://api.themoviedb.org/3/trending/tv/week?api_key=" +key + "&page="+ pg;
     }
     else{
    var url  = "https://api.themoviedb.org/3/tv/" + q + "?api_key=" +key + "&page="+ pg;
     }
     axios.get(url)
     .then(function (response) {
      var data=response.data.results;
      var dt =response.data
       total_pg = dt.total_pages
      if(dt.total_results==0){
         var success = 0;
       }
    else{
          var success = 1;         
     }  
      if(q== "top_rated"){
          var cat = "Top Rated";
      }
    else if(q== "upcoming"){
        var cat = "Upcoming";
    }
    else if(q== "trending"){
      var cat = "Trending";
    }
    else if(q== "popular"){
    var cat = "Popular";
    }  
    else if(q== "now_playing"){
    var cat = "Now Playing";
   }
     res.render('tv.ejs',{data:data,success:success,cat:cat,pg:pg,total_pg:total_pg})
    }).catch(error => console.error(error))
  }
  else{
      
    res.redirect('/page-not-found');
  
   }

})

app.get('/details/:media',function(req,res){
 var media_type = req.params.media;
  var id = req.query.id;
  if(media_type == "mv"){
  var url = "https://api.themoviedb.org/3/movie/"+ id + "?api_key=" + key + "&append_to_response=videos,credits";
  var providers = "https://api.themoviedb.org/3/movie/"+ id + "/watch/providers?api_key=" + key ; 
  var recmmondation = "https://api.themoviedb.org/3/movie/"+ id + "/recommendations?api_key=" + key ; 
}
  else if(media_type == "tv"){ 
  var url = "https://api.themoviedb.org/3/tv/"+ id + "?api_key=" + key + "&append_to_response=videos,credits";
  var providers = "https://api.themoviedb.org/3/tv/"+ id + "/watch/providers?api_key=" + key ; 
  var recmmondation = "https://api.themoviedb.org/3/tv/"+ id + "/recommendations?api_key=" + key ; 
}
  else {
    res.redirect('/page-not-found')
  }
 
  var client_info ="https://ipapi.co/json/";
  var link  =axios.get(url)
  var provider =axios.get(providers)
  var recmnd =axios.get(recmmondation)
  var client =axios.get(client_info)
  axios.all([link,provider,recmnd,client]).then(axios.spread((...responses) => {
  var media_info = responses[0].data;
  var provider_info =responses[1].data.results;
  var recmnd_info  =responses[2].data.results;
  var client_info =responses[3].data.country;
  if(recmnd_info){
    var success =1;
  }
  else{
   var success = 0
  }
 var dominantColor = 0 ;
  async function getDominantColor() {
   
    var imge = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + media_info.poster_path;
      const img = imge;
      const dominantColor = await ColorThief.getColor(img);
      
      return dominantColor;
  }
  
  getDominantColor().then(response=>{
    var clr = response;
    var r = clr[0];
    var g = clr[1];
    var b = clr[2];
    var col1 = 'rgba('+ r + ','+ g +','+ b +',1)'
    var col2 = 'rgba('+ r + ','+ g +','+ b + ',0.84)'   
    var  gradient = "linear-gradient(to right, "  + col1 +"150px," + col2 + " 100%)";
    res.render('details.ejs',{media_info:media_info,provider_info:provider_info,recmnd_info:recmnd_info,client_info:client_info,success:success,col1:col1,gradient:gradient,media_type:media_type})
  });
}))
})
app.get('/page-not-found',function(req,res){
  res.render('no_page.ejs')
})
app.get("*",function(req,res){
  res.redirect("/page-not-found")
})
app.listen(PORT,()=>{
    console.log(`stream started at ${'http://localhost:3000'}`);
});
