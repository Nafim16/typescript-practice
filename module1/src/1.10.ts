{
    //UNION TYPES


    // type FrontendDev = 'fakibaz' | 'junior'
    // type FullStackDev = 'frontend' | 'senior'

    // type Dev = FrontendDev | FullStackDev

    // const newDev: FrontendDev = 'junior'

    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: 'male' | 'female';
    //     bloodGroup: 'O+' | 'A+' | 'B+';
    // }

    // const user1: User = {
    //     name: 'Dewan',
    //     email: 'nafim@gmail.com',
    //     bloodGroup: 'O+',
    //     gender: 'male'
    // }

    type FrontendDev = {
        skills: string[];
        designation1: 'Frontend Dev';
    }

    type BackendDev = {
        skills: string[];
        designation2: 'Backend Dev';
    }


    type FullStackDev = FrontendDev & BackendDev

    const fullstack: FullStackDev = {
        skills: ['mongo', 'express', 'react', 'node'],
        designation1: 'Frontend Dev',
        designation2: 'Backend Dev',
    }

}