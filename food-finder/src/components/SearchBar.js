import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={ styles.background }>
            <Feather name="search" style={ styles.iconStyle }/>
            <TextInput 
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={ false }
                style={ styles.inputStyle }
                value={ term }
                onChangeText={ onTermChange }
                onEndEditing={ onTermSubmit }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        flexDirection: 'row',
        height: 50,
        marginHorizontal: 15,
        marginTop: 15
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 30,
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;