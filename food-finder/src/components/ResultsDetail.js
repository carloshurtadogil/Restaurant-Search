import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ResultsDetail = ( props ) => {
    const { result } = props;

    return (
        <View style={ styles.container }>
            <Image 
                source={{ uri: result.image_url }}
                style={ styles.imageStyle }
            />
            <Text style={ styles.name }>{ result.name }</Text>
            <Text>{ result.rating } Stars, { result.review_count } Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        borderRadius: 4,
        height: 120,
        marginBottom: 5,
        width: 250
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;