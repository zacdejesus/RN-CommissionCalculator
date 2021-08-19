import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Home = (props) => {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <Text style={styles.text}>plz select what u wanna do</Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Commissions')}>
                <Text style={styles.buttonText}>Go to Commissions calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('MarketRates')}>
                <Text style={styles.buttonText}>Go to see the market rates</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    },
    buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
})

export default Home