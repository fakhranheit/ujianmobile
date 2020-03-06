import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';

const Login = ({ navigation }) => {
    return (
        <View style={styles.containerStyle}>
            <Animatable.View animation={'fadeInDown'} duration={2000}>
                <Text h3 style={{ color: 'tomato' }}>TomatoApp</Text>
                <Icon
                    name='food'
                    size={80}
                    type='material-community'
                    color='tomato'
                />
            </Animatable.View>
            <View style={styles.inputContainerStyle}>
                <Input
                    placeholder='Username'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            type='feather'
                            color='tomato'
                        />
                    }
                />
            </View>
            <Button
                title="Enter"
                containerStyle={{ width: '95%', marginTop: 10 }}
                buttonStyle={{ backgroundColor: 'tomato', color: 'white' }}
                onPress={() => navigation.navigate('Menu')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    inputContainerStyle: {
        marginTop: 50,
        marginBottom: 30,
        width: '100%'
    }
})

export default Login;
