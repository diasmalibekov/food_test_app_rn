import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
//import vector graphics
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={ styles.backgroundStyle }>
    <Feather name='search' style={ styles.iconStyle } />
    <TextInput style={ styles.inputStyle }
        autoCapitalize='none'
        autoCorrect={ false }
        placeholder='Search'
        value={ term }
        onChangeText={ onTermChange }
        onEndEditing={ onTermSubmit }
    />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
})

export default SearchBar
