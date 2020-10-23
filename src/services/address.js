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
    }

    async getAllGroups() {
        try { 
            return await axios.get('http://localhost:3001/api/address/groups')
        } catch (error){
            console.log(error);
        }
    }
}