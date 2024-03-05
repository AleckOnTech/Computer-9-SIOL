let input1 = prompt("Input Grade Tuition here. Nursery to Grade 12");
input1 = input1.toUpperCase();

let data = {
 // GRADE LEVEL
    gradeLevel: "",
// MAIN FEES
    tuitionFee: "",
    misc: "",
    otherFees: "",
    total: "",
// CASH BASIS
    cbasis5: "",
    cbasis3: "",
// SEMI ANNUAL
    uenum1: "",
    annual: "",
// QUARTERLY
    uenum2: "",
    qrtr: "",
// MONTHLY
    uenum3: "",
    month: "",
}

function printDOM() {
      // OVERRIDE TO DOM
      document.getElementById("data-header").innerHTML = data.gradeLevel;
      // MAIN FEES;
         document.getElementById("tfee-num").innerHTML = data.tuitionFee;
         document.getElementById("misc-num").innerHTML = data.misc;
         document.getElementById("other-num").innerHTML = data.otherFees;
         document.getElementById("total1").innerHTML = data.total;
      // CASH BASIS;
         document.getElementById("cbasis0").innerHTML = data.total;
         document.getElementById("cbasis5").innerHTML = data.cbasis5 ;
         document.getElementById("cbasis3").innerHTML = data.cbasis3; 
      // SEMI ANNUAL;
         document.getElementById("uenum1").innerHTML = data.uenum1; 
         document.getElementById("oct5a").innerHTML = data.annual ;
         document.getElementById("jan5").innerHTML = data.annual ;
         document.getElementById("total2").innerHTML = data.total; 
      // QUARTERLY;
         document.getElementById("uenum2").innerHTML = data.uenum2; 
         document.getElementById("oct5b").innerHTML = data.qrtr ;
         document.getElementById("dec5").innerHTML = data.qrtr ;
         document.getElementById("feb5").innerHTML = data.qrtr ;
         document.getElementById("apr5").innerHTML = data.qrtr ;
         document.getElementById("total3").innerHTML = data.total; 
      // MONTHLY;
         document.getElementById("uenum3").innerHTML = data.uenum3; 
         document.getElementById("oct2").innerHTML = data.month ;
         document.getElementById("nov2").innerHTML = data.month ;
         document.getElementById("dec2").innerHTML = data.month ;
         document.getElementById("jan2").innerHTML = data.month ;
         document.getElementById("feb2").innerHTML = data.month ;
         document.getElementById("mar2").innerHTML = data.month ;
         document.getElementById("apr2").innerHTML = data.month ;
         document.getElementById("may2").innerHTML = data.month ;
         document.getElementById("total4").innerHTML = data.total;
}

function nursery() {
     // GRADE LEVEL
        data.gradeLevel= input1;
     // MAIN FEES
        data.tuitionFee = "14,191.00"
        data.misc = "8,625.00";
        data.otherFees = "7,905.00";
        data.total = "30,721.00";
     // CASH BASIS
        data.cbasis5 = "709.55";
        data.cbasis3 = "425.73";
     // SEMI ANNUAL
        data.uenum1 = "15,721.00";
        data.annual = "7,500.00";
     // QUARTERLY
        data.uenum2 = "12,721.00";
        data.qrtr = "4,500.00";
     // MONTHLY
        data.uenum3 = "9,721.00";
        data.month = "2,625.00";

        return printDOM();
}

function grade1and2() {
    // GRADE LEVEL
       data.gradeLevel = input1;
    // MAIN FEES
       data.tuitionFee = "17,194.00"
       data.misc = "10,525.00";
       data.otherFees = "11,275.00";
       data.total = "38,994.00";
    // CASH BASIS
       data.cbasis5 = "859.70";
       data.cbasis3 = "515.82";
    // SEMI ANNUAL
       data.uenum1 = "19,494.00";
       data.annual = "9,500.00";
    // QUARTERLY
       data.uenum2 = "15,994.00";
       data.qrtr = "5,750.00";
    // MONTHLY
       data.uenum3 = "12,994.00";
       data.month = "3,250.00";

       return printDOM();
}

function grade3() {
    // GRADE LEVEL
       data.gradeLevel = input1;
    // MAIN FEES
       data.tuitionFee = "17,194.00"
       data.misc = "10,625.00";
       data.otherFees = "11,495.00";
       data.total = "39,314.00";
    // CASH BASIS
       data.cbasis5 = "859.70";
       data.cbasis3 = "515.82";
    // SEMI ANNUAL
       data.uenum1 = "19,614.00";
       data.annual = "9,850.00";
    // QUARTERLY
       data.uenum2 = "15,614.00";
       data.qrtr = "5,925.00";
    // MONTHLY
       data.uenum3 = "13,314.00";
       data.month = "3,250.00";

       return printDOM();
}

function grade4and5() {
    // GRADE LEVEL
       data.gradeLevel = input1;
    // MAIN FEES
       data.tuitionFee = "17,194.00"
       data.misc = "11,625.00";
       data.otherFees = "12,495.00";
       data.total = "41,554.00";
    // CASH BASIS
       data.cbasis5 = "859.70";
       data.cbasis3 = "515.82";
    // SEMI ANNUAL
       data.uenum1 = "20,544.00";
       data.annual = "10,500.00";
    // QUARTERLY
       data.uenum2 = "16,544.00";
       data.qrtr = "6,250.00";
    // MONTHLY
       data.uenum3 = "14,544.00";
       data.month = "3,375.00";

       return printDOM();
}

function grade6() {
    // GRADE LEVEL
       data.gradeLevel = input1;
    // MAIN FEES
       data.tuitionFee = "17,194.00"
       data.misc = "11,675.00";
       data.otherFees = "17,395.00";
       data.total = "46,264.00";
    // CASH BASIS
       data.cbasis5 = "859.70";
       data.cbasis3 = "515.82";
    // SEMI ANNUAL
       data.uenum1 = "23,564.00";
       data.annual = "11,350.00";
    // QUARTERLY
       data.uenum2 = "18,864.00";
       data.qrtr = "6,850.00";
    // MONTHLY
       data.uenum3 = "14,864.00";
       data.month = "3,925.00";

       return printDOM();
}

function grade789() {
    // GRADE LEVEL
       data.gradeLevel = input1;
    // MAIN FEES
       data.tuitionFee = "18,932.00"
       data.misc = "11,675.00";
       data.otherFees = "12,785.00";
       data.total = "43,392.00";
    // CASH BASIS
       data.cbasis5 = "946.60";
       data.cbasis3 = "567.96";
    // SEMI ANNUAL
       data.uenum1 = "21,892.00";
       data.annual = "10,750.00";
    // QUARTERLY
       data.uenum2 = "17,392.00";
       data.qrtr = "6,500.00";
    // MONTHLY
       data.uenum3 = "13,392.00";
       data.month = "3,750.00";

       return printDOM();
}

function grade10() {
    // GRADE LEVEL
       data.gradeLevel = input1;
    // MAIN FEES
       data.tuitionFee = "18,932.00"
       data.misc = "11,675.00";
       data.otherFees = "12,785.00";
       data.total = "48,002.00";
    // CASH BASIS
       data.cbasis5 = "946.60";
       data.cbasis3 = "567.96";
    // SEMI ANNUAL
       data.uenum1 = "24,802.00";
       data.annual = "11,600.00";
    // QUARTERLY
       data.uenum2 = "20,002.00";
       data.qrtr = "7,000.00";
    // MONTHLY
       data.uenum3 = "16,402.00";
       data.month = "3,950.00";

       return printDOM();
}

function grade11() {
    // GRADE LEVEL
       data.gradeLevel = input1;
    // MAIN FEES
       data.tuitionFee = "20,218.00"
       data.misc = "9,800.00";
       data.otherFees = "8,075.00";
       data.total = "38,093.00";
    // CASH BASIS
       data.cbasis5 = "1010.90";
       data.cbasis3 = "606.54";
    // SEMI ANNUAL
       data.uenum1 = "18,093.00";
       data.annual = "10,000.00";
    // QUARTERLY
       data.uenum2 = "15,093.00";
       data.qrtr = "5,750.00";
    // MONTHLY
       data.uenum3 = "12,093.00";
       data.month = "3,250.00";

       return printDOM();
}

function grade12() {
    // GRADE LEVEL
       data.gradeLevel = input1;
    // MAIN FEES
       data.tuitionFee = "20,218.00"
       data.misc = "9,800.00";
       data.otherFees = "12,725.00";
       data.total = "42,743.00";
    // CASH BASIS
       data.cbasis5 = "1010.90";
       data.cbasis3 = "606.54";
    // SEMI ANNUAL
       data.uenum1 = "21,743.00";
       data.annual = "10,500.00";
    // QUARTERLY
       data.uenum2 = "17,743.00";
       data.qrtr = "5,750.00";
    // MONTHLY
       data.uenum3 = "13,943.00";
       data.month = "3,600.00";

       return printDOM();
}

    switch (input1) {
        case "NURSERY": 
        case "KINDER": 
            nursery();
        break;

        case "GRADE 1":
        case "GRADE 2":
            grade1and2();
        break;

        case "GRADE 3":
            grade3();
        break;

        case "GRADE 4":
        case "GRADE 5":
            grade4and5();
        break;

        case "GRADE 6":
            grade6();
        break;

        case "GRADE 7":
        case "GRADE 8":
        case "GRADE 9":
            grade789();
        break;

        case "GRADE 10":
            grade10();
        break;

        case "GRADE 11":
            grade11();
        break;

        case "GRADE 12":
        case "GRADE 12 GAS":
        case "GRADE 12 HUMSS":
        case "GRADE 12 STEM":
        case "GRADE 12 ICT":
        case "GRADE 12 ABM":
            grade12();
        break;

        default:
            nursery()
    }