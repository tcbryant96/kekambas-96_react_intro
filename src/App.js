import ButtonCounter from './components/ButtonCounter';
import Navbar from "./components/Navbar";
import Racers from './components/Racers';

function App(props) {

    return (
        <>
            <Navbar name='Brian' city='Chicago'/>
            <div className='container'>
                <ButtonCounter />
                <Racers />
            </div>
        </>
    )
}

export default App;
