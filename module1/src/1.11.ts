{
    //ternary operator || optional chaining || nullish coalescing operator


    const age: number = 15;

    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Not Adult");
    }


    const isAdult = age >= 18 ? 'adult' : 'not adult';
    // console.log({isAdult});

    // nullish coalescing operator

    const isAuthenticated = "";
    const res1 = isAuthenticated ?? 'guest';
    const res2 = isAuthenticated ? isAuthenticated : 'guest'
    console.log({ res1 }, { res2 });


    type User={
        name:string;
        address:{
            city:string;
            road:string;
            presentAddress:string;
            permanentAddress?:string;
        }
    };

    const user:User={
        name:'dewan',
        address:{
            city:'syl',
            road:'bishsho road',
            presentAddress:'sylhet town',
        },
    };

    const permanentAddress=user?.address?.permanentAddress ?? 'no permanent address';
    console.log({permanentAddress});




}