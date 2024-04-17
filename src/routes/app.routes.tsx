import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Items } from '@screens/Items';
import { NewStore } from '@screens/NewStore';
import { Stores } from '@screens/Stores';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name="stores"
                component={Stores}
            />

            <Screen 
                name="new"
                component={NewStore}
            />

            <Screen 
                name="items"
                component={Items}
            />
        </Navigator>
    )
}