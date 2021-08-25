document.addEventListener("DOMContentLoaded", function(event) {
    let launchButton = document.getElementById("launch");
    launchButton.disabled = true;
    let checkBox = document.querySelectorAll(".check-buttons>input");
    checkBox.forEach(function (item){
        item.disabled = true;
    });
    let leverBox = document.querySelectorAll(".levers>input");
    leverBox.forEach(function (item){
        item.disabled = true;
    });
    let buttonLogin = document.getElementById("login-button");
    let passwordField = document.getElementById("password");
    buttonLogin.addEventListener("click", function() {
        let password = passwordField.value;
        if (password === "TrustNo1") {
            checkBox.forEach(function (item){
                item.disabled = false;
            });
            leverBox.forEach(function (item){
                item.disabled = false;
            });
            checkBox.forEach( button => {
                button.onchange = relevant;
            });
            leverBox.forEach( button => {
                button.onchange = relevant;
            });
        }
    });
    function relevant() {
        let checkedButtonCheckboxes = true;
        let checkedButtonRanges = true;
        for (let index = 0; index < checkBox.length; index++) {
            const element = checkBox[index];
            if(!element.checked){
                checkedButtonCheckboxes = false;
            }
        }
        for (let index = 0; index < leverBox.length; index++) {
            const element = leverBox[index];
            if(element.value < 100) {
                checkedButtonRanges = false;
            }
        }
        if(checkedButtonCheckboxes && checkedButtonRanges) {
            launchButton.removeAttribute("disabled", "false");
        } else {
            launchButton.setAttribute("disabled", "true");
        }
    }
    // let leverCheck = false;
    // let checkBoxCheck = false;
    // let checks = function () {
    //     leverBox.forEach(function (item) {
    //         item.onchange = function () {
    //         leverCheck =true;
    //         }
    //     });
    //     checkBox.forEach(function (item) {
    //         item.onchange = function () {
    //             checkBoxCheck = true;
    //         }
    //     });
    //     if (leverCheck === true && checkBoxCheck === true){
    //         launchButton.disabled = false;
    //
    //     }
    // }
    // setInterval(checks,5000);


    // launchButton.addEventListener("click",function (){
    //    console.log("heh");
    // });
});
