import './form.css';
import {useState} from "react";

const Form = (props) => {
    const [value, setValue] = useState('');


    return (
        <form className='form' onSubmit = {event => {
            event.preventDefault();
            props.putTodo(value);
            setValue('');
        }
        }>
            <input type="text" placeholder='Введите текст... ' className='input' value={value} onChange={e => setValue(e.target.value)}/>
        </form>
    );
};

export default Form;