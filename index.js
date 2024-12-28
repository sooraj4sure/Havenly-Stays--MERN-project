const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")

const port = 8080;

main()
  .then(() => {
    console.log("Connected To DataBase");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/havenly-stays");
}



// testt
app.get("/testListing",(req,res)=>{

    let sampleTesting = new Listing({
        title: "my new villa",
        description:"on mountains",
        price:12500,
        location:"Himachal",
        country:"India",
    })
    sampleTesting.save();
    console.log(sampleTesting);
    
    res.send("workingg")
})

app.get("/", (req, res) => {
  res.send("i am Groot");
});



app.listen(port, () => {
  console.log("listeningg to the port ", port);
});
