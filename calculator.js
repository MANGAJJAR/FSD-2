const expr = require("express");
const app = expr();

app.use(expr.urlencoded({ extended: false }));
app.use(expr.static("./", { index: "calculator.html" }));

app.get('/calculator', (req, res) => {
    const n1 = parseFloat(req.query.num1);
    const n2 = parseFloat(req.query.num2);

    const formula = req.query.formula;
    if (n1 > 0 && n2 > 0) {
        let result;
        if (formula == "add") {
            result = n1 + n2;
            res.send("Addition is " + result);
        } else if (formula == "sub") {
            result = n1 - n2;
            res.send("Subtraction is " + result);
        } else if (formula == "mul") {
            result = n1 * n2;
            res.send("Multiplication is " + result);
        } else if (formula == "div") {
            if (n2 !== 0) {
                result = n1 / n2;
                res.send("Division is " + result);
            } else {
                res.send("Division by zero not allowed.");
            }
        } else {
            res.send("Please select operation");
        }
    } else {
        res.send("Numbers must be greater than 0.");
    }
});

app.listen(3000);
