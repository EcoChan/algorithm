let arr = [2, 3, 1, 0, 1, 7, 4, 6, 5]

function sort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1 - i; j ++) {
			if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
		}
	}
	return arr;
}

console.log(sort(arr))