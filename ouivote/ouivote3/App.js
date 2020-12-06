import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CheckBox from 'react-native-checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker'

import {
StyleSheet,
Text,
View,
TextInput,
Button,
ImageBackground,
Image,
TouchableHighlight,
TouchableOpacity,
Picker,
Alert
} from 'react-native';
import RadioForm, {
RadioButton, 
RadioButtonInput, 
RadioButtonLabel
} from 'react-native-simple-radio-button';



var categories = [
{label: "Environnement", value: 0},
{label: "Culturel", value: 1},
{label: "Transports", value: 2},
{label: "Utilité publique", value: 3},
{label: "Social", value: 4},
{label: "Jeunesse", value: 5},
{label: "Éducation", value: 6},
{label: "Urbanisme", value: 7},
{label: "Sports", value: 8},
];




const HomeScreen = ({navigation})  => {
return (
<React.Fragment>
<ImageBackground source={require('./images/fond.jpg')} style = {styles.backgroundColorContainer}>

<View style={styles.logoContainer}>
<Image source={require('./images/logo.png')} style={styles.logo} />
</View>


<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate("Inscription")}>
<Text style={styles.loginText}>Inscription</Text>
</TouchableHighlight>


<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('Connexion')}>
<Text style={styles.loginText}>Connexion</Text>
</TouchableHighlight>
</ImageBackground>


</React.Fragment>

);
};  

const styles = StyleSheet.create({
backgroundColorContainer: {
flex :1,
width: null,
height: null,
justifyContent: 'center',
alignItems: 'center'
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
height:hp('7%'),
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:hp('5%'),
width:wp('55%'),
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
paddingTop:hp('5%'),
paddingLeft :hp('1%'),
marginBottom: ('10%'),
//backgroundColor:'#304ffe',
},
logo: {
width: wp('90%'),
height:hp('17%'),
},
});

const Connexion = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>

<View style={styles1.container}>
<View style={styles1.logoContainer}>
<Image source={require('./images/logo.png')} style={styles1.logo} />
</View>
<View style={styles1.inputContainer}>
  <TextInput style={styles1.inputs}
      placeholder="Email"
      keyboardType="email-address"
      underlineColorAndroid='transparent'
      onChangeText={(email) => this.setState({email})}/>
</View>

<View style={styles1.inputContainer}>
  <TextInput style={styles1.inputs}
      placeholder="Mot de passe"
      secureTextEntry={true}
      underlineColorAndroid='transparent'
      onChangeText={(password) => this.setState({password})}/>
</View>

<TouchableHighlight style={[styles1.buttonContainer, styles1.loginButton]} onPress={() => navigation.navigate('Maintabscreen')}>
  <Text style={styles1.loginText}>Connexion</Text>
</TouchableHighlight>

<TouchableHighlight style={styles1.buttonContainer} onPress={() => navigation.navigate('Inscription')}>
  <Text style={styles1.loginText}>Inscription</Text>
</TouchableHighlight>

</View>
</React.Fragment>
</KeyboardAwareScrollView>



);
};  

const styles1 = StyleSheet.create({
container: {
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#28468D',
height: hp('100%')
},
inputContainer: {
alignItems: 'center',
  borderBottomColor: '#F5FCFF',
  backgroundColor: '#FFFFFF',
  borderRadius:30,
  borderBottomWidth: 1,
  width:wp('63%'),
  height:hp('7%'),
  marginBottom:hp('4%'),
  flexDirection: 'row',
  alignItems:'center'
},
inputs:{
  height:hp('10%'),
  marginLeft:('2%'),
  borderBottomColor: '#FFFFFF',
  flex:1,
},
buttonContainer: {
height:hp('7%'),
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:hp('8%'),
width:wp('63%'),
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
backgroundColor:'#28468D',
paddingBottom: hp('11%'),
},
logo: {
width: wp('80%'),
height: hp('15%')

},
});

const Inscription = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>

<View style={styles2.container}>

<View style={styles2.logoContainer}>
  <Image source={require('./images/logo.png')} style={styles2.logo} />
</View>
<View style={styles2.inputContainer}>
  <TextInput style={styles2.inputs}
      placeholder="Nom"
      underlineColorAndroid='transparent'
      onChangeText={(lastname) => this.setState({lastname})}/>
</View>

<View style={styles2.inputContainer}>
  <TextInput style={styles2.inputs}
      placeholder="Prénom"
      underlineColorAndroid='transparent'
      onChangeText={(firstname) => this.setState({firstname})}/>
</View>








<View style={styles2.inputContainer}>
  <TextInput style={styles2.inputs}
      placeholder="Email"
      secureTextEntry={true}
      underlineColorAndroid='transparent'
      onChangeText={(email) => this.setState({email})}/>
</View>

<View style={styles2.inputContainer}>
  <TextInput style={styles2.inputs}
      placeholder="Mot de passe"
      secureTextEntry={true}
      underlineColorAndroid='transparent'
      onChangeText={(password) => this.setState({password})}/>
</View>

<CheckBox 
label ="J'accepte les CGU et la charte de confidentialité."
checked={false}
onChange={(checked) => console.log('I am checked', checked)}/>

<TouchableHighlight style={[styles2.buttonContainer, styles2.loginButton]} onPress={() => this.onClickListener('login')}>
  <Text style={styles2.loginText}>Inscription</Text>
</TouchableHighlight>
</View>
</React.Fragment>
</KeyboardAwareScrollView>
);
};  

const styles2 = StyleSheet.create({
container: {
  
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#28468D',
  height:hp('100%')
},
inputContainer: {
  alignItems: 'center',
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:wp('63%'),
    height:hp('7%'),
    marginBottom:hp('4%'),
    flexDirection: 'row',
    alignItems:'center'
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
  width:hp('40%'),
  borderRadius:30,
},
loginButton: {
  backgroundColor: "#ff9100",
  marginTop: hp('5%'),
},
loginText: {
  color: 'white',
},
logoContainer: {
  //alignItems: 'center'
  paddingBottom: hp('5%'),
  paddingTop: hp('5%'),
  paddingLeft: hp('2%'),
  backgroundColor:'#28468D',
},
logo: {
  width: wp('80%'),
  height: hp('15%')
},
});

const Accueil = ({navigation}) => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View style={stylop.container}>
<Text style={stylop.textcolor}>Accueil</Text>
</View>
<View>
<Text style={stylop.categorie}>Catégories</Text>
</View>
<TouchableHighlight style={stylop.environnement} onPress={() => navigation.navigate('Environnement')}>
<View>
<ImageBackground source={require('./images/environnement.jpeg')} style={stylop.logo} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Environnement</Text>
</ImageBackground>
</View>
</TouchableHighlight>
<TouchableHighlight style={stylop.culturel} onPress={() => navigation.navigate('Culturel')}>
<View>
<ImageBackground source={require('./images/culture.jpg')} style={stylop.logo} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Culturel</Text>
</ImageBackground>
</View>
</TouchableHighlight>
<TouchableHighlight style={stylop.transports} onPress={() => navigation.navigate('Transports')}>
<View>
<ImageBackground source={require('./images/transport.jpg')} style={stylop.logo} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Transports</Text>
</ImageBackground>
</View>
</TouchableHighlight>
<TouchableHighlight style={stylop.public} onPress={() => navigation.navigate('UtilitePublique')}>
<View>
<ImageBackground source={require('./images/public.jpg')} style={stylop.logo} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Utilité publique</Text>
</ImageBackground>
</View>
</TouchableHighlight>
<TouchableHighlight style={stylop.social} onPress={() => navigation.navigate('Social')}>
<View>
<ImageBackground source={require('./images/social.jpg')} style={stylop.logo} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Social</Text>
</ImageBackground>
</View>
</TouchableHighlight>
<TouchableHighlight style={stylop.jeunesse} onPress={() => navigation.navigate('Jeunesse')}>
<View>
<ImageBackground source={require('./images/jeunesse.jpg')} style={stylop.logo} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Jeunesse</Text>
</ImageBackground>
</View>
</TouchableHighlight>
<TouchableHighlight style={stylop.education} onPress={() => navigation.navigate('Education')}>
<View>
<ImageBackground source={require('./images/education.jpg')} style={stylop.logo} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Éducation</Text>
</ImageBackground>
</View>
</TouchableHighlight>
<TouchableHighlight style={stylop.urbanisme} onPress={() => navigation.navigate('Urbanisme')}>
<View>
<ImageBackground source={require('./images/urbanisme.jpg')} style={stylop.logo} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Urbanisme</Text>
</ImageBackground>
</View>
</TouchableHighlight>
<TouchableHighlight style={stylop.sport} onPress={() => navigation.navigate('Sport')}>
<View>
<ImageBackground source={require('./images/sport.jpg')} style={stylop.logo} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Sport</Text>
</ImageBackground>
</View>
</TouchableHighlight>
<TouchableHighlight style={stylop.sondage} onPress={() => navigation.navigate('Proposer')}>
<View>
<Icon style={stylop.icon} name="ios-add" color='white' size={50} />
<Text style={stylop.textcenter2}>Proposer un sondage</Text>
</View>
</TouchableHighlight>
</React.Fragment>
</KeyboardAwareScrollView>
);
};


const Résultats = ({navigation}) => {
return (
<View style={stylop.container}>
<Text style={stylop.textcolor}>Résultats</Text>
</View>
);
};

const Proposer = ({navigation}) => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View style={stylop.container}>
<Text style={stylop.textcolor}>Sondage</Text>
</View>
<View>
<Text style={stylop.textpropose}>Proposer un sondage aux citoyens !</Text>
</View>
<View style={stylop.contpro}>
<Text style={stylop.textcont}>Votre projet*</Text>
<View>
<TextInput
placeholder="Tapez le nom de votre projet..."
underlineColorAndroid='transparent'
onChangeText={(projectname) => this.setState({projectname})}/>
</View>
</View>
<View style={stylop.contcat}>
<Text style={stylop.textcont}>Catégories*</Text>
<View style={styles.box}>
<RadioForm 
radio_props={categories}
initial={2}
onPress={(value) => {}}
buttonColor={'#28468D'}
selectedButtonColor={'#28468D'}
buttonSize={20}
buttonOuterSize={20}

/>
</View>
</View>
<View style={stylop.contdes}>
<Text style={stylop.textcont}>Description*</Text>
<View>
<TextInput
placeholder="Présentez votre projet en quelques lignes..."
underlineColorAndroid='transparent'
onChangeText={(description) => this.setState({description})}/>
</View>
</View>


<View style={stylop.contdate}>
<Text style={stylop.textcont}>Date de création du sondage*</Text>
<View style={stylop.datebox}>
<DatePicker
style={{width: 200}}
mode="date"
placeholder="Choisissez la date..."
format="YYYY-MM-DD"
minDate="2020-05-01"
maxDate="2020-12-01"
confirmBtnText="Confirm"
cancelBtnText="Cancel"
customStyles={{
dateIcon: {
position: 'absolute',
left: 0,
top: 4,
marginLeft: 0
},
dateInput: {
marginLeft: 36
}
// ... You can check the source to find the other keys.
}}
onDateChange={(date) => {this.setState({date: date})}}

/>
</View>
</View>

<TouchableHighlight style={[stylop.buttonContainer, stylop.loginButton]} onPress={() => navigation.navigate('Accueil')}>
<Text style={styles1.loginText}>Annuler</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainer2, stylop.loginButton2]} onPress={() => navigation.navigate('Popup')}>
<Text style={styles1.loginText}>Envoyer</Text>
</TouchableHighlight>

</React.Fragment>
</KeyboardAwareScrollView>
);
};

const Compte = ({navigation}) => {
return (
<React.Fragment>
<View style={stylop.contcompte}>
<Icon style={stylop.iconutil} name="ios-contact" color='white' size={60} />
<View style={stylop.boiteutil}>
<Text style={stylop.textcontcompte}>Jean-Paul</Text>
</View>
</View>
<TouchableHighlight style={[stylop.buttonContainer3, stylop.loginButton3]} onPress={() => navigation.navigate('Home')}>
<Text style={styles1.loginText}>Déconnexion</Text>
</TouchableHighlight>
</React.Fragment>

);
};

const Environnement = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/environnement.jpeg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Environnement</Text>
</ImageBackground>
</View>
<View>
<Text style={stylop.textprojets}>Projets</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate('ProjEnv1')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
</React.Fragment>
</KeyboardAwareScrollView>
);
};

const Culturel = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/culture.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Culturel</Text>
</ImageBackground>
</View>
<View>
<Text style={stylop.textprojets}>Projets</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate('ProjCult1')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
</React.Fragment>
</KeyboardAwareScrollView>
);
};

const Transports = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/transport.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Transports</Text>
</ImageBackground>
</View>
<View>
<Text style={stylop.textprojets}>Projets</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate('ProjTransp1')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
</React.Fragment>
</KeyboardAwareScrollView>
);
};
const UtilitePublique = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/public.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Utilité publique</Text>
</ImageBackground>
</View>
<View>
<Text style={stylop.textprojets}>Projets</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate('ProjPublic1')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
</React.Fragment>
</KeyboardAwareScrollView>
);
};
const Social = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/social.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Social</Text>
</ImageBackground>
</View>
<View>
<Text style={stylop.textprojets}>Projets</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate('ProjSocial1')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
</React.Fragment>
</KeyboardAwareScrollView>
);
};
const Jeunesse = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/jeunesse.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Jeunesse</Text>
</ImageBackground>
</View>
<View>
<Text style={stylop.textprojets}>Projets</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate('ProjJeun1')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
</React.Fragment>
</KeyboardAwareScrollView>
);
};
const Education = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/education.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Éducation</Text>
</ImageBackground>
</View>
<View>
<Text style={stylop.textprojets}>Projets</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate('ProjEduc1')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
</React.Fragment>
</KeyboardAwareScrollView>
);
};
const Urbanisme = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/urbanisme.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Urbanisme</Text>
</ImageBackground>
</View>
<View>
<Text style={stylop.textprojets}>Projets</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate('ProjUrba1')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
</React.Fragment>
</KeyboardAwareScrollView>
);
};
const Sport = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/sport.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Sport</Text>
</ImageBackground>
</View>
<View>
<Text style={stylop.textprojets}>Projets</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate('ProjSport1')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
<View style={stylop.contpro}>
<Text style={stylop.textcont1}>Système de récupération de l'eau</Text>
</View>
</TouchableOpacity>
</React.Fragment>
</KeyboardAwareScrollView>
);
};
const Popup = ({navigation})  => {
return (
<React.Fragment>
<View style={stylop.popup}>
<Text style={stylop.textpopup}>Votre sondage a bien été ajouté. </Text>
</View>
<TouchableHighlight style={[stylop.buttonpopup, stylop.loginButton]} onPress={() => navigation.navigate('Accueil')}>
<Text style={styles1.loginText}>Retour à l'accueil</Text>
</TouchableHighlight>
</React.Fragment>
);
};

const ProjEnv1 = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/environnement.jpeg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Environnement</Text>
</ImageBackground>
</View>
<View style={stylop.contpropos}>
<Text style={stylop.textcontpropos}>À Propos</Text>
<View>
<Icon name="ios-apps" color='#28468D' size={26} />
<Icon name="ios-star" color='#28468D' size={26} />
<Icon name="ios-calendar" color='#28468D' size={26} />
</View>
<View style={stylop.textavecicon}>
<View style={stylop.textcategorie}>
<Text style={stylop.textcontcat}>Catégorie : </Text>
</View>
<View style={stylop.textinitiateur}>
<Text style={stylop.textcontcat}>Initiateur du projet : Mairie  </Text>
</View>
<Text style={stylop.textcontcat}>Date de création de projet :  </Text>
</View>
</View>
<View style={stylop.contdescription}>
<Text style={stylop.textcontdescription}>Description</Text>
<Text>Besoin d'eau en urgence</Text>
</View>
<TouchableHighlight style={[stylop.buttonContainerModif, stylop.loginButtonModif]} onPress={() => navigation.navigate('Modifier')}>
<Text style={styles1.loginText}>Modifier</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerSuppr, stylop.loginButtonSuppr]} onPress={() => navigation.navigate('Accueil')}>
<Text style={styles1.loginText}>Supprimer</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerVote, stylop.loginButtonVote]} onPress={() => navigation.navigate('VotePourContre')}>
<Text style={styles1.loginText}>Voter</Text>
</TouchableHighlight>
</React.Fragment>
</KeyboardAwareScrollView>
);
};

const ProjCult1 = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/culture.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Culturel</Text>
</ImageBackground>
</View>
<View style={stylop.contpropos}>
<Text style={stylop.textcontpropos}>À Propos</Text>
<View>
<Icon name="ios-apps" color='#28468D' size={26} />
<Icon name="ios-star" color='#28468D' size={26} />
<Icon name="ios-calendar" color='#28468D' size={26} />
</View>
<View style={stylop.textavecicon}>
<View style={stylop.textcategorie}>
<Text style={stylop.textcontcat}>Catégorie : </Text>
</View>
<View style={stylop.textinitiateur}>
<Text style={stylop.textcontcat}>Initiateur du projet : Mairie  </Text>
</View>
<Text style={stylop.textcontcat}>Date de création de projet :  </Text>
</View>
</View>
<View style={stylop.contdescription}>
<Text style={stylop.textcontdescription}>Description</Text>
<Text>Besoin d'eau en urgence</Text>
</View>
<TouchableHighlight style={[stylop.buttonContainerModif, stylop.loginButtonModif]} onPress={() => navigation.navigate('Modifier')}>
<Text style={styles1.loginText}>Modifier</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerSuppr, stylop.loginButtonSuppr]} onPress={() => navigation.navigate('Accueil')}>
<Text style={styles1.loginText}>Supprimer</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerVote, stylop.loginButtonVote]} onPress={() => navigation.navigate('VotePourContre')}>
<Text style={styles1.loginText}>Voter</Text>
</TouchableHighlight>
</React.Fragment>
</KeyboardAwareScrollView>
);
};


const ProjTransp1 = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/transport.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Transports</Text>
</ImageBackground>
</View>
<View style={stylop.contpropos}>
<Text style={stylop.textcontpropos}>À Propos</Text>
<View>
<Icon name="ios-apps" color='#28468D' size={26} />
<Icon name="ios-star" color='#28468D' size={26} />
<Icon name="ios-calendar" color='#28468D' size={26} />
</View>
<View style={stylop.textavecicon}>
<View style={stylop.textcategorie}>
<Text style={stylop.textcontcat}>Catégorie : </Text>
</View>
<View style={stylop.textinitiateur}>
<Text style={stylop.textcontcat}>Initiateur du projet : Mairie  </Text>
</View>
<Text style={stylop.textcontcat}>Date de création de projet :  </Text>
</View>
</View>
<View style={stylop.contdescription}>
<Text style={stylop.textcontdescription}>Description</Text>
<Text>Besoin d'eau en urgence</Text>
</View>
<TouchableHighlight style={[stylop.buttonContainerModif, stylop.loginButtonModif]} onPress={() => navigation.navigate('Modifier')}>
<Text style={styles1.loginText}>Modifier</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerSuppr, stylop.loginButtonSuppr]} onPress={() => navigation.navigate('Accueil')}>
<Text style={styles1.loginText}>Supprimer</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerVote, stylop.loginButtonVote]} onPress={() => navigation.navigate('VotePourContre')}>
<Text style={styles1.loginText}>Voter</Text>
</TouchableHighlight>
</React.Fragment>
</KeyboardAwareScrollView>
);
};

const ProjPublic1 = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/public.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Utilité Publique</Text>
</ImageBackground>
</View>
<View style={stylop.contpropos}>
<Text style={stylop.textcontpropos}>À Propos</Text>
<View>
<Icon name="ios-apps" color='#28468D' size={26} />
<Icon name="ios-star" color='#28468D' size={26} />
<Icon name="ios-calendar" color='#28468D' size={26} />
</View>
<View style={stylop.textavecicon}>
<View style={stylop.textcategorie}>
<Text style={stylop.textcontcat}>Catégorie : </Text>
</View>
<View style={stylop.textinitiateur}>
<Text style={stylop.textcontcat}>Initiateur du projet : Mairie  </Text>
</View>
<Text style={stylop.textcontcat}>Date de création de projet :  </Text>
</View>
</View>
<View style={stylop.contdescription}>
<Text style={stylop.textcontdescription}>Description</Text>
<Text>Besoin d'eau en urgence</Text>
</View>
<TouchableHighlight style={[stylop.buttonContainerModif, stylop.loginButtonModif]} onPress={() => navigation.navigate('Modifier')}>
<Text style={styles1.loginText}>Modifier</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerSuppr, stylop.loginButtonSuppr]} onPress={() => navigation.navigate('Accueil')}>
<Text style={styles1.loginText}>Supprimer</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerVote, stylop.loginButtonVote]} onPress={() => navigation.navigate('VotePourContre')}>
<Text style={styles1.loginText}>Voter</Text>
</TouchableHighlight>
</React.Fragment>
</KeyboardAwareScrollView>
);
};

const ProjSocial1 = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/social.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Social</Text>
</ImageBackground>
</View>
<View style={stylop.contpropos}>
<Text style={stylop.textcontpropos}>À Propos</Text>
<View>
<Icon name="ios-apps" color='#28468D' size={26} />
<Icon name="ios-star" color='#28468D' size={26} />
<Icon name="ios-calendar" color='#28468D' size={26} />
</View>
<View style={stylop.textavecicon}>
<View style={stylop.textcategorie}>
<Text style={stylop.textcontcat}>Catégorie : </Text>
</View>
<View style={stylop.textinitiateur}>
<Text style={stylop.textcontcat}>Initiateur du projet : Mairie  </Text>
</View>
<Text style={stylop.textcontcat}>Date de création de projet :  </Text>
</View>
</View>
<View style={stylop.contdescription}>
<Text style={stylop.textcontdescription}>Description</Text>
<Text>Besoin d'eau en urgence</Text>
</View>
<TouchableHighlight style={[stylop.buttonContainerModif, stylop.loginButtonModif]} onPress={() => navigation.navigate('Modifier')}>
<Text style={styles1.loginText}>Modifier</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerSuppr, stylop.loginButtonSuppr]} onPress={() => navigation.navigate('Accueil')}>
<Text style={styles1.loginText}>Supprimer</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerVote, stylop.loginButtonVote]} onPress={() => navigation.navigate('VotePourContre')}>
<Text style={styles1.loginText}>Voter</Text>
</TouchableHighlight>
</React.Fragment>
</KeyboardAwareScrollView>
);
};

const ProjJeun1 = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/jeunesse.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Jeunesse</Text>
</ImageBackground>
</View>
<View style={stylop.contpropos}>
<Text style={stylop.textcontpropos}>À Propos</Text>
<View>
<Icon name="ios-apps" color='#28468D' size={26} />
<Icon name="ios-star" color='#28468D' size={26} />
<Icon name="ios-calendar" color='#28468D' size={26} />
</View>
<View style={stylop.textavecicon}>
<View style={stylop.textcategorie}>
<Text style={stylop.textcontcat}>Catégorie : </Text>
</View>
<View style={stylop.textinitiateur}>
<Text style={stylop.textcontcat}>Initiateur du projet : Mairie  </Text>
</View>
<Text style={stylop.textcontcat}>Date de création de projet :  </Text>
</View>
</View>
<View style={stylop.contdescription}>
<Text style={stylop.textcontdescription}>Description</Text>
<Text>Besoin d'eau en urgence</Text>
</View>
<TouchableHighlight style={[stylop.buttonContainerModif, stylop.loginButtonModif]} onPress={() => navigation.navigate('Modifier')}>
<Text style={styles1.loginText}>Modifier</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerSuppr, stylop.loginButtonSuppr]} onPress={() => navigation.navigate('Accueil')}>
<Text style={styles1.loginText}>Supprimer</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerVote, stylop.loginButtonVote]} onPress={() => navigation.navigate('VotePourContre')}>
<Text style={styles1.loginText}>Voter</Text>
</TouchableHighlight>
</React.Fragment>
</KeyboardAwareScrollView>
);
};

const ProjEduc1 = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/education.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Éducation</Text>
</ImageBackground>
</View>
<View style={stylop.contpropos}>
<Text style={stylop.textcontpropos}>À Propos</Text>
<View>
<Icon name="ios-apps" color='#28468D' size={26} />
<Icon name="ios-star" color='#28468D' size={26} />
<Icon name="ios-calendar" color='#28468D' size={26} />
</View>
<View style={stylop.textavecicon}>
<View style={stylop.textcategorie}>
<Text style={stylop.textcontcat}>Catégorie : </Text>
</View>
<View style={stylop.textinitiateur}>
<Text style={stylop.textcontcat}>Initiateur du projet : Mairie  </Text>
</View>
<Text style={stylop.textcontcat}>Date de création de projet :  </Text>
</View>
</View>
<View style={stylop.contdescription}>
<Text style={stylop.textcontdescription}>Description</Text>
<Text>Besoin d'eau en urgence</Text>
</View>
<TouchableHighlight style={[stylop.buttonContainerModif, stylop.loginButtonModif]} onPress={() => navigation.navigate('Modifier')}>
<Text style={styles1.loginText}>Modifier</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerSuppr, stylop.loginButtonSuppr]} onPress={() => navigation.navigate('Accueil')}>
<Text style={styles1.loginText}>Supprimer</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerVote, stylop.loginButtonVote]} onPress={() => navigation.navigate('VotePourContre')}>
<Text style={styles1.loginText}>Voter</Text>
</TouchableHighlight>
</React.Fragment>
</KeyboardAwareScrollView>
);
};
const ProjUrba1 = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/urbanisme.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Urbanisme</Text>
</ImageBackground>
</View>
<View style={stylop.contpropos}>
<Text style={stylop.textcontpropos}>À Propos</Text>
<View>
<Icon name="ios-apps" color='#28468D' size={26} />
<Icon name="ios-star" color='#28468D' size={26} />
<Icon name="ios-calendar" color='#28468D' size={26} />
</View>
<View style={stylop.textavecicon}>
<View style={stylop.textcategorie}>
<Text style={stylop.textcontcat}>Catégorie : </Text>
</View>
<View style={stylop.textinitiateur}>
<Text style={stylop.textcontcat}>Initiateur du projet : Mairie  </Text>
</View>
<Text style={stylop.textcontcat}>Date de création de projet :  </Text>
</View>
</View>
<View style={stylop.contdescription}>
<Text style={stylop.textcontdescription}>Description</Text>
<Text>Besoin d'eau en urgence</Text>
</View>
<TouchableHighlight style={[stylop.buttonContainerModif, stylop.loginButtonModif]} onPress={() => navigation.navigate('Modifier')}>
<Text style={styles1.loginText}>Modifier</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerSuppr, stylop.loginButtonSuppr]} onPress={() => navigation.navigate('Accueil')}>
<Text style={styles1.loginText}>Supprimer</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerVote, stylop.loginButtonVote]} onPress={() => navigation.navigate('VotePourContre')}>
<Text style={styles1.loginText}>Voter</Text>
</TouchableHighlight>
</React.Fragment>
</KeyboardAwareScrollView>
);
};

const ProjSport1 = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View>
<ImageBackground source={require('./images/sport.jpg')} style={stylop.logo2} imageStyle={{ borderRadius: 9}} blurRadius={3}>
<Text style={stylop.textcenter}>Sport</Text>
</ImageBackground>
</View>
<View style={stylop.contpropos}>
<Text style={stylop.textcontpropos}>À Propos</Text>
<View>
<Icon name="ios-apps" color='#28468D' size={26} />
<Icon name="ios-star" color='#28468D' size={26} />
<Icon name="ios-calendar" color='#28468D' size={26} />
</View>
<View style={stylop.textavecicon}>
<View style={stylop.textcategorie}>
<Text style={stylop.textcontcat}>Catégorie : </Text>
</View>
<View style={stylop.textinitiateur}>
<Text style={stylop.textcontcat}>Initiateur du projet : Mairie  </Text>
</View>
<Text style={stylop.textcontcat}>Date de création de projet :  </Text>
</View>
</View>
<View style={stylop.contdescription}>
<Text style={stylop.textcontdescription}>Description</Text>
<Text>Besoin d'eau en urgence</Text>
</View>
<TouchableHighlight style={[stylop.buttonContainerModif, stylop.loginButtonModif]} onPress={() => navigation.navigate('Modifier')}>
<Text style={styles1.loginText}>Modifier</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerSuppr, stylop.loginButtonSuppr]} onPress={() => navigation.navigate('Accueil')}>
<Text style={styles1.loginText}>Supprimer</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonContainerVote, stylop.loginButtonVote]} onPress={() => navigation.navigate('VotePourContre')}>
<Text style={styles1.loginText}>Voter</Text>
</TouchableHighlight>
</React.Fragment>
</KeyboardAwareScrollView>
);
};
                                
                                                                                
              
const Modifier = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View style={stylop.container}>
<Text style={stylop.texttitremodif}>Modification</Text>
</View>
<View>
<Text style={stylop.textmodif}>Modifiez votre sondage</Text>
</View>
<View style={stylop.contpro}>
<Text style={stylop.textcont}>Votre projet</Text>
<View>
  <TextInput
      placeholder="Tapez le nom de votre projet..."
      underlineColorAndroid='transparent'
      onChangeText={(projectname) => this.setState({projectname})}/>
</View>
</View>
<View style={stylop.contcat}>
<Text style={stylop.textcont}>Catégories</Text>
<View style={styles.box}>
<RadioForm 
  radio_props={categories}
  initial={2}
  onPress={(value) => {}}
  buttonColor={'#28468D'}
  selectedButtonColor={'#28468D'}
  buttonSize={20}
  buttonOuterSize={20}

/>
</View>
</View>
<View style={stylop.contdes}>
<Text style={stylop.textcont}>Description</Text>
<View>
  <TextInput
      placeholder="Présentez votre projet en quelques lignes..."
      underlineColorAndroid='transparent'
      onChangeText={(description) => this.setState({description})}/>
</View>

<View style={stylop.contdate}>
<Text style={stylop.textcont}>Date de création du sondage*</Text>
<View style={stylop.datebox}>
    <DatePicker
style={{width: 200}}
mode="date"
placeholder="Choisissez la date..."
format="YYYY-MM-DD"
minDate="2020-05-01"
maxDate="2020-12-01"
confirmBtnText="Confirm"
cancelBtnText="Cancel"
customStyles={{
  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0
  },
  dateInput: {
    marginLeft: 36
  }
  // ... You can check the source to find the other keys.
}}
onDateChange={(date) => {this.setState({date: date})}}

/>
</View>
</View>

</View>
<TouchableHighlight style={[stylop.buttonContainerenrmodif, stylop.loginButtonenrmodif]} onPress={() => navigation.navigate('PopupModif')}>
<Text style={stylop.loginTextenrmodif}>Enregistrer la modification</Text>
</TouchableHighlight>

</React.Fragment>
</KeyboardAwareScrollView>
);
};

const PopupVote = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View style={stylop.popup}>
<Text style={stylop.textpopup}>Votre vote a bien été enregistré.</Text>
</View>
<TouchableHighlight style={[stylop.buttonpopup, stylop.loginButton]} onPress={() => navigation.navigate('Accueil')}>
<Text style={styles1.loginText}>Retour à l'accueil</Text>
</TouchableHighlight>
</React.Fragment>
</KeyboardAwareScrollView>
);
};
const PopupModif = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View style={stylop.popup}>
<Text style={stylop.textpopup}>Votre sondage a bien été modifié.</Text>
</View>
<TouchableHighlight style={[stylop.buttonpopup, stylop.loginButton]} onPress={() => navigation.navigate('Accueil')}>
<Text style={styles1.loginText}>Retour à l'accueil</Text>
</TouchableHighlight>
</React.Fragment>
</KeyboardAwareScrollView>
);
};

const VotePourContre = ({navigation})  => {
return (
<KeyboardAwareScrollView>
<React.Fragment>
<View style={stylop.pagepourcontre}>
<TouchableHighlight style={[stylop.buttonpopuppourvote, stylop.loginButtonpopuppourvote]} onPress={() => navigation.navigate('PopupVote')}>
<Text style={styles1.loginText}>Pour</Text>
</TouchableHighlight>
<TouchableHighlight style={[stylop.buttonpopupcontrevote, stylop.loginButtonpopupcontrevote]} onPress={() => navigation.navigate('PopupVote')}>
<Text style={styles1.loginText}>Contre</Text>
</TouchableHighlight>
</View>
</React.Fragment>
</KeyboardAwareScrollView>
);
};


const stylop = StyleSheet.create({
container: {
justifyContent: 'center',
backgroundColor: '#28468D',
height: hp('9%'),
width: wp('100%')
},
textcolor: {
color: 'white',
fontStyle: 'normal',
fontSize: 23,
paddingLeft: hp('23%')
},
categorie: {
color: '#28468D',
fontStyle: 'normal',
fontFamily: 'sans-serif-medium',
fontSize: 18,
paddingTop: hp('2%'),
paddingLeft: hp('4%')
},
environnement: {
height: hp('15%'),
width: wp('40%'),
marginLeft: hp('4%'),
marginTop: hp('3%'),
borderRadius: 9,
},
culturel: {
height: hp('15%'),
width: wp('40%'),
marginLeft: hp('32%'),
marginTop: hp('-15%'),
borderRadius: 9,
},
transports: {
height: hp('15%'),
width: wp('40%'),
marginLeft: hp('4%'),
marginTop: ('5%'),
borderRadius: 9,
},
public: {
height: hp('15%'),
width: wp('40%'),
marginLeft: hp('32%'),
marginTop: hp('-15%'),
borderRadius: 9,
},
social: {
height: hp('15%'),
width: wp('40%'),
marginLeft: hp('4%'),
marginTop: ('5%'),
borderRadius: 9,
},
jeunesse: {
height: hp('15%'),
width: wp('40%'),
marginLeft: hp('32%'),
marginTop: hp('-15%'),
borderRadius: 9,
},
education: {
height: hp('15%'),
width: wp('40%'),
marginLeft: hp('4%'),
marginTop: ('5%'),
borderRadius: 9,
},
urbanisme: {
height: hp('15%'),
width: wp('40%'),
marginLeft: hp('32%'),
marginTop: hp('-15%'),
borderRadius: 9,
},
sport: {
height: hp('15%'),
width: wp('40%'),
marginLeft: hp('4%'),
marginTop: ('5%'),
borderRadius: 9,
},
sondage: {
backgroundColor: 'skyblue',
height: hp('15%'),
width: wp('40%'),
marginLeft: hp('32%'),
marginTop: hp('-15%'),
borderRadius: 9,
},
textcenter: {
textAlign: 'center',
color: 'white',
fontStyle: 'normal',
fontWeight: 'bold',
fontFamily: 'sans-serif-medium',
fontSize: 16,
paddingTop: hp('-5%'),
},
textcenter2: {
textAlign: 'center',
color: 'white',
fontStyle: 'normal',
fontFamily: 'sans-serif-medium',
fontSize: 14,
},
logo: {
justifyContent: 'center',
alignItems:'center',
width: wp('-10%'),
height: hp('15%'),
borderRadius: 9,
},
icon: {
paddingTop: hp('2%'),
paddingBottom: hp('0%'),
paddingLeft: hp('10%'),
},
textpropose: {
color: '#28468D',
fontStyle: 'normal',
fontFamily: 'sans-serif-medium',
fontSize: 18,
paddingTop: hp('2%'),
paddingLeft: hp('9%')
},
contpro: {
backgroundColor: 'white',
height: hp('12%'),
width: wp('83%'),
marginLeft: hp('5%'),
marginTop: hp('4%'),
borderRadius: 9,
},
contcat: {
backgroundColor: 'white',
height: hp('39%'),
width: wp('83%'),
marginLeft: hp('5%'),
marginTop: hp('4%'),
borderRadius: 9,
},
contdes: {
backgroundColor: 'white',
height: hp('22%'),
width: wp('83%'),
marginLeft: hp('5%'),
marginTop: hp('4%'),
borderRadius: 9,
},
buttonContainer: {
height:hp('7%'),
width:hp('20%'),
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:hp('4%'),
marginLeft:hp('8%'),
borderRadius:30,
},
loginButton: {
backgroundColor: "#28468D",
marginTop: hp('8%'),
},
buttonContainer2: {
height:hp('7%'),
width:hp('20%'),
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:hp('6%'),
marginLeft:hp('30%'),
borderRadius:30,
},
loginButton2: {
backgroundColor: "#28468D",
marginTop: hp('-11%'),
},
textcont: {
color: '#28468D',
fontStyle: 'normal',
fontFamily: 'sans-serif-medium',
fontSize: 17,
},
box: {
justifyContent: 'center',
backgroundColor: '#28468D',
},
popup: {
backgroundColor: 'white',
height: hp('12%'),
width: wp('83%'),
marginLeft: hp('5%'),
marginTop: hp('40%'),
borderRadius: 9,
},
textpopup: {
color: '#28468D',
fontStyle: 'normal',
fontFamily: 'sans-serif-medium',
fontSize: 17,
textAlign: 'center',
paddingTop:hp('4%'),
},
buttonpopup: {
height:hp('7%'),
width:hp('20%'),
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:hp('4%'),
marginLeft:hp('19%'),
borderRadius:30,
},
datebox: {
marginBottom: hp('1%'),

},
contdate: {
backgroundColor: 'white',
height: hp('11%'),
width: wp('83%'),
marginLeft: hp('0rr%'),
marginTop: hp('14%'),
borderRadius: 9,
},
logo2: {
justifyContent: 'center',
alignItems:'center',
width: wp('90%'),
height: hp('20%'),
borderRadius: 9,
marginLeft: hp('3%'),
marginTop: hp('5%')
},
textprojets: {
color: '#28468D',
fontStyle: 'normal',
fontFamily: 'sans-serif-medium',
fontSize: 18,
paddingTop: hp('2%'),
marginLeft: hp('5%'),
},
textcont1: {
color: '#28468D',
fontStyle: 'normal',
fontFamily: 'sans-serif-medium',
fontSize: 17,
marginLeft: hp('6%'),
marginTop: hp('4%'),
},
contcompte: {
backgroundColor: '#28468D',
height: hp('12%'),
width: wp('83%'),
marginLeft: hp('5%'),
marginTop: hp('35%'),
borderRadius: 9,
},
textcontcompte: {
color: 'white',
fontStyle: 'normal',
fontFamily: 'sans-serif-medium',
fontSize: 18,
marginLeft: hp('20%'),
marginTop: hp('-7%')
},
iconutil: {
marginTop: hp('1.5%'),
marginLeft: hp('7%')
},
buttonContainer3: {
height:hp('7%'),
width:hp('20%'),
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:hp('6%'),
marginLeft:hp('20%'),
borderRadius:30,
},
loginButton3: {
backgroundColor: "#28468D",
marginBottom: hp('-20%'),
marginTop: hp('5%'),
},
contpropos: {
backgroundColor: 'white',
height: hp('20%'),
width: wp('83%'),
marginLeft: hp('5%'),
marginTop: hp('4%'),
borderRadius: 9,
},
textcontpropos: {
color: '#28468D',
fontStyle: 'normal',
fontFamily: 'sans-serif-medium',
fontWeight: 'bold',
fontSize: 15,
paddingBottom:hp('4%'),
},
contdescription: {
backgroundColor: 'white',
height: hp('23%'),
width: wp('83%'),
marginLeft: hp('5%'),
marginTop: hp('4%'),
borderRadius: 9,
},
textcontdescription: {
color: '#28468D',
fontStyle: 'normal',
fontFamily: 'sans-serif-medium',
fontWeight: 'bold',
fontSize: 15,
paddingBottom:hp('4%'),
},
buttonContainerModif: {
height:hp('7%'),
width:hp('20%'),
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:hp('6%'),
marginLeft: hp('10%'),
borderRadius:30,
},
loginButtonModif: {
backgroundColor: "#28468D",
marginTop: hp('3%')
},
buttonContainerSuppr: {
height:hp('7%'),
width:hp('20%'),
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:hp('6%'),
marginLeft: hp('33%'),
borderRadius:30,
},
loginButtonSuppr: {
backgroundColor: "#28468D",
marginTop: hp('-13%')
},
buttonContainerVote: {
height:hp('7%'),
width:hp('20%'),
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:hp('6%'),
marginLeft: hp('21%'),
borderRadius:30,
},
loginButtonVote: {
backgroundColor: "#28468D",
marginTop: hp('-4%')
},
textmodif: {
color: '#28468D',
fontStyle: 'normal',
fontFamily: 'sans-serif-medium',
fontSize: 18,
paddingTop: hp('2%'),
paddingLeft: hp('15%')
},
texttitremodif: {
color: 'white',
fontStyle: 'normal',
fontSize: 23,
paddingLeft: hp('20%')
},
buttonContainerenrmodif: {
height:hp('7%'),
width:hp('30%'),
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:hp('6%'),
marginLeft:hp('16%'),
borderRadius:30,
},
loginButtonenrmodif: {
backgroundColor: "#28468D",
marginTop: hp('20%'),
},
loginTextenrmodif: {
color: 'white',
paddingLeft: hp('1%'),
},
textcontcat: {
fontStyle: 'normal',
fontFamily: 'Arial',
fontSize: 15,
paddingBottom:hp('-5%'),
paddingLeft:hp('5%'),
},
buttonpopuppourvote: {
height:hp('7%'),
width:hp('20%'),
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:hp('1%'),
marginLeft: hp('20%'),
borderRadius:30,
},
loginButtonpopuppourvote : {
backgroundColor: "#1faa00",
marginTop: hp('40%')
},
buttonpopupcontrevote: {
height:hp('7%'),
width:hp('20%'),
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:hp('6%'),
marginLeft: hp('20%'),
borderRadius:30,
},
loginButtonpopupcontrevote: {
backgroundColor: "#ba000d",
marginTop: hp('3%')
},
pagepourcontre: {
  backgroundColor: '#28468D',
  height: hp('100%'),
},
contjevote: {
paddingLeft: hp('23%'),
},
jevote: {
  color: 'white',
  fontStyle: 'normal',
  fontFamily: 'sans-serif-medium',
  fontSize: 15,
},
textavecicon: {
  marginTop: hp('-11%'),
},
textcategorie: {
  marginBottom: hp('1%')
},
textinitiateur: {
  marginBottom: hp('0.5%')
},
});




const Tab = createMaterialBottomTabNavigator();
const MainTabScreen = () =>(
<Tab.Navigator
initialRouteName="Accueil"
activeColor="white"
>
<Tab.Screen
name="Accueil"
component={Accueil}
options={{
tabBarLabel: 'Accueil',
tabBarColor:'#28468D',
tabBarIcon: ({ color }) => (
  <Icon name="ios-home" color={color} size={26} />
),
}}
/>
<Tab.Screen
name="Résultats"
component={Résultats}
options={{
tabBarLabel: 'Résultats',
tabBarColor:'#28468D',
tabBarIcon: ({ color }) => (
  <Icon name="ios-stats" color={color} size={26} />
),
}}
/>
<Tab.Screen
name="Proposer"
component={Proposer}
options={{
tabBarLabel: 'Proposer',
tabBarColor:'#28468D',
tabBarIcon: ({ color }) => (
  <Icon name="ios-brush" color={color} size={26} />
),
}}
/>
<Tab.Screen
name="Compte"
component={Compte}
options={{
tabBarLabel: 'Compte',
tabBarColor:'#28468D',
tabBarIcon: ({ color }) => (
  <Icon name="ios-contact" color={color} size={26} />
),
}}
/>
</Tab.Navigator>


);    

const Stack = createStackNavigator();

const App = () => {
return (
<NavigationContainer>
  <Stack.Navigator
    screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Connexion" component={Connexion} />
    <Stack.Screen name="Inscription" component={Inscription} />
    <Stack.Screen name="Maintabscreen" component={MainTabScreen} />
    <Stack.Screen name="Environnement" component={Environnement}/>
    <Stack.Screen name="Culturel" component={Culturel} />
    <Stack.Screen name="Transports" component={Transports} />
    <Stack.Screen name="UtilitePublique" component={UtilitePublique} />
    <Stack.Screen name="Social" component={Social} />
    <Stack.Screen name="Jeunesse" component={Jeunesse} />
    <Stack.Screen name="Education" component={Education} />
    <Stack.Screen name="Urbanisme" component={Urbanisme} />
    <Stack.Screen name="Sport" component={Sport} />
    <Stack.Screen name="Popup" component={Popup} />
    <Stack.Screen name="ProjEnv1" component={ProjEnv1} />
    <Stack.Screen name="ProjCult1" component={ProjCult1} />
    <Stack.Screen name="ProjTransp1" component={ProjTransp1} />
    <Stack.Screen name="ProjPublic1" component={ProjPublic1} />
    <Stack.Screen name="ProjSocial1" component={ProjSocial1} />
    <Stack.Screen name="ProjJeun1" component={ProjJeun1} />
    <Stack.Screen name="ProjEduc1" component={ProjEduc1} />
    <Stack.Screen name="ProjUrba1" component={ProjUrba1} />
    <Stack.Screen name="ProjSport1" component={ProjSport1} />
    <Stack.Screen name="Modifier" component={Modifier} />
    <Stack.Screen name="PopupVote" component={PopupVote} />
    <Stack.Screen name="PopupModif" component={PopupModif} />
    <Stack.Screen name="VotePourContre" component={VotePourContre} />
  </Stack.Navigator>

</NavigationContainer>
);
}
export default App;