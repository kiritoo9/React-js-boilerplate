/**
 * Library validator
 * Homade library for validate string input
 * 
 * version 1.0
 */

class Validator {

    /**
     * @var obj msg_translate - for translating error message
     */
    msg_translate = {
        required: 'Field is required',
        min_length: 'Minimum length of this value is',
        max_length: 'Maximum length of this value is',
        is_email: 'Your value must be email',
        is_number: 'Your value must be number 0-9',
    }

    /**
     * @function is_required
     * check value input in 3 conditions (empty string, null and undefined)
     */
    is_required = (val) => {
        if(val === '' || val === null || val === undefined) return this.msg_translate['required'];
        return null;
    }

    /**
     * @function min_length
     * check minimum length of input
     */
    min_length = (val, limitter) => {
        if(val?.toString().length < parseInt(limitter)) return this.msg_translate['min_length'] + ` ${limitter?.toString()} char(s)`;
        return null;
    }

    /**
     * @function max_length
     * check maximum length of input
     */
    max_length = (val, limitter) => {
        if(val?.toString().length > parseInt(limitter)) return this.msg_translate['max_length'] + ` ${limitter?.toString()} char(s)`;
        return null;
    }

    /**
     * @var boolean is_email - check if string input contain @ or email format
     */
    is_email = false;

    /**
     * @var boolean is_number - check if input aroun 0-9
     */
    is_number = false;

    /**
     * 
     * @var obj schema - list available attributes
     */
    schema = {
        required: this.is_required,
        min_length: this.min_length,
        max_length: this.max_length,
    }

    constructor(value = '', payloads = {}) {
        let err = [];

        for(let i = 0; i < Object.keys(payloads).length; i++) {
            const field_name = Object.keys(payloads)[i];
            const field_value = payloads[field_name];
            if(this.schema[field_name] !== undefined) {
                const response = this.schema[field_name](value, field_value);
                if(response) err.push(response);
            }
        }

        return err;
    }

}

export default Validator;