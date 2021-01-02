import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      originalPrice: 0,
      discountPercentage: 0,
      salesTax: 0
   }
   handleOriginalPrice = (text) => {
      this.setState({ originalPrice: text })
   }
   handleDiscountPercentage = (text) => {
      this.setState({ discountPercentage: text })
   }
   handleSalesTax = (text) => {
     this.setState({ salesTax: text})
   }

   render() {
      return (
         <View style = {styles.container}>
            <Text/>
            <Text/>
            <Text/>

            <Text>
              Original Price:
            </Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Type original price in $"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleOriginalPrice}/>


            <Text>
               Discount Percentage:
            </Text>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Type discount in %"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleDiscountPercentage}/>

            <Text>
            Sales Tax:
            </Text>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Type Sales Tax in %"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleSalesTax}/>


            <Text>
            You Pay:
              {((this.state.originalPrice - (this.state.originalPrice * this.state.discountPercentage / 100)) + (((this.state.originalPrice - (this.state.originalPrice * this.state.discountPercentage / 100)) * this.state.salesTax) / 100)).toFixed(2) }
            </Text>

            <Text>
            Your Savings: {(this.state.originalPrice - ((this.state.originalPrice - (this.state.originalPrice * this.state.discountPercentage / 100)) + (((this.state.originalPrice - (this.state.originalPrice * this.state.discountPercentage / 100)) * this.state.salesTax) / 100) )).toFixed(2)}
            </Text>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   }
})
