const countDown = (seconds) => {
    seconds -=1
    if (seconds > 0){
        setTimeout(() => {
            console.log(`${seconds} segundos` )
        }, 1000)
        countDown(seconds)
    } if (seconds == 0) {
        console.log(`Level completed`)
    }
}

countDown(11)