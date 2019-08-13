import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResultList = (props) => {
    const { results, title } = props;

    return (
        <View>
            <Text style={ styles.titleStyle }>{ title }</Text>
            <Text>Results: { results.length }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultList;