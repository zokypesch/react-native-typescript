import styles from "./styles";
import { strings as loginStrings } from "../../screens/Login";
import React, { PureComponent } from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import {
  DrawerItems,
  // NavigationInjectedProps,
  SafeAreaView,
  withNavigation,
  // DrawerNavigatorConfig,
  DrawerItemsProps
} from "react-navigation";

class BurgerMenu extends PureComponent<DrawerItemsProps> {

  render() {
    // let newDraw = this.
    return (
      <SafeAreaView style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
        <ScrollView>
          {/* {this.props.navigation.navigate} */}
          {/* <DrawerItems {...this.props}/> */}
          <DrawerItems {...this.props}/>
        </ScrollView>
        <Button
          icon={{ name: "md-log-out", type: "ionicon" }}
          title={loginStrings.logOut}
          iconContainerStyle={styles.icon}
          buttonStyle={styles.button}
          titleStyle={styles.title}
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        />
      </SafeAreaView>
    );
  }
}

export default BurgerMenu
// export default withNavigation(BurgerMenu);
