/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten TypeScript template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import {
  ImageProps,
  ImageStyle,
  StyleSheet,
} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from 'react-native-ui-kitten';
import {
  mapping,
  light as theme,
} from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {ButtonComponent} from './components/ButtonComponent'
import ModalComponent from './components/ModalComponent'
import store, {persistor} from './store'
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from 'react-redux'
import Navigator from "./navigation/Navigator";
import {AppContextInterface, AppContextProvider} from './hooks/Example/Context' // context hook
/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (style: ImageStyle): React.ReactElement<ImageProps> => (
  <Icon {...style} name='heart'/>
);

const sampleAppContext: AppContextInterface = {
  name: 'Using React Context in a Typescript App',
  author: 'thehappybug',
  url: 'http://www.example.com'
};

function testFunction(obj: any) : void {
  console.log(obj, "hello world")
}

const App = (): React.ReactFragment => (
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ApplicationProvider mapping={mapping} theme={theme}>
        {/* pasang disini supaya contextnya kebaca kesemua, nah perlu juga panggil consumer, contohnya ada di optionscreen */}
        {/* <AppContextProvider value={sampleAppContext}> */}
          <Navigator/>
        {/* </AppContextProvider> */}
      </ApplicationProvider>
      
      {/* <React.Fragment>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider mapping={mapping} theme={theme}>
          <Layout style={styles.container}>
            <Text style={styles.text} category='h1'>
              Welcome to UI Kitten 😻
            </Text>
            <Text style={styles.text} category='s1'>
              Start with editing App.js to configure your App
            </Text>
            <Text style={styles.text} appearance='hint'>
              For example, try changing theme to Dark by simply changing an import
            </Text>
            <Button style={styles.likeButton} icon={HeartIcon}>
              LIKE
            </Button>
          </Layout>
          <ButtonComponent color="secondary" text="button 3" onClick={(me) => testFunction(me)}/>
          <ButtonComponent color="secondary" text="button 2" onClick=
            {
              (me) => {
                console.log("test")
                testFunction(me)
            }
          }/>
          <ModalComponent name="my modal" buttonName="hii counter me"/>
        </ApplicationProvider>
      </React.Fragment> */}
    </Provider>
  </PersistGate>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});

export default App;
