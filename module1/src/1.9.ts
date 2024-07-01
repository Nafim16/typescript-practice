{
    //type Alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: 'Muhaimin',
        age: 25,
        gender: 'male',
        contactNo: '-17122323323',
        address: 'syl'
    };

    const student2: Student = {
        name: 'Nafim',
        age: 24,
        gender: 'male',
        address: 'dhk'
    }


    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;




}