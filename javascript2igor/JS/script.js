alert("Привет, это работа Немченко Игоря!")

//1
a = 5;
b = 1;
c = 5;
d = 0;

//2
e = 3;
f = 2;
x = 6;
y = 5;

//3
let year = prompt('Введите год, чтобы узнать чемпиона Англии по футболу', '');
if (year < 2011) {
    alert('Статистика еще не велась');
} else if (year > 2022) {
    alert('Все лучшее впереди!');
} else if (year === 2022) {
    alert('Сезон еще идет');
} else if (year === 2015 || year === 2017) {
    alert('Челси');
} else if (year === 2012 || year === 2014 || year === 2018 || year === 2019 || year === 2021) {
    alert('Манчестер Сити');
} else if (year === 2011 || year === 2013) {
    alert('Манчестер Юнайтед');
} else if (year === 2020) {
    alert('Ливерпуль');
} else if (year === 2016) {
    alert('Лестер Сити');
}

// 4)
let login = prompt('Введите логин', 'Логин');
if (login === 'Админ') {
    let password = prompt('Введите пароль', 'Пароль')
    if (password === 'Я главный') {
        alert('Здравствуйте!');
    } else if (password === '' || password === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login === '' || login === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}

// 5)
for (let oddNumber = 7; oddNumber <= 15; oddNumber++) {
    if (oddNumber === 12) break;
    if (oddNumber % 2 === 0) continue;
    alert(oddNumber);
}
alert('12. Цикл прерван');

// 6)
let j = 0;
while (j < 5) {
    console.log(`number ${j}!`);
    j++;
};