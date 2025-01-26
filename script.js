function calculatePrice() {
    const exchangeRate = 26;

    let dollars = prompt("Введіть кількість доларів:");

    if (dollars === null || dollars.trim() === "" || isNaN(dollars) || Number(dollars) <= 0) {
        alert("Будь ласка, введіть коректне числове значення!");
        return;
    }

    dollars = Number(dollars);

    const price = dollars * exchangeRate;

    alert(`${dollars} доларів коштує ${price} гривень`);
}

// Вызов функции
calculatePrice();