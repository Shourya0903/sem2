function reverseNumber() {


    let n =
    Number(document.getElementById("num").value);


    let reverse = 0;


    while(n > 0) {


        let digit = n % 10;


        reverse =
        reverse * 10 + digit;


        n =
        Math.floor(n / 10);

    }


    document.getElementById("result").innerHTML =
    "Reversed Number = " + reverse;


}