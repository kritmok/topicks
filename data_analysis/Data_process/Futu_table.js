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
    if(data[i].post_text.includes("好")){
        attitude++;
    }
    if(data[i].post_text.includes("起飞")){
        attitude++;
    }
    if(data[i].post_text.includes("买")){
        attitude++;
    }
    if(data[i].post_text.includes("潜力")){
        attitude++;
    }
    if(data[i].post_text.includes("进场")){
        attitude++;
    }
    if(data[i].post_text.includes("值得")){
        attitude++;
    }
    if(data[i].post_text.includes("值得")){
        attitude++;
    }
    if(data[i].post_text.includes("升")){
        attitude++;
    }
    if(data[i].post_text.includes("to the moon")){
        attitude++;
    }
    if(data[i].post_text.includes("牛逼")){
        attitude++;
    }
    if(data[i].post_text.includes("堅定")){
        attitude++;
    }
    if(data[i].post_text.includes("错过")){
        attitude++;
    }
    if(data[i].post_text.includes("看好")){
        attitude++;
    }
    if(data[i].post_text.includes("超越")){
        attitude++;
    }
    if(data[i].post_text.includes("看好")){
        attitude++;
    }
    if(data[i].post_text.includes("最强")){
        attitude++;
    }
    if(data[i].post_text.includes("再買")){
        attitude++;
    }
    if(data[i].post_text.includes("猛")){
        attitude++;
    }
    if(data[i].post_text.includes("高興")){
        attitude++;
    }
    if(data[i].post_text.includes("精準")){
        attitude++;
    }
    //wording that indicate negative attitude
    if(data[i].post_text.includes("死")){
        attitude--;
    }
    if(data[i].post_text.includes("违规")){
        attitude--;
    }
    if(data[i].post_text.includes("沽")){
        attitude--;
    }
    if(data[i].post_text.includes("复杂")){
        attitude--;
    }
    if(data[i].post_text.includes("垃圾")){
        attitude--;
    }
    if(data[i].post_text.includes("垃圾")){
        attitude--;
    }
    if(data[i].post_text.includes("搞错")){
        attitude--;
    }
    if(data[i].post_text.includes("嘥時間")){
        attitude--;
    }
    if(data[i].post_text.includes("衰落")){
        attitude--;
    }
    if(data[i].post_text.includes("跌")){
        attitude--;
    }
    if(data[i].post_text.includes("唏噓")){
        attitude--;
    }
    if(data[i].post_text.includes("烂")){
        attitude--;
    }
    if(data[i].post_text.includes("别买")){
        attitude--;
    }
    if(data[i].post_text.includes("兇")){
        attitude--;
    }
    if(data[i].post_text.includes("中伏")){
        attitude--;
    }
    if(data[i].post_text.includes("卖")){
        attitude--;
    }
    if(data[i].post_text.includes("皱眉")){
        attitude--;
    }
    if(data[i].post_text.includes("廢")){
        attitude--;
    }
    if(data[i].post_text.includes("無恥")){
        attitude--;
    }
    if(data[i].post_text.includes("止跌")){
        attitude--;
    }
    if(data[i].post_text.includes("处罚")){
        attitude--;
    }
    if(data[i].post_text.includes("媽的")){
        attitude--;
    }
    if(data[i].post_text.includes("没用")){
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

