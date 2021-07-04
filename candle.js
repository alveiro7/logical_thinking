const onCandle = (statusCandle) => {
    if (!statusCandle) {
        console.log(`Buscando un Zippo`)
        setTimeout(() => {
            console.log(`Encendiendo la vela`)
            console.log(`La vela esta prendida ${statusCandle}`)
        }, 5000)
        statusCandle = true
    }
}

onCandle()
