import { useState } from 'react';
import './form.css'

export default function Form() {
    const [inputs, setInputs] = useState({ name: '', email: '', age: '', student: false, study: '', country: 'Egypt', message: '' });

    function formSubmit(e) {
        e.preventDefault();
        for (const input in inputs) {
            if (input !== 'student' && inputs[input].trim() === '') {
                console.log('Enter All The Data.');
                return;
            }
        }
        console.log(inputs);
    }

    return (
        <form onSubmit={e => formSubmit(e)}>
            <input onInput={e => setInputs({ ...inputs, name: e.target.value })} placeholder='Name:' value={inputs.name} />
            <input onInput={e => setInputs({ ...inputs, email: e.target.value })} placeholder='Email:' value={inputs.email} />
            <input onInput={e => setInputs({ ...inputs, age: e.target.value })} placeholder='Age:' value={inputs.age} />
            <div>
                <input type='checkbox' onChange={e => setInputs({ ...inputs, student: e.target.checked })} checked={inputs.student} />
                <label onClick={() => setInputs({ ...inputs, student: !inputs.student })}>Student</label>
            </div>
            <div className='radioBtns'>
                <div>
                    <input type='radio' onChange={e => setInputs({ ...inputs, study: e.target.value })} checked={inputs.study === 'school'} value="school" />
                    <label onClick={() => setInputs({ ...inputs, study: 'school' })}>School</label>
                </div>
                <div>
                    <input type='radio' onChange={e => setInputs({ ...inputs, study: e.target.value })} checked={inputs.study === 'university'} value="university" />
                    <label onClick={() => setInputs({ ...inputs, study: 'university' })}>University</label>
                </div>
            </div>
            <select onChange={e=> setInputs({...inputs, country: e.target.value})} value={inputs.country}>
                <option>Egypt</option>
                <option>KSA</option>
                <option>Lybia</option>
                <option>Palastain</option>
            </select>
            <textarea placeholder='Comment:' onChange={e => setInputs({ ...inputs, message: e.target.value })} value={inputs.message} />
            <input type='submit' value="Submit" />
        </form>
    );
}



