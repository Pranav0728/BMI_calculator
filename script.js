const heightinp = document.querySelector("#height");
const weightinp = document.querySelector("#weight");
const result = document.querySelector("#para");
const button = document.querySelector("#btn");
const img = document.querySelector("#img1");

const myfunc = () => {
  const hvalue = heightinp.value;
  const wvalue = weightinp.value;

  if (hvalue === "" || isNaN(hvalue))
    result.innerHTML = "Provide a valid Height!";
  else if (wvalue === "" || isNaN(wvalue))
    result.innerHTML = "Provide a valid Weight!";
  else {
    let bmi = (wvalue / ((hvalue * hvalue) / 10000)).toFixed(2);

    if (bmi < 18.6)
      (result.innerHTML = `Under Weight : <span>${bmi}</span>`),
        (img.src = "UW.jpg");
    else if (bmi >= 18.6 && bmi <= 24.99)
      result.innerHTML = `Normal : <span>${bmi}</span>`,
      (img.src = "H.jpg");
    else if (bmi >= 25 && bmi <= 29.99)
      result.innerHTML = `Over Weight : <span>${bmi}</span>`,
      (img.src = "OW.jpg");
    else if (bmi >= 30 && bmi <= 39.99)
      result.innerHTML = `Obese : <span>${bmi}</span>`,
      (img.src = "O.jpg");
    else result.innerHTML = `Severely Obese : <span>${bmi}</span>`,
    (img.src = "SO.jpg");
  }
};

button.addEventListener("click", myfunc);
