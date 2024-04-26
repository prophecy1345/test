function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = [];
        for (let j = 0; j < 10; j++) {
            arr[i][j] = getRandomInt(-100, 100);
        }
    }
    return arr;
}

function printArray(arr) {
    let minRow = 0;
    let minVal = Infinity;
    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        for (let j = 0; j < row.length; j++) {
            if (row[j] < minVal) {
                minVal = row[j];
                minRow = i;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        let rowStr = i === minRow ? '* ' : '  ';
        let minPos = Infinity;
        let count = 0;
        let prev = 0;
        for (let j = 0; j < row.length; j++) {
        rowStr += row[j] + ' ';
        if (row[j] > 0 && row[j] < minPos) {
            minPos = row[j];
        }
        if (prev * row[j] > 0) {
            count++;
        } else {
            count = 1;
        }
        prev = row[j];
        }
        console.log(rowStr + '  Min positive: ' + (minPos === Infinity ? 'None' : minPos));
        console.log('  Need to replace at least ' + (count - 2) + ' numbers to avoid 3 in a row');
    }
}

let arr = createArray();
printArray(arr);
