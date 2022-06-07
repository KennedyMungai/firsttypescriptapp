import React from 'react'
import "./styles.css"

const InputField = () => {
    return (
        <form action="" className="input">
            <input type="input" className="input_box" placeholder='Enter a task'/>
            <button className="input_submit" type='submit'>Go</button>
        </form>
    )
}

export default InputField