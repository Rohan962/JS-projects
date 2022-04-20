

// Insert function to insert number to textbox

function insert(num) {
    document.form1.textview.value = document.form1.textview.value + num;
}

// Use equal() to return the values based on past function

function equal() {

    var exp = document.form1.textview.value;

    if(exp)
    {
        document.form1.textview.value=eval(exp);
    }
}

function del() {
    document.form1.textview.value = "";
}