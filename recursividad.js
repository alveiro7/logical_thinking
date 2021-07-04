const cuentaRegresiva = (num) => {
    num -=1

    if(num > 0) {
        console.log(num)
        cuentaRegresiva(num)
    } else{
        console.log("Happy New Year!!!")
    }
}

cuentaRegresiva(10)