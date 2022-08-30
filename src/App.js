import ButtonCounter from './components/ButtonCounter';
import Navbar from "./components/Navbar";
import Racers from './components/Racers';
import RacersClass from './components/RacersClass';

function App(props) {

    return (
        <>
            <Navbar name='Brian' city='Chicago'/>
            <div className='container'>
                <ButtonCounter />
                {/* <Racers /> */}
                <RacersClass />
            </div>
        </>
    )
}

export default App;
