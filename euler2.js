var x = 1
var y = 1
var z = 0
var sum = 1


while (x < 4000000) {
    z = y
    y = x
    x = y + z
    if (x % 2 === 0) {
        sum += x
    }
}
console.log(sum)