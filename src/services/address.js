const axios = require('axios');

export default class AddressService {
    constructor(){
        this.state = {
            baseurl: 'http://localhost:3001/api/address'
        };
    }


    async getAllAddresses() {
        try {
            return await axios.get('http://localhost:3001/api/address')
        } catch (error) {
            console.log(error);
        }

    //     let addressList = [
    //         {
    //             "address": {
    //                 "addressLine1": "212 Hubbard Street",
    //                 "addressLine2": "",
    //                 "city": "Santa Cruz",
    //                 "state": "CA",
    //                 "zip": "95060",
    //                 "people": [        
    //                     {
    //                         "firstName": "Ashley",
    //                         "lastName": "Mayfield",
    //                         "birthdate": "1989-12-04T00:00:00-06:00"
    //                     }
    //                 ],
    //                 "groups": ["Christmas Cards"]
    //             }
    //         }
    //     ];
    //    return addressList;
        // axios({
        //     method: 'get',
        //     url: 'http://localhost:3001/api/address',
        //     responseType: 'json'
        // })
        // .then(function (response) {
        //     console.log(response);
        //     return response;
        //   })
        //   .catch((err) =>{
        //       console.log(err);
        //   })

        // axios.get('https://localhost:3001/api/address')
        // .then((res) => {
        //     console.log(res);
        //     return res;
        // })
        // .catch((err) => {
        //     console.log(`in err\n${err}`);
        // });
    }
}