const input = [2, 0, 5, 4, 0];

const nonZero = input.filter(num => num !== 0);
const zeros = input.filter(num => num === 0);

const output = [...nonZero, ...zeros];

console.log(output);

const input1 = [4.1, 4.6, 6.2, 6.7]; 
const output1 = input1.reduce((acc, num) => 
    { const key = Math.round(num); 
        if (!acc[key]) { acc[key] = []; } 
        acc[key].push(num); return acc; }, {}); 
        console.log(output1);

        // {
        //     4:[4.1],
        //     5:[4.6],
        //     6:[6.2],
        //     7:[6.7]
        // }