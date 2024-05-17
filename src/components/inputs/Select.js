import State from "./../../libraries/State";

function Select(props) {

    /**
     * Call state core
     */
    const state = State.getState();

    /**
     * Defining attributes
     */
    const attributes = {
        direction: props?.direction !== undefined ? props.direction : 'vertical',
        label: props?.label !== undefined ? props.label : 'Select',
        name: props?.name !== undefined ? props.name : null,
        className: props?.className !== undefined ? props.className : '',
        options: props?.options !== undefined ? props.options : [],
    }

    /**
     * Render view
     */
    return (
        <div>
            {(attributes.direction?.toLowerCase() === 'vertical' && attributes.options.length > 0) && (
                <div className="mb-4">
                    <label className="form-label">{attributes.label}</label>
                    <select 
                        className="form-select"
                        onChange={(e) => {
                            if(attributes.name) state.setItem(attributes.name, e.target.value);
                        }}
                    >
                        {attributes.options.map((v) => {
                            return (
                                <option value={v?.value}>{v?.label}</option>
                            )
                        })}
                    </select>
                </div>
            )}
        </div>
    )

}

export default Select;