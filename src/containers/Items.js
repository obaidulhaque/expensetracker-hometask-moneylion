import React, { Component } from 'react';
import { Text, View, Picker, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addFood } from '../redux/actions/food';

class Items extends Component {

  state = {
    food: null,
    price: '',
    data: [],
    isLoading: true
  }
  /*
  Note:
  1. This is for REST API call but we did not use here (we can use others like XMLHttpRequest API  or Web Socket)
  2. We can use this piece of code for getting all expense items from remote server
  3. On render  we can get data from this.stata
  4. Then we can use FlatList or Picker to populate all items
  
  componentDidMount() {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  */

  render()
  {
    /*
    console.log("Data Fetch.....................")
    const { data, isLoading } = this.state;
    console.log(data.length + this.state.isLoading);
    */

    return(
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{flex:.5}}>Category:</Text>
          <Picker
          selectedValue={this.state.food}
          style={{ height: 50, width: 150 }}
          onValueChange={(food) => this.setState({ food })}
          >
            <Picker.Item label="Groceries" value="groceries" />
            <Picker.Item label="Food" value="food" />
            <Picker.Item label="Rent" value="rent" />
            <Picker.Item label="Clothes" value="clothes" />
            <Picker.Item label="Health" value="health" />
            <Picker.Item label="Entertainment" value="entertainment" />
          </Picker>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{flex:.5}}>Amount:</Text>
          <TextInput 
            value={this.state.price}
            placeholder='Enter Your Amount'
            underlineColorAndroid='transparent'
            keyboardType={"number-pad"}
            onChangeText={(price) => this.setState({ price })}
          />
        </View>
        <TouchableOpacity
          style={{ marginBottom: 16 }}
          onPress={() => {
            if (this.state.price.length > 0 && Number(this.state.price) > 0) {

              this.props.add(this.state.food, this.state.price)
              this.setState({ food: null, price: '' })
            }
           
          }}>
          <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
        </TouchableOpacity>
      </View>

    );

  }
};

const mapStateToProps = (state) => {
  console.log("Items..........");
  console.log(state);
  return {
    foods: state.foodReducer.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (food, price) => dispatch(addFood(food, price))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);