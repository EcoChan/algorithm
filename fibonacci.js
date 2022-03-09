// 斐波那契: 1, 1, 2, 3, 5, 8 .....  fibonacci(n-2), fibonacci(n-1), fibonacci(n);

// 代码优美逻辑清晰。但是有重复计算的问题，如：当n为5的时候要计算fibonacci(4) + fibonacci(3)，
// 当n为4的要计算fibonacci(3) + fibonacci(2) ，这时fibonacci(3)就是重复计算了。运行 fibonacci(50) 会出现浏览器假死现象，毕竟递归需要堆栈，数字过大内存不够。
// function fibonacci(n) {  
// 	if (n <= 2) return 1;
// 	return fibonacci(n-2) + fibonacci(n-1)
// }

let fibonacci = function () {
    let memory = [0, 1];

    let fib = function (n) {
        if (memory[n] === undefined) {
            memory[n] = fibonacci(n-2) + fibonacci(n-1) ;
        }
        return memory[n];
    }
    return fib;
}();



// for 循环
function fibonacci(n) {
    var n1 = 1, n2 = 1, sum;
    // for (let i = 2; i < n; i++) {
    //     sum = n1 + n2
    //     n1 = n2
    //     n2 = sum
    // }
    // return sum

    for (let i = 2; i < n; i++) {
        [n1, n2] = [n2, n1 + n2]
    }
    return n2;
}

fibonacci(30)