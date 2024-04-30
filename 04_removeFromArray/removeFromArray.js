const removeFromArray = function(array, ...argsToRemove) {
    const newArray = [];

    array.forEach(element => {
        if (!argsToRemove.includes(element)) {
            newArray.push(element);
        }    
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
