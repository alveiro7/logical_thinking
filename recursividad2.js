const timer = (num) => {
    num += 10
    console.log(`numero ${num}`)
    if(num < 50)
    {
        setTimeout(timer, 5000, num)
    } else {
        console.log("Happy New Year!!!")
    }
}

timer(10)