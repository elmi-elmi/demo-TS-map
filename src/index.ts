import {User} from './User';
import {Company} from "./Company";
import {CustomMap} from './CustomMap'
//
const user = new User();
const company = new Company();
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);

// console.log('hi there!');
// const user = new User();
// const company = new Company();
//
// console.log(user)
// console.log(company)

// console.log(google)



// let map: google.maps.Map;
// function initMap(): void {
//     map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//     });
// }


