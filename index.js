// Tanpa Built-in Function
function konversi(C){
    let suhu = {
        Kelvin: C + 273.15,
        Fahrenheit: (9/5 * C) + 32,
        Reamur: R = (4/5) * C
    };

    let daftarSuhu = [
        "Kelvin",
        "Fahrenheit",
        "Reamur"
    ];

    for (let x = 0; x < daftarSuhu.length; x++){
        let nama = daftarSuhu[x];
        console.log(nama + ": " + suhu[nama])
    }
}

konversi(10)

// Built-in Function

function konversiBuiltIn(C){
    let suhu = {
        Kelvin: C + 273.15,
        Fahrenheit: (9/5 * C) + 32,
        Reamur: R = (4/5) * C
    };

    let daftarSuhu = [
        "Kelvin",
        "Fahrenheit",
        "Reamur"
    ];

    daftarSuhu.forEach(namaSuhu => (
        console.log(namaSuhu + ": " + suhu[namaSuhu])
    ))
}

konversiBuiltIn(10)