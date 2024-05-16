import State from "./../../libraries/State";

function Input(props) {

    /**
     * Call state core
     */
    const state = State.getState();

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
    }

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
                        className="form-control" 
                        placeholder={attributes.placeholder}
                        onChange={(e) => {
                            if(attributes.name) state.setItem(attributes.name, e.target.value);
                        }}
                    />
                </div>
            )}
        </div>
    )
}

export default Input;