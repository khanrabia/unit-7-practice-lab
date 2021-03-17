const http = require("http");
const fs   = require("fs");
const url = require("url");
let PORT = 8000;
const app = http.createServer(server);

// Your code here! We've required a few of the libraries you'll need to complete the project. 

function server (request, response){
    function renderText (text, statusCode = 200){
        response.writeHead(statusCode, { 'Content-Type': 'text' });
        response.write(text);
        response.end();
    }
    
    function renderTemplate(path, statusCode = 200, params = {}){
        fs.readFile(`./templates/${path}`, 'utf8', (error, data) => {
            response.writeHead(statusCode, { 'Content-Type': 'text' });
            if(!error){
                Object.keys(params).forEach(key => {
                    data = data.replace(`{{${key}}}`, params[key]);
                });
            }
            response.write(data);
            response.end();
        });
    }
    
    let URL = url.parse(request.url, true);
    
    if (URL.pathname === "/"){
        renderTemplate("index.html", 200, URL.query);
    } else if(URL.pathname === "/dogs"){
        renderTemplate('dogs.html',200);
    } else{
        renderText("Sorry, that route does not exist", 404);
    }
}

app.listen(PORT);