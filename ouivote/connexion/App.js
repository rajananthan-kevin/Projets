import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }
  state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <KeyboardAwareScrollView>
      
      <React.Fragment>
      <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image source={require('./images/logo.png')} style={styles.logo} />
      </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
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
          <Text style={styles.loginText}>Connexion</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
        <Text style={styles.loginText}>Mot de passe oublié*</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
          <Text style={styles.loginText}>Inscription</Text>
        </TouchableHighlight>
      </View>
      </React.Fragment>

      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#304ffe',
    height: hp('100%')
  },
  inputContainer: {
    alignItems: 'center',
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:hp('38%'),
      height:hp('7%'),
      marginBottom:hp('2%'),
      flexDirection: 'row',
      alignItems:'center'
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
 },
  inputs:{
      height:hp('10%'),
      marginLeft:hp('2%'),
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  buttonContainer: {
    height:hp('7%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:hp('4%'),
    width:hp('38%'),
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
    paddingTop:hp('12%'),
    paddingLeft : hp('2%'),
    backgroundColor:'#304ffe',
    marginBottom: hp('1%') ,
  },
  logo: {
    width: hp('48%'),
    height: hp('15%')
  },
});