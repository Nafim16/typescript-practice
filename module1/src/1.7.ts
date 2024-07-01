{
    // spread operator
    // rest operator
    // destructuring

    // spread operator
    const bros1: string[] = ['Dewan', 'Abdur', 'Muhaimin'];
    const bros2: string[] = ['Dewan', 'Faizul', 'Kabir'];
    bros1.push(...bros2);

    const mentors1 = {
        typescript: 'mejba',
        redux: 'mir',
        dbms: 'mijan'
    }
    const mentors2 = {
        prisma: 'feroz',
        next: 'tonmoy',
        cloud: 'nafim'
    }
    const mentorList = {
        ...mentors1,
        ...mentors2
    }



    // rest operator
    const greetFriends = (...friends: string[]) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);

        friends.forEach((friend: string) => console.log(`Hi ${friend}`))

    };
    greetFriends('Dewan', 'Abdur', 'Muhaimin');

    
}




