import styles from "./styles";
import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import ModalComponenet from '../../components/ModalComponent'
import { NavigationScreenProp, NavigationState, StackActions, NavigationActions } from 'react-navigation';
import {useNavigation} from '../../navigation/UseNavigation'
import {Button} from 'react-native'
import { AppContextConsumer, AppContextProvider, AppContextInterface } from '../../hooks/Example/Context';
import ModernComponent from '../../components/ModernComponent'

interface NavigationParams {
  text: string;
}
type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;
interface Props {
  navigation: Navigation;
}
class OptionsScreen extends Component<Props> {
  public static navigationOptions = ({
    navigation,
  }: {
    navigation: Navigation;
  }) => ({
    // title: navigation.state.params ? navigation.state.params.text : '',
    headerTitle: "Options"
  })
  
  render() {
    const { navigation } = this.props;
    const { state: { params } } = navigation;
    
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>{params ? params.text : ''}</Text>
          <ModalComponenet name="try" buttonName="hit me"/>
          {/* <AppContextProvider value={sampleAppContext}> */}
          {/* <ModernComponent/> */}
          {/* </AppContextProvider> */}
          {/* <AppContextConsumer> */}
            {/* {appContext => appContext && (
              <Text>
                Name: {appContext.name},
                Author: {appContext.author},
                Url: {appContext.url}
              </Text>
            )} */}
          {/* </AppContextConsumer> */}
          <ModernComponent/>
          {/* untuk conteh ganti contextnya ada di modern componenet */}
        
        </ScrollView>
      </View>
        
    );
  }
}

// gaya functionnya
// const AnotherParamScreen = () => {
//   const navigation = useNavigation<NavigationParams>();
//   const {
//     state: { params },
//   } = navigation;
//   return (
//     <View>
//       <Text>Param: {params ? params.text : ''}</Text>
//       <Button
//         title="Button"
//         onPress={() => {
//           const resetAction = StackActions.reset({
//             index: 0,
//             actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
//           });
//           navigation.dispatch(resetAction);
//         }}
//       />
//     </View>
//   );
// };

// AnotherParamScreen.navigationOptions = ({
//   navigation,
// }: {
//   navigation: Navigation;
// }) => ({
//   title: navigation.state.params ? navigation.state.params.text : '',
// });

// export default AnotherParamScreen;

export default OptionsScreen;
