import express from "express";
const app = express();

app.use(express.static("public"));

import templateEngine from "./util/templateEngine.js";

const counterPath = templateEngine.readPage("./public/pages/counter.html")
const counterPage = templateEngine.renderPage(counterPath, {
    tabTitle: "Piesa"
});

app.get("/", (req, res) => {
    res.send({message: "Test manner"});
});

app.get("/counter", (req, res) => {
    res.send(counterPage);
});



const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error)
        return;
    };
    console.log("Server is running on: ", PORT);
});