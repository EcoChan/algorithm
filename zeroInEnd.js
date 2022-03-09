// 将数组内所有 0 移动到最后；

let arr = [1, 2, 3, 0, 0, -1, -2, 0, 3];

function zeroInEnd(arr) {
	let length = arr.length;
	for (let i = 0; i < length; i++) {
		for (let j = length - 1; j > i; j--) {
			if (arr[j] === 0) j--;
			if (arr[i] === 0 ) {
				let temp = arr[j];
				arr[j] = arr[i]; 
				arr[i] = temp;
			}
		}
	}
	return arr;
}

console.log(zeroInEnd(arr));