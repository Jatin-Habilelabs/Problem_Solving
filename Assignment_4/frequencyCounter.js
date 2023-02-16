const dupRemover = (str) => {
    let count = {}
    for (let i = 0; i < str.length; i++) {
        if (str[i] in count) {
            count[str[i]] += 1
        }
        else
            count[str[i]] = 1
    }
    console.log(count);

}
dupRemover("habilelabs")
