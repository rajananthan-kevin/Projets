import React from 'react'
import { ActivityIndicator,View,Button, TextInput,Text,FlatList,StyleSheet} from 'react-native'
import filmsData from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'





class Search extends React.Component {

    constructor(props) {
        super(props)
        this.page = 0
        this.totalPages = 0
        this.searchedText = "" 
        this.state = { 
            films: [],
            isLoading: false
        }
       
    }

    _loadFilms() {
        if (this.searchedText.length > 0) {
          this.setState({ isLoading: true }) 
          getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
              this.page = data.page
              this.totalPages = data.total_pages
              this.setState({ 
                films: this.state.films.concat(data.results),
                isLoading: false 

                
              })
          })
        }
    }
    
    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' color="#00ff00" />
            </View>
          )
        }
      }

      _searchFilms() {
        this.page = 0
        this.totalPages = 0
        this.setState({
          films: [],
        }, () => { 
            console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
            this._loadFilms() 
        })
    }
      
      
   _searchTextInputChanged(text){
        this.searchedText = text
    }
    
    render() {
        console.log(this.state.isLoading);
        
        
        return  (
        <View style={styles.main_container}>
            <TextInput onSubmitEditing={() =>  this._searchFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textinput} placeholder="titre du film"/>
            <Button  title="Rechercher" onPress={() => this._searchFilms()}/>
            <FlatList
             data={this.state.films}
             keyExtractor={(item) => item.id.toString()}
             onEndReachThreashold={0.5}
             onEndReached={() =>{
                if (this.page < this.totalPages) { // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
                this._loadFilms()
             }
         }}
             

             renderItem={({item}) => <FilmItem film={item}/>}
            />
            {this._displayLoading()}
            
        </View>
            

        )
    }
}

const styles = StyleSheet.create({

    main_container :{
        flex : 1,
    
        
    },

    textinput: {
        height: 50, 
        borderColor: '#000000', 
        borderWidth: 2,
        paddingLeft: 10,
        

    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
})
export default Search;
