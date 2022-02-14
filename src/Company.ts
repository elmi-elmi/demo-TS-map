import faker from '@faker-js/faker';

export class Company {
    companyName:string;
    companyPhrase:string;
    location:{
        lat:number;
        lng:number;
    };
    color:'blue';

    constructor() {
        this.companyName = faker.company.companyName();
        this.companyPhrase = faker.company.catchPhrase();
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }

    }

    markerContent():string{
        return `
        <div>
           <h1> User name: ${this.companyName}</h1>
           <h3>${this.companyPhrase}</h3>
        </div>
        `
    }
}