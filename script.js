//selecting output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");
//seleting input element
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");
//selecting error elements
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");
//user input checks

//input day
let n = input_day
input_day.addEventListener("input" , (n)=> {
    function input_day(min, max, n) {
        if (n > +31) {
            n = false;
            error_day.textContent = "Invalid date !";
            return;
        } else {
            n = true;
            console.log(n);
        }
    
        if (n < +1) {
            n = false;
            error_day.textContent = "Invalid date !";
            return;
        } else {
            n = true;
            console.log(n);
        }

        if (n === 0) {
            n = false;
            error_day.textContent = "Invalid !";
            return;
        } else {
            n = true;
            console.log(n);
        }
    }  
});

//inputmonth
let m = input_month
input_month.addEventListener("input" , (m)=> {
    function input_month(min, max, m) {
        if (m >+12) {
            m = false;
            error_day.textContent = "Invalid month !";
            return;
        } else {
            m = true;
            console.log(m);
        }
    
        if (m < +1) {
            m = false;
            error_day.textContent = "Invalid month !";
            return;
        } else {
            m = true;
            console.log(m);
        }

        if (m === 0) {
            m = false;
            error_day.textContent = "Invalid !";
            return;
        } else {
            m = true;
            console.log(m);
        }
    }
});

//inputyear
const d = new Date.now 
let y = input_year
input_year.addEventListener("input" , (y)=> {
    function input_year(min, max, y) {
        if (y > d) {
            y = false;
            error_day.textContent = "Year is in the future !";
            return;
        } else {
            y = true;
            console.log(y);
        }

        if (y === 0) {
            y = false;
            error_day.textContent = "Invalid !";
            return;
        } else {
            y = true;
            console.log(y);
        }
    }
});

//Submit button calculations
submit_btn.addEventListener("onclick" , CalculateAge);
function CalculateAge() {
    if (InputEvent=true) {
        let birthday = "$(input_month)/$(input_day)/$(input_year)";
        console.log('birthday');
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay;
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;
    } else {
        alert("input error!");
    }
}