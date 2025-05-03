const expr = require("express")
const app = expr();

const cb = (req, res, next) => {
    res.write("<b>This is Frist Stage</b><br>");
    next();
}

const cb1 = (req, res, next) => {
    res.set("content-type", "text/html")
    res.write("<b>This is Second Stage</b><br>");
    next();
}

app.use('/', cb1, cb)   // If cb1,cb so add content-type in cb1 and if cb,cb1 so add on cb content-type
app.get('/', (req, res) => {
    res.write("Hello Wrold")
    res.send()
})

app.listen(3000);

