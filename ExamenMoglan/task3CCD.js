let array = [{ x: 1, y: 2 }, { x: null, y: 4 }, { x: 3, y: 4 }, { x: 3, y: undefined }];

const sort = () => {
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i].x) != "number" || typeof(array[i].y) != "number") {
            delete array[i];
        }
    }
    return array;
}

console.log(sort());