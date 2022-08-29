import { useState } from 'react';
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App(props) {
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000},
    ]

    // Set a state for count - initial state of 0 and setCount is function to change state value of count
    const [count, setCount] = useState(0);
    // Set a state for names - initial state of [] and setNames is function to change state value of names
    const [names, setNames] = useState([]);

    // Function to be executed when a button is clicked
    function handleClick(step){
        console.log('Clicked');
        setCount(count + step);
    };

    // Function to be exectuted when the name form is submitteed
    function handleNameClick(e){
        // Prevent default of refreshing page
        e.preventDefault();
        // Get the value from the form
        const name = e.target.firstName.value;
        let newNames = [...names, name]
        // Set the state of names to be the current state of names + the new name
        setNames(newNames)
    }

    return (
        <>
            <Navbar name='Brian' city='Chicago'/>
            <div className='container'>
                <h1 className='text-center'>Hello World</h1>
                <h3 className='text-center'>Total: {count}</h3>
                {buttons.map((b, i) => <Button color={b.color} step={b.step} key={i} handleClick={handleClick} />)}
                <form onSubmit={handleNameClick}>
                    <input type='text' className='form-control' name='firstName' />
                    <input type='submit' value='Submit' />
                </form>
                {names.map((n, idx) => <p key={idx}>{n}</p>)}
            </div>
        </>
    )
}

export default App;
