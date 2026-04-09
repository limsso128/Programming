export default function Checkbox (props) {
    const {id, children, ...rest} = props;
    return (
        <>
            <input{...rest} id={`chk-${id}`} />
            <label htmlFor={`chk-${id}`} className="todo__label">옷 싸기</label>
        </>
    )
}
