import data from "../cleanedData/Cleaned_Discord.js"
import _ from 'lodash'
import fs from 'fs';

//get unique names 


var Discord_table = new Array ();

for(var i = 0 ; i < data.length ; i++){
    if(data[i].content.includes("project")){

        var newObj = {
            post: data[i].content,
            author: data[i].author
        }
        Discord_table.push(newObj);
    }
}



//Get post count and push it to the object
for(var i = 0 ; i < Discord_table.length ; i++ ){
    var counter = 0 ;
    for (var j = 0 ; j < data.length ; j++){
        if(Discord_table[i].author === data[j].author){
            counter ++ ;
        }
    }
    Discord_table[i].posts_num = counter;
}

// console.log(Discord_table);

//created a list where no post is duplicating 
var unique = [...new Map(Discord_table.map(item => [item['author'], item])).values()]


//get engagement and push it to the object
//Formula if there is 1. message_reference, 2. reactions , engagement number + 1
for(var i = 0 ; i < unique.length ; i++){
    var engagement = 0 ;
    for( var j=0 ; j< data.length ; j++){
        if(unique[i].author === data[j].author){
            if(data[j].referenced_message != "nan"){
                engagement ++;
            }
            if(data[j].reactions != "nan"){
                engagement ++;
            }
        }
    }
    unique[i].engagement_count = engagement;
}


//Calculate overall score and push it to the object
//overall score = posts_num * engagement count 
for(var i = 0 ; i < unique.length ; i++){
    var overall_score = 0 ;
    overall_score = unique[i].posts_num * ( 1 + unique[i].engagement_count) ;
    unique[i].overall_score = overall_score ;
}

//sort it according to the overall score 

unique.sort((a, b) => (a.overall_score < b.overall_score) ? 1 : ((b.overall_score < a.overall_score) ? -1 : 0));
// console.log(unique);

//save it as a json file.

fs.writeFile("Discord_table.json", JSON.stringify(unique), function(err){
    if(err) throw err;
    console.log('complete');
});



//get NFT picture and push it to the object <- do it manually on CSV file as there are too many uncertainties in it to be automated