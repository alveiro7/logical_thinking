var array = [10, 20, 50, 45, 20, 20, 120]
var i= 0
var numMayor

const numeroMayor = () => {
    if ( array [i] != null)
    {
        if (array[i] > array[i + 1])
        {
            var numMayor = array[i]
            console.log(`El numero mayor es ${numMayor}`)
        } else {
            i++
            debugger
            numeroMayor()
        }
    }
}

numeroMayor()