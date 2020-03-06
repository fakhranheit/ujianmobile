import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Header } from 'react-native-elements';
import IconMenu from './IconMenu'

class Home extends React.Component {

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header
                    rightComponent={{
                        text: `Hello,Dino`,
                        style: { color: 'white', fontSize: 15, fontWeight: '500' }
                    }}
                    leftComponent={{
                        icon: 'account-circle',
                        color: 'white',
                        type: 'material-community'
                    }}
                    containerStyle={{
                        backgroundColor: 'tomato',
                        justifyContent: 'space-around',
                        elevation: 2,
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                    rightContainerStyle={{
                        flex: 3
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingTop: 8
                }}>
                    <IconMenu icons={'credit'} types={'entypo'} name={'Credit'} />
                    <IconMenu icons={'food-fork-drink'} types={'material-community'} name={'Variant'} />
                    <IconMenu icons={'cookie'} types={'material-community'} name={'Recipe'} />
                    <IconMenu icons={'location-pin'} types={'entypo'} name={'Location'} />
                    <IconMenu icons={'shopping-cart'} types={'font-awesome'} name={'Cart'} />
                    <IconMenu icons={'local-pizza'} types={'material'} name={'Pizza'} />
                    <IconMenu icons={'hamburger'} types={'material-community'} name={'Burger'} />
                    <IconMenu icons={'skew-more'} types={'material-community'} name={'More'} />
                </View>
                <View>
                    <Text style={styles.text}>
                        Thank you din
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    },
    text: {
        backgroundColor: 'black',
        color: 'tomato',
        fontSize: 30,
        marginTop: 40
    }
})

export default Home;