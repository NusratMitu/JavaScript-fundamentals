/* [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
3rd = 2nd + 1st
nth = (n-1)th + (n-2)th
*/
    /*
    let fibo = [0,1];
    for(let i= 2; i<=10; i++){
        fibo[i]= fibo [i-1] + fibo[i-2];

    }
    */

    
/*
    function fiboSeries(num){
        const fibo= [0,1];
        for(let i=2; i<=num;i++){
            fibo[i]= fibo [i-1] + fibo[i-2];
        }
        return fibo;
    }
    
    console.log(fiboSeries(8));
*/


    //input validation

    function fibonacciSeries(num){
        if(typeof num != 'number'){
            return 'please give a number';
        }
        else if(num <2){
            return 'give a positive num grater than 1';
        }
        const fibo= [0,1];
        for(let i=2; i<=num;i++){
            fibo[i]= fibo [i-1] + fibo[i-2];
        }
        return fibo;
    }
    // const fiboSeries = fibonacciSeries('[13]');
    // const fiboSeries = fibonacciSeries(1);
    // const fiboSeries = fibonacciSeries('mitu');

    console.log(fibonacciSeries (8));