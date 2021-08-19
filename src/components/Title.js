import React , {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { FaEllipsisH } from 'react-icons/fa';
import '../css/style.css'


function Title({title}){
    const [name, setName] = useState(title);

    function onChangeText(e) {
        setName(e.target.value)
        console.log(name)
    }

    return (
        <div className='container'>
            <div className='header'>
                <TextField 
                    id="standard-basic" 
                    value={name} 
                    onChange={onChangeText}
                    InputProps={{
                        disableUnderline: true,
                    }}
                />
                <FaEllipsisH/>
            </div>
        </div>
    )
}

export default Title;