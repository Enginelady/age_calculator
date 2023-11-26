//selecting output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");
//seleting input element
let isValid = false;
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");
//selecting error elements
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");
//user input checks
input_day.addEventListener('input', e








// input_day.addEventListener('input', e=>(
//     if () {
//         error_day.textContent = "Must be a valid date !";
//         isValid = false;
//     ) else {
//         isValid = true;
//         error_day.textContent = " ";
//     }
//     if (+input_day.value === 0) {
//         isValid = false;
//         error_day.textContent = "This field is required !";
//         isValid = false;
//     } else {
//         error_day.textContent = " ";
        
//     }
// ));