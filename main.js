// Answer 1

var avg = items.reduce(function(a, b) {
  return a + b.price
}, 0)

var avg = avg / items.length
var avg = avg.toFixed(2)
dcoument.querySelector("#answer1").innerHTML = `The average price is $${avg}`

// Answer 2

var filter = items
  .filter(function(a) {
    if (a.price > 14.0 && a.price < 18.0) return true
    else {
      return false
    }
  })
  .map(function(a) {
    return a.title
  })
document.querySelector("#anwer2").innerHTML = filtr.join(`\n\n`)

// Answer 3

var name = []
var currency = items.filter(function(arr) {
  if (arr.currency_code === "GBP") {
    return arr
  }
})
console.log(currency[0]["currency_code"])
document.querySelector(
  "#answer3"
).innerHTML = `${currency[0]["title"]} costs &#65505;${currency[0]["price"]}`

// Answer 4

let woodstuff = items.filter(function(word) {
  return word.materials.includes("woodstuff")
})

console.log(woodstuff)

let html3 = ""
woodItems.forEach(function(item) {
  html3 += item.title + "<br>"
})

document.querySelector("#answer4").innerHTML = `${html3}`

// Answer 5

var eight = items
  .filter(function(a) {
    if (a.materials.length >= 8) return true
    else {
      return false
    }
  })
  .map(function(a) {
    return `${
      a.title
    } has ${a.materials.length} materials:\n\n${a.materials.join("\n")}\n\n`
  })

document.querySelector("#answer5").innerHTML = eight

// Answer 6

var made = items.filter(function(a) {
  if (a.who_made === "i_did") {
    return true
  } else {
    return false
  }
})
