import React from 'react';
import { StyleSheet, Text, View, Picker,Modal } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: 'Ville'
    }
  }
  render() {
    return (
      <View style={styles.containeres}>
        <Picker
        style={{ background: 'blue', position: 'absolute',bottom:300, left:0,right:0}}
        selectedValue={this.state.pickerSelection}
        onValueChange={(itemValue, itemIndex) => this.setState({pickerSelection:itemValue})}
      >
        <Picker.Item label="Chicken" value="to" />
        <Picker.Item label="" value="to" />
        
        </Picker >
      </View>

    );
  }
}

const styles = StyleSheet.create({
  containeres: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
