// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
//start at 1, end at 100,

for (let i=1; i <= 100; i++)
{
    // when a number divided by 15 has no remainder fizzbuzz
    if (i % 15 == 0)
        console.log("FizzBuzz");
    // when a number divided by 3 has no remainder fizz
    else if (i % 3 == 0)
        console.log("Fizz");
    // when a number divided by 5 has no remainder buzz
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}