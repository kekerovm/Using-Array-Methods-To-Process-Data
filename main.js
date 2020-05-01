// Answer 1

let avg = items.reduce(function(a, b) {
  return a + b.price
}, 0) / items.length

items.reduce((a,b) => a + b.price) / items.length

dcoument.querySelector(
  "#answer1"
  ).innerHTML = `The average price is $${avg.toFixed}`

// Answer 2

// let between = items.filter(function(item){
//   return item.price > 14 && items.price < 18
// }).map(function(item){
//   return item.title
// }).join("\n\n")

let between = items.filter(item => item.price > 14 && item.price < 18).map(item => item.title).join("\n\n")

// let html = ''
// between.forEach(function(item){ 
//   html += item.title + '\n\n'
// })

document.querySelector("#anwer2").innerHTML = between

// Answer 3

// let gbpitem = items.filter(function(item){
//   return item.currency_code === 'GDP'
// })[0]

let gbpitem = items.find(item => item.currency_code === 'GDP')

document.querySelector("#anwer3").innerHTML = `${gbpitem.title} costs &pound;${gbpitem.price}`

// Answer 4

let madeofwood = items
  .filter(function(item) {
    return item.materials.includes("wood")
  })
    .map(function(item) {
      return item.title 
    })
    .join('\n\n')

document.querySelector("#answer4").innerHTML = madeofwood

// Answer 5

let eight = items.filter(function(item) {
  return items.materials.length >= 8
})
  .map(function(item){
  return `${item.title} has ${items.materials.length} materials;\n\n${items.materials.join('\n')}`
  }).join("\n\n")

document.querySelector("#answer5").innerHTML = eight

// Answer 6

document.querySelector("#answer6").innerHTML = `${items.filter(item => item.who_made == "i_did").length} were made by their sellers`