export default function DigitButton({ dispatch, digit}) {
    return <button onClick={() => dispatch({type:})}>{digit}</button>
}