import fs from 'fs';

const files = fs.readFileSync('./inputs.txt', 'utf-8');

const array = files.trim().split(/\r?\n/)

const newArr = array.map(item => {
    const chars = item.split('')

    const numbers = chars.filter(el => !isNaN(Number(el)))

    const firstNum = numbers[0]
    const lastNum = numbers[numbers.length - 1]

    return Number(firstNum + lastNum)
})

console.log(newArr.reduce((a,b) => a + b, 0))