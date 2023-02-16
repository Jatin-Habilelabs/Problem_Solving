const dupRemover = (arr) => {
    let count = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in count) {
            count[arr[i]] += 1
        }
        else
            count[arr[i]] = 1
    }

    console.log(Object.keys(count));
}
dupRemover([1, 2, 3, 4, 3, 2])
