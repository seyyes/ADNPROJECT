var express = require("express");
var app = express();
 

//définition du moteur de template  
app.set("view engine", "ejs");
app.set("views", "./views");

//Middleware 
app.use(express.static("public"));


//Routes
app.get("/", function(request, response)  {
    
    response.render("homePage");
});

app.get("/cart", function(request, response)  {
    
    response.render("cart");
});
 
app.get("/auth", function(request, response)  {
    
    response.render("authPage");
});

app.get("/categories", function(request, response)  {
    
    response.render("categories");
});

app.get("/checkout", function(request, response)  {
    
    response.render("checkout");
});

app.get("/contact", function(request, response)  {
    
    response.render("contact");
});

app.get("/product", function(request, response)  {
    
    response.render("product");
});

app.listen(3000);