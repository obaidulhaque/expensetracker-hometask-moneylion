import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { NavigationActions, withNavigation } from 'react-navigation';
import { ListItem} from 'react-native-elements';

import { connect } from 'react-redux';
import { deleteFood } from '../redux/actions/food';
import Icon from 'react-native-vector-icons/MaterialIcons'


class Home extends React.Component {

  state = {
    totalAmount: 0
  }


  render() {
    return (

     <View>
        <Text style={styles.titleText}>Today's Total Expense</Text>
        <View style={styles.horizontalBar} />
        <View style={styles.container}>
        <Text style={styles.totalAmtText}>
         {this.props.amt}
        </Text>
        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => this.props.navigation.navigate('Items') }  >
          <Text style={styles.customBtnText}>Add Expense</Text>
        </TouchableOpacity>
        <Text style = {{fontSize: 14, fontWeight: "bold"}}>Today's Expense List</Text>
        </View>
        <View style={styles.horizontalBar1} />
        <FlatList style={styles.listContainer}
          data={this.props.foods}
          keyExtractor={(item, index) => item.key.toString()}
          renderItem={
            (data) =>
              <ListItem
                title={data.item.name + "   " +data.item.price}
                bottomDivider
                //Icon does not render properly. Have to fix. Try with react-native link.
                rightIcon={<Icon
                  name="delete"
                  size={20}
                  type="MaterialIcons"
                  onPress={() => this.props.delete(data.item.key)} />
                }
              />
          }
        />
     </View>
    );
  }
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginRight: 10,
    marginTop: 20
  },
  horizontalBar: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 10,
    marginTop: 8
  },
  horizontalBar1: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 10,
    marginTop: 55
  },
  buttonStyle: {
    //color: 'red',
    height: 15,
    width: 80,
    borderRadius: 10,
    backgroundColor: 'green',
    marginLeft: 15,
    marginRight: 50,
    marginTop: 5
  },
  totalAmtText: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
    marginRight: 10,
    marginTop: 20
  },
  container: {
    flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 35,
        marginLeft: 15
  },

  /* Here, style the text of your button */
    customBtnText: {
        fontSize: 12,
        fontWeight: '400',
        color: "#fff",
        marginTop: -7
    },

  /* Here, style the background of your button */
    customBtnBG: {
    backgroundColor: "#007aff",
    paddingHorizontal: 10,
    paddingVertical: 18,
    borderRadius: 15
    },

    listContainer: {
      backgroundColor: '#dce2ff',
      padding: 16,
      marginTop: 10
    }
});


const mapStateToProps = (state) => {
  console.log("Home..........");
  console.log(state);
  return {
    foods: state.foodReducer.foodList,
    amt: state.foodReducer.totalAmt
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    delete: (key) => dispatch(deleteFood(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);