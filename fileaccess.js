const expr = require("express")
const app = expr();

// app.use(expr.static('./'));
// app.use(expr.static(__dirname));   // if file name is index.html and all file in same folder
// app.use(expr.static('./',{index:'hello.html'}));  //all file in same folder
// app.use(expr.static('../',{index:'hello.html'}));  // js in src and html and css in express
// app.use(expr.static('../public',{index:'hello.html'}));  // js in src and html and css in public folder
// app.use(expr.static('./public',{index:'hello.html'}));  // js in expres and html and css in public folder

app.listen(5000);