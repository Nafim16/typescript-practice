function add(num1: number, num2: number): number {
    return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;


// object --> function --> method
const poorUser = {
    name: 'Muhaimin',
    balance: 0,
    addBalance(balance: number): string {
        return `My new Balance is : ${this.balance + balance}`
    },
};


const arr: number[] = [1, 4, 10];

const newArray: number[] = arr.map((elem: number): number => elem * elem);