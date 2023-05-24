let count = prompt("Введите число")

const func2 = (num) => {
    if (num < 0) {
      return "Отрицательное число";
    } else if (num > 0) {
      return "Положительное число";
    } else {
      return "Ноль";
    }
}

alert(func2(count));

