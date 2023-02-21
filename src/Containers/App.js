import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import {Cat} from 'react-kawaii';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cats: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ cats: users }));
    }

    onSearch = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { cats, searchfield } = this.state;
        const filteredCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchfield.toLowerCase());
        })
            return !cats.length 
                ? <h1>Loading Cats...</h1>                
                : <div className='tc'>
                    <h1 className='f1'> Cat Directory </h1>
                    <SearchBox onSearch={ this.onSearch } />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList cats={ filteredCats } />
                        </ErrorBoundary>
                    </Scroll>
                    <footer className='pa6'>
                        <Cat className='Cat pa4' size={150} mood="shocked" color="#5b997a" />
                        <Cat className='Cat pa4' size={150} mood="happy" color="#6ab28e" />
                        <Cat className='Cat pa4' size={150} mood="excited" color="#79cca3" />
                        <Cat className='Cat pa4' size={150} mood="blissful" color="#88e5b7" />
                    </footer>
                </div>
    }
}
export default App;