// object destructuring

const user = {
    id: 194,
    name: {
        firstName: 'Dewan',
        middleName: 'Muhaimin',
        lastName: 'Nafim'
    },
    contactNo: '01712232323',
    address: 'Akhand',
};

const { contactNo: phone, name: { middleName: mid } } = user;


// array destructuring

const myFriends = ['chandler', 'joey', 'ross', 'monica'];

const [, , c, ...rest] = myFriends;