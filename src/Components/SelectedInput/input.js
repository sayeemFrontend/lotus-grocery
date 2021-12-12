const Input = (props) => {
    return (
        <div className="customSelectInput">
            <select value={props.value} {...props} onChange={props.changed} className="form-select" aria-label="Default select example">
                {props.options ? props.options.map((op) => (
                    <option key={op} value={op}>{op}</option>
                )) : ""}
            </select>
        </div>
    );
}

export default Input;