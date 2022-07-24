class Result {
    static checkResult(draw) {
        //check if every element is equal or unique
        const result = arr => (arr.every(e => e === arr[0]) || arr.length === (new Set(arr)).size);
        return result(draw);
    }
}