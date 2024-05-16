const fs = require("fs")


fs.writeFile("text.txt", "hello i am Zohaib Ali dayo ", function(err){
    if(err) return console.log(err);
    else console.log("Done!");
})