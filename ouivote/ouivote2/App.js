import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Picker,
  Alert
} from 'react-native';

export default class LoginView extends Component {

  
constructor(props) {
    super(props);
  
    this.state = {
      pickerSelection: 'Ville'
    }
  }

 

 

  render() {
    return (
      <React.Fragment>
      <View style={styles.logoContainer}>
          <Image source={require('./images/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Nom"
              underlineColorAndroid='transparent'
              onChangeText={(lastname) => this.setState({lastname})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Prénom"
              underlineColorAndroid='transparent'
              onChangeText={(firstname) => this.setState({firstname})}/>
        </View>

        <View style={styles.containeres}>
        
        <Picker
        style={{  position: 'absolute',bottom:2, left:0,right:0}}
        selectedValue={this.state.pickerSelection}
        onValueChange={(itemValue, itemIndex) => this.setState({pickerSelection:itemValue})}
      >
        <Picker.Item label="Ville" value="" />
        <Picker.Item label="Paris" value="p" />
        <Picker.Item label="Lile" value="lile" />
        <Picker.Item label="Fosses" value="fosses" />
        
        
        </Picker >
      </View>


       

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Mot de passe"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Ajouter un document</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Inscription</Text>
        </TouchableHighlight>

      </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#304ffe',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#ff9100",
  },
  loginText: {
    color: 'white',
  },
  logoContainer: {
    //alignItems: 'center'
    paddingBottom: 50,
    paddingTop: 40,
    paddingLeft: 50,
    backgroundColor:'#304ffe',
  },
  logo: {
    width: 317,
    height:100,
  },
  containeres: {
    marginBottom:30,
    width:250,
    height:20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:100,
  },
});