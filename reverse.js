let ra1 = [1, 2, 3]
ra1.shift()
ra1.pop()
ra1.unshift(3)
ra1.push(1)
 console.log(ra1)


const ra2 = [1, 3, 5, 7, 9, 11]
const output2 = []
// let i2 have the reversed array by assigning it to the .length of ra2-1. end at an index of >=0. minus one for each index
for ( let i2 = ra2.length -1; i2 >= 0; i2--){
    //.push the reversed value into output
    output2.push(ra2[i2])
}
console.log(output2)


const ra3 = [20, 50, 30, 60, 200]
const output3 = []
// let i3 have the reversed array by assigning it to the .length of ra3-1 and ending at an index of >=0. minus one for each index
for ( let i3 = ra3.length -1; i3 >= 0; i3--){
    output3.push(ra3[i3])
}
console.log(output3)

const ra4 = [1, -1, 2, -3, 5, -8, 13]
const output4 = []

for ( let i4 = ra4.length -1; i4 >= 0; i4--){
    output4.push(ra4[i4])
}
console.log(output4)