const axios = require('axios');

export default class AddressService {
    constructor(){
        this.state = {
            baseurl: 'http://localhost:3001/api/address'
        };
    }

    getToken() {
       return axios.CancelToken.source();
    }

    async getAddressById(id) {
        try {
            return await axios.get(`http://localhost:3001/api/address/${id}`);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getAllAddresses() {
        try {
            return await axios.get('http://localhost:3001/api/address')
        } catch (error) {
            console.log(error);
        }
    }

    async getAllAddressesByName(name){
        try{
            return await axios.get(`http://localhost:3001/api/address/person?name=${name}`)
        } catch (error){
            console.log(error);
        }
    }

    async getAllAddressesByFilter(filter){
        try{
            return await axios.post('http://localhost:3001/api/address/filter/', filter);
        } catch (error){
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