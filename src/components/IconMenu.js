import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';


const IconMenu = ({ icons, types, name }) => {
    return (
        <View style={{ alignItems: 'center', width: '25%', marginVertical: 10 }}>
            <Icon
                name={icons}
                size={30}
                type={types}
                color='tomato'
                containerStyle={{
                    borderWidth: 2,
                    borderColor: 'tomato',
                    width: 45,
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            />
            <Text style={{ fontSize: 12 }}>{name}</Text>
        </View>
    )
}

export default IconMenu;