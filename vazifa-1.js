let sinf = {
    1: "1-sinf",
    2: "2-sinf",
    3: "3-sinf",
}

let xonalar = {
    1: "Laboratoriya xonasi",
    2: "Sport Zal",
    3: "Musiqa xonasi"
}

let fanlar = {
    1: "Adabiyot",
    2: "Kimyo",
    3: "Musiqa",
}

let teacher = {
    1: {
        name: "Michael",
        surname: "Jackson",
        type: "Music",
        phoneNumber: +99899654656,
        address: "Parkwood street, 23",
        salary: 30000,
    },
    2: {
        name: "Leo",
        surname: "Messi",
        type: "Art",
        phoneNumber: +998996545485,
        address: "Wood street, 213",
        salary: 50000,
    },
    3: {
        name: "Conor",
        surname: "Mcgreggor",
        type: "Sport",
        phoneNumber: +99899615156,
        address: "ireland street, 423",
        salary: 70000,
    }
};

let school = {
    1: {teacher},
    2: {sinf},
    3: {xonalar},
    4: {fanlar},
}

console.log(typeof JSON.stringify(school));