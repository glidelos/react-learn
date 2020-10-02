import React, {Component} from 'react';
import './App.css';
import Animes from '../Components/Animes/Animes';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor')
    }
    state = {
        characters: [
            {ID:1, character: 'Rukia', anime: 'Bleach'},
            {ID:2, character: 'Lelouche', anime: 'Codegeass'},
            {ID:3, character: 'Naruto', anime: 'Naruto'}
        ],
        textClick:'Next Anime',
        showAnimeList:false
    }
    changeCharacterHandler = (event,id) => {
        const foundAnimeIdx = this.state.characters.findIndex(p => {
            return p.ID === id;
        })//trova l'indice

        const character = { ...this.state.characters[foundAnimeIdx] }
        //oppure con lo stesso significato
        //const characters = Object.assign({},this.state.characters[foundAnimeIdx])
        character.character = event.target.value;
        const characters = [...this.state.characters]
        characters[foundAnimeIdx] = character

        this.setState({
            characters: characters
        });
    }
    deleteAnimeHandler = (animeIdx) => {
        const animes = [...this.state.characters]
        animes.splice(animeIdx,1);
        this.setState({
            characters: animes
        })
    }
    toggleAnimeRender = () => {
        const toggleShow = this.state.showAnimeList
        this.setState({showAnimeList: !toggleShow})
    }

    render (){
        let animes = null
        if(this.state.showAnimeList){
            animes = (
                <Animes
                    characters={this.state.characters}
                    clicked={this.deleteAnimeHandler}
                    changed={this.changeCharacterHandler}
                />
            )
        }

        return(
            <div className="App">
                <Cockpit
                    title={this.props.appTitle}
                    text={this.state.textClick}
                    clicked={this.toggleAnimeRender}
                />
                {animes}
            </div>
        );
    }
    //return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'Ciao sto usando React!!!'))
}



export default App;
