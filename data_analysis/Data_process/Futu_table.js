import data from "../cleanedData/Cleaned_Futu.js"
import _ from 'lodash'
import fs from 'fs';


//Get all unique names from the data 

var postList = data.map(({stock_names}) => stock_names);
var name_arr = (_.keys(_.countBy(postList)));

var Futu_table = new Array ();

//Get number of posts of all stocks from the data and make an array of objects that contain: Stock names and number of posts 
for(let i=0; i<name_arr.length ; i++){
    var counter = 0 ;
    for(let j=0; j<data.length ; j++){
        if(name_arr[i] === data[j].stock_names){
            counter ++;
        }
    }
    var newObj = {
        name: name_arr[i],
        posts_sum: counter
    }
    Futu_table[i] = newObj
}

//get engagement rate of all stocks from the data and push it to the existing object
//Formula: (like+comment)/viewcount x 100%

    //Push total view, comment and like to futu_table
for(let i = 0; i < name_arr.length ; i++){
    var total_view = 0;
    var total_like = 0;
    var total_comment = 0;
    for(let j = 0; j< data.length ; j++){
        if(name_arr[i] === data[j].stock_names){
            total_view += data[j].view_count ;
            total_comment += data[j].comment_count ;
            total_like += data[j].like_count ;
        }
        Futu_table[i].total_view = total_view ;
        Futu_table[i].total_comment = total_comment ;
        Futu_table[i].total_like = total_like ;
    }
}

    //Calculate the engagement rate.
for(let i = 0; i < Futu_table.length ; i++){
    var engagement_rate = 0;
    engagement_rate = ((Futu_table[i].total_like + Futu_table[i].total_comment)/Futu_table[i].total_view )*100 ;

    Futu_table[i].total_engagement_rate = (Math.floor(engagement_rate*1000))/1000;
}

//get Market Attitude of all stocks from the data and push it to the existing object
//Formula: if it contains a postivie word, add 1. If it containes a negatie word, minus 1.

//Get attiude rate per post 

for(let i = 0; i < data.length; i++){
    var attitude = 0 ;
    //wording that indicate positive attitude
    if(data[i].post_text.includes("???")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("???")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("???")){
        attitude++;
    }
    if(data[i].post_text.includes("to the moon")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("???")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    if(data[i].post_text.includes("??????")){
        attitude++;
    }
    //wording that indicate negative attitude
    if(data[i].post_text.includes("???")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("???")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("?????????")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("???")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("???")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("???")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("???")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("???")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    if(data[i].post_text.includes("??????")){
        attitude--;
    }
    data[i].attitude = attitude;
}

console.log(data);

//push total attitude to futu_Table

for(let i = 0; i < Futu_table.length; i++){
    var attitude = 0 ;
    for(let j = 0; j < data.length ; j++){
        if(Futu_table[i].name === data[j].stock_names){
            attitude += data[j].attitude ;
        }
    }
    Futu_table[i].market_attitude = attitude;
}

//get Overall score of all stocks from the data and push it to the existing object
//Formula: popularity * attitude 
// Popularity = number of post * engagement rate * 100 

for(let i = 0; i < Futu_table.length; i++){
    var overall_score = 0 ;
    overall_score = Futu_table[i].posts_sum * (1 + Futu_table[i].total_engagement_rate *10 ) * Futu_table[i].market_attitude ;
    Futu_table[i].overall_score = Math.floor(overall_score);
}

// console.log(Futu_table);




//Sort them according to the overall score -> From highest to lowest

Futu_table.sort((a, b) => (a.overall_score < b.overall_score) ? 1 : ((b.overall_score < a.overall_score) ? -1 : 0));
console.log(Futu_table);


//save the table as json

fs.writeFile("Futu_table.json", JSON.stringify(Futu_table), function(err){
    if(err) throw err;
    console.log('complete');
});

