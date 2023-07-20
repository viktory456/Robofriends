import React, {useEffect} from 'react'
import Cardlist from '../components/Cardlist'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from './../components/ErrorBoundary'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchField, requestRobots} from '../actions'
// import { setTextAction} from '../actions'
// import { setCounterAction } from '../actions'

function App() {
    // const [robots, setRobots] = useState([])
    const {searchField} = useSelector((state) => state.searchRobots);
    const {robots, isPending, error} = useSelector(state => state.requestRobots);
    // const {counter} = useSelector((state) => state);
    const dispatch = useDispatch()
    // const {inputValue} = useSelector((state) => state);

    useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => {setRobots(users)})

    onRequestRobots();
     },[])

    //  const handleInput=(e)=>{
    //     dispatch(setValueText(e.target.value))
    //     console.log(setCounter)
    //  }
    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value))
    }
    const onRequestRobots = () => {
        dispatch(requestRobots())
    }

    // const handleClick = () => {
    //     dispatch(setCounterAction(counter))
    // }

    // const onSearchChange2 = (event) => {
    //     dispatch(setTextAction(event.target.value))
    // }

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    // const filteredRobots2 = robots.filter(robot => {
    //     return robot.name.toLowerCase().includes(setText.toLowerCase());
    // })

    return isPending ? <h1>Loading</h1> : (
        <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        {/* <SearchBox searchChange={onSearchChange2}/> */}
        {/* <button onClick={handleClick}>Clicks: {counter}</button> */}
        <Scroll>
            <ErrorBoundary>
                <Cardlist robots={filteredRobots}/>
                {/* <Cardlist robots={filteredRobots2}/> */}
            </ErrorBoundary>
        </Scroll>
        </div>
    )
}

export default App;