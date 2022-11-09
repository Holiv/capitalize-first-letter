const capitalizeFunction = (name) => {
    //using the split method to separate the string an array of strings.
    let names = name.split(' ');
    const upperNames = [];
    //using the for of to iterate over the array and work with each name at a time
    for (const n of names) {
        //from right to left, first using the replace method to work directly in the first letter of the string and the toUpperCase method to substitute the lower case character for the upper case.
        //then the push method is called to add the words together in a new array
         upperNames.push(n.replace(n[0], n[0].toUpperCase()));
    }
    //using the join method to transform the array of strings in a entire string.
    console.log(upperNames.join(' '));
    //will print to the console: Jessica Ann Smith Davis
}
const nameString = 'jessica ann smith davis';
capitalizeFunction(nameString);