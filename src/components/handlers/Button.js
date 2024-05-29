import State from "./../../libraries/State";
import Validator from "./../../libraries/Validator";

function Button(props) {
	/**
	 * Call global core
	 */
  	const state = State.getState();

    /**
     * Defining attributes
     */
    const attributes = {
        label: props?.label !== undefined ? props.label : 'Input Name',
        className: props?.className !== undefined ? props.className : '',
        action: props?.action !== undefined ? props.action : null
    }

    /**
     * Validate all input by state
     * Send error messages as callback to user function
     * 
     * @var array error_messages
     */
    const validateInputs = () => {
        let error_messages = [];

        /**
         * Validate input
         */
        const input_attributes = state.getAllItem();
        for(let i = 0; i < Object.keys(input_attributes).length; i++) {
            const obj = input_attributes[Object.keys(input_attributes)[i]];
            
            const validator = new Validator(obj?.value, obj?.validator);
            if(validator.length > 0) {
                error_messages.push({
                    name: Object.keys(input_attributes)[i],
                    errors: validator
                });
            }
        }

        /**
         * Handle response
         */
        if(error_messages.length <= 0) {
            if(attributes.action) attributes.action();
        } else {
            /**
             * Send error response to the input component
             */
            console.log(error_messages);
        }
    }

    /** 
     * Render view
     */
    return (
        <div>
            <button 
                className={`btn ${attributes.className}`}
                onClick={validateInputs}
            >
                {attributes.label}
            </button>
        </div>
  	);
}

export default Button;