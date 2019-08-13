import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultList = (props) => {
    const { navigation, results, title } = props;

    if ( !results.length ) {
        return null;
    }

    return (
        <View style={ styles.container }>
            <Text style={ styles.titleStyle }>{ title }</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={ results }
                keyExtractor={ (result) => result.id }
                renderItem={ ({ item }) => {
                    return (
                        <TouchableOpacity onPress={ () => navigation.navigate('ResultsShow', { id: item.id }) }>
                            <ResultsDetail result={ item }/>
                        </TouchableOpacity>
                    );
                } }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 15
    }
});

export default withNavigation(ResultList);