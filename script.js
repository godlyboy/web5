function resultproiz()
{
    let znach1,znach2,rezult;
    znach1 = document.getElementById('a').value;
    znach1 = parseInt(znach1);
    znach2 = document.getElementById('b').value;
    znach2 = parseInt(znach2);
    if(znach1<0||znach2<0){
        alert('Вводите только числа(положительные)');
    }
    if(znach1===0||znach2===0){
        alert('Ввести');
    }
    rezult = znach1*znach2;
    if(rezult<=0){
        alert('Результат не может принимать отрицательные значения');
        let str = "Ошибка";
        document.getElementById('out').innerHTML = str;
    }
    else
    {
        document.getElementById('out').innerHTML = rezult;
    }
}
window.addEventListener('DOMContentLoaded', function (proiz) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("result-btn");
    b.addEventListener("click", proiz);
});
