// Pure function to rearrange the digits of a number to from the biggest possible number using the same digits eg. 120 -> 210
export function biggestWithSameDigits(n: number): number {
    // ParseInt turns the string below back into an int
    return parseInt(
        // Convert the number to a string to be manipulated
        String(n)
        //.split separates the number into individual digits eg. 120 -> ['1','2','0']
        .split('')
        // Sorts the digits into a descending order
        .sort((a,b) => b.localeCompare(a))
        // Joins the resulted sort back into a single string
        .join('')
    );
}

// Map over a sequence of numbers
export function biggest(nums: number[]): number[] {
    return nums.map(biggestWithSameDigits);
}