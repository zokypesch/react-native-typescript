import React, {useEffect} from 'react';
import { StyleSheet,  Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import firebase from 'react-native-firebase'
import {
  ApplicationProvider,
  Layout,
  Text,
} from 'react-native-ui-kitten';
import {
  mapping,
  light as theme,
} from '@eva-design/eva';

const App = (): React.ReactFragment => {

    async function getToken() {
      let fcmToken = await AsyncStorage.getItem('fcmToken');
      if (!fcmToken) {
          fcmToken = await firebase.messaging().getToken();
          if (fcmToken) {
              await AsyncStorage.setItem('fcmToken', fcmToken);
          }
      }
      console.log("we got token", fcmToken)
  }

  async function checkPermission() {
      const enabled = await firebase.messaging().hasPermission();
      if (enabled) {
          getToken();
      } else {
          requestPermission();
      }
  }

  async function requestPermission() {
      try {
          await firebase.messaging().requestPermission();
          getToken();
      } catch (error) {
          console.log('permission rejected');
      }
  }

  async function createNotificationListeners() {

      console.log("create notification listener")
      firebase.notifications().onNotification(notification => {
          notification.android.setChannelId('insider').setSound('default')
          firebase.notifications().displayNotification(notification)

          console.log(notification, "hello world")
      });

      firebase.notifications().onNotificationOpened((notificationOpen) => {
        const { title, body } = notificationOpen.notification;
          showAlert(title, body);
      });

      /*
      * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
      * */
      const notificationOpen = await firebase.notifications().getInitialNotification();
      if (notificationOpen) {
          const { title, body } = notificationOpen.notification;
          showAlert(title, body);
      }

       /*
      * Triggered for data only payload in foreground
      * */
      firebase.messaging().onMessage((message) => {
        //process data message
        console.log(JSON.stringify(message));
      });
  }

  useEffect(() => {
    const channel = new firebase.notifications.Android.Channel('insider', 'insider channel', firebase.notifications.Android.Importance.Max)
    firebase.notifications().android.createChannel(channel);
    checkPermission();
    createNotificationListeners();

    return () => {
      checkPermission();
      createNotificationListeners();
    }
  }, [])

  function showAlert(title, body) {
    Alert.alert(
      title, body,
      [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }
  
  return (
    <React.Fragment>
      <ApplicationProvider mapping={mapping} theme={theme}>
      <Layout style={styles.container}>
        <Text>Hello world</Text>
      </Layout>
      </ApplicationProvider>
    </React.Fragment>
    
  )
}

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