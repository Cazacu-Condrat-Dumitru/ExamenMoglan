const btnPlus = document.getElementById("btn_plus");
let inputDisabled = document.getElementById("inputS")
const btnMinus = document.getElementById("btn_minus");

inputDisabled.disabled = true;
inputDisabled.value = 0;
btnMinus.disabled = true;

btnPlus.onclick = () => {
    if (inputDisabled.value >= 0 && inputDisabled.value <= 9) {
        inputDisabled.value++;
        if (inputDisabled.value == 9) {
            btnPlus.disabled = true;
        } else {
            btnMinus.disabled = false;
        }

    }
};

btnMinus.onclick = () => {
    if (inputDisabled.value >= 0 && inputDisabled.value <= 9) {
        inputDisabled.value--;
        if (inputDisabled.value == 0) {
            btnMinus.disabled = true;
        } else {
            btnPlus.disabled = false;
        }
    }
}