let inputForm = document.getElementById("inputForm")
let submitButton = document.getElementById("submit");

// Output form input to console

        inputForm.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                submitButton.click();
            }
        });

        submitButton.onclick = function(event) {
            inputForm = inputForm.value;
            console.log(inputForm);
        };
//    inputForm.toString().toLowerCase();

    switch (inputForm.value) {
        case "nursery": 
        document.write("e")
        break;

        case "kinder": 
        console.log(inputTuition);
        break;

        case "grade 1":
            console.log(inputTuition);
        break;

        case "grade 2":
            console.log(inputTuition);
        break;

        case "grade 3":
            console.log(inputTuition);
        break;

        case "grade 4":
            console.log(inputTuition);
        break;
        
        case "grade 5":
            console.log(inputTuition);
        break;

        case "grade 6":
            console.log(inputTuition);
        break;

        case "grade 7":
            console.log(inputTuition);
        break;

        case "grade 8":
            console.log(inputTuition);
        break;

        case "grade 9":
            console.log(inputTuition);
        break;

        case "grade 10":
            console.log(inputTuition);
        break;

        case "grade 11":
            console.log(inputTuition);
        break;

        case "grade 12":
            console.log(inputTuition);
        break;

        default:
            console.log("THIS IS DEBUG MODE NO 3")
    }
