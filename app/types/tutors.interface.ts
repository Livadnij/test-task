export interface TutorCompany {
    bs: string;
    catchPhrase: string;
    name: string;
}

export interface TutorAddress {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

export interface Tutor {
    name: string;
    id: number;
    email: string;
    phone: string;
    username: string;
    website: string;
    company: TutorCompany;
    address: TutorAddress;
}