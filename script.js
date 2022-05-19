var urbanization;

function urban(level){
    urbanization = level;
    window.location = "question2.html";
}

function temp(){
    var temperature = document.getElementById("tempQuestion").value;
    console.log(temperature);
    window.location = "results.html";
};