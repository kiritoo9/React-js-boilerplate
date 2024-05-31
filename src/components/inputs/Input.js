import State from "./../../libraries/State";

function Input(props) {
	/**
	 * Call state core
	 */
    const state = new State(null, true).Storage.getState();

    /**
     * Defining attributes
     */
    const attributes = {
        direction: props?.direction !== undefined ? props.direction : 'vertical',
        label: props?.label !== undefined ? props.label : 'Input Name',
        type: props?.type !== undefined ? props.type : 'text',
        name: props?.name !== undefined ? props.name : null,
        placeholder: props?.placeholder !== undefined ? props.placeholder : '',
        className: props?.className !== undefined ? props.className : '',
        defaultValue: props?.defaultValue !== undefined ? props.defaultValue : '',
        readOnly: props?.readOnly !== undefined ? props.readOnly : false,
        validator: props?.validator !== undefined ? props.validator : {}
    }

    /**
     * Regist this input to state
     */
    if(attributes.name !== "") state.setItem(attributes.name, {
        value: attributes.defaultValue,
        validator: attributes.validator
    });

    /** 
     * Render view
     */
    return (
        <div>
            {attributes.direction?.toLowerCase() === 'vertical' && (
                <div className="mb-4">
                    <label className="form-label">{attributes.label}</label>
                    <input 
                        type={attributes.type}
                        className={`form-control ${attributes.className} ${
                          attributes.readOnly ? "bg-light" : ""
                        }`}
                        placeholder={attributes.placeholder}
                        defaultValue={attributes.defaultValue}
                        readOnly={attributes.readOnly}
                        onChange={(e) => {
                            if(attributes.name) state.setItem(attributes.name, e.target.value);
                        }}
                    />
                    <i className="text-danger" id={`${attributes.name}-error-message`}></i>
                </div>
            )}
        </div>
  	);
}

export default Input;
