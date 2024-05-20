import axios from "axios";

import State from "./State";

class Rest {
    state = State.getState();
    MAIN_HOST = process.env.REACT_APP_API_HOST_NAME;
    ACCESS_TOKEN = this.state.getItem('accessToken', true)?.token; // get token from global storage

    async get(endpoint, customMethod = 'GET') {
        try {
            let options = {
                method: customMethod,
                url: this.MAIN_HOST+endpoint
            }
            if(this.ACCESS_TOKEN !== null || this.ACCESS_TOKEN !== undefined) {
                options['headers'] = {
                    'authorization': `Bearer ${this.ACCESS_TOKEN}`
                }
            }
            const response = await axios(options);

            /**
             * Validate response data
             * throw clean data with valid attributes
             */
            let callback = {
                success: false,
                statusCode: response.status,
                message: response.statusText,
                data: null
            }

            /**
             * Flag as true when statusCode beginning with 200
             */
            if([200,201,202,203,204,205].includes(response.status)) {
                callback.success = true;
                callback.data = response.data;
            }

            /**
             * send callback
             */
            return callback;
        } catch (error) {
            return {
                success: false,
                statusCode: error?.response?.status,
                message: error?.message,
                data: null
            }
        }
    }
    
    async post(endpoint, data, customMethod = 'POST') {
        try {
            let options = {
                method: customMethod,
                url: this.MAIN_HOST+endpoint,
                data: data
            }
            if(this.ACCESS_TOKEN !== null || this.ACCESS_TOKEN !== undefined) {
                options['headers'] = {
                    'authorization': `Bearer ${this.ACCESS_TOKEN}`
                }
            }
            const response = await axios(options);

            /**
             * Validate response data
             * throw clean data with valid attributes
             */
            let callback = {
                success: false,
                statusCode: response.status,
                message: response.statusText,
                data: null
            }

            /**
             * Flag as true when statusCode beginning with 200
             */
            if([200,201,202,203,204,205].includes(response.status)) {
                callback.success = true;
                callback.data = response.data;
            }

            /**
             * send callback
             */
            return callback;
        } catch(error) {
            return {
                success: false,
                statusCode: error?.response?.status,
                message: error?.message,
                data: null
            }
        }
    }
    
    async put(endpoint, data) {
        return await this.post(endpoint, data, 'PUT');
    }
    
    async del(endpoint) {
        return await this.get(endpoint, 'DELETE');
    }
}

export default Rest;