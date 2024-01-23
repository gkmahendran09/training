function fibevensum(n){
    let a=1;
    let b=2;
    let sum=0;
        while(b<=n){
            if(b%2==0){
                sum+=b;
            }
            let c=a+b;
            a=b;
            b=c;
        }
        return sum;
    }
    const n=4000000;
    const result=fibevensum(n);
    document.write("<p>Sum of even-valued Fibonacci terms not exceeding " + n + " is: " + result + "</p>");