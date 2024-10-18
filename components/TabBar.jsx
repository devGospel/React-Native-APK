import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'
import TabBarButton from './TabBarButton'

const TabBar = ({ state, descriptors, navigation }) => {

    const primaryColor = '#0891b2';
    const greyColor = '#737373';

  return (
<View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

            if(['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };


        return(
          <TabBarButton
          key={route.name}
          style={styles.tabbarItem}
          onPress={onPress}
          onLongPress={onLongPress}
          isFocused={isFocused}
          routeName={route.name}
          color={isFocused? primaryColor: greyColor}
          label={label}
          />
          )
     

        // return (
        //   <TouchableOpacity
        //     key={route.name}
        //     style={styles.tabbarItem}
        //     accessibilityRole="button"
        //     accessibilityState={isFocused ? { selected: true } : {}}
        //     accessibilityLabel={options.tabBarAccessibilityLabel}
        //     testID={options.tabBarTestID}
        //     onPress={onPress}
        //     onLongPress={onLongPress}   
        //   >
        //     {
        //       icons[route.name] ({
        //         color: isFocused? primaryColor: greyColor,
        //         fontSize: 11
        //       })
        //     }
        //     <Text style={{ color: isFocused ? primaryColor : greyColor }}>
        //       {label}
        //     </Text>
        //   </TouchableOpacity>
        // );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
        borderCurve: 'continuous',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.1
    },
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    }
})

export default TabBar