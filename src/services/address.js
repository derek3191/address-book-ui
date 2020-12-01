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
            if (error.response.status === 500){
                return error.response;
            }
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

    async updateAddress(address){
        try {
            return await axios.put(`http://localhost:3001/api/address/${address._id}`, address);
        } catch (error) {
            console.log(error);
            if (error.response.status === 500){
                return error.response;
            }
            return null;
        }
    }
}