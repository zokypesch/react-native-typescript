# setup new project using ui-kitten
https://akveo.github.io/react-native-ui-kitten/docs/guides/install-into-existing-app#add-into-existing-project
https://akveo.github.io/react-native-ui-kitten/docs/guides/start-a-new-app#installation
https://akveo.github.io/react-native-ui-kitten/docs/components/button/overview#button

npx react-native init FECTicketing --template react-native-template-ui-kitten-typescript

# install library that we use
npm install react-navigation --save

# install library of our ui kit
https://avocode.com/nachos-ui#get-started
npm install nachos-ui --save
npm install react-redux --save
npm install redux --save
npm install redux-saga --save
npm install rxjs --save
npm install redux-persist --save 
npm install react-native-gesture-handler react-navigation --save
npx react-native link react-native-gesture-handler
npm install react-native-vector-icons --save
npm install @types/react-native-vector-icons --save-dev  
npx react-native link react-native-vector-icons
npm install react-native-orientation --save
npm install react-native-elements --save
npm install --save-dev @types/react-navigation
npm install --save react-navigation-drawer
npm install --save react-native-localization

# docs
https://medium.com/@andreee/bagaimana-cara-membuat-state-di-redux-mu-abadi-menggunakan-redux-persist-946fae62b7b5
https://redux.js.org/recipes/usage-with-typescript
https://github.com/Lemoncode/redux-sagas-typescript-by-example/blob/master/README.md
https://github.com/archiewald/todo-list-react-ts
https://medium.com/@killerchip0/react-native-redux-typescript-guide-f251db03428f

https://developer.android.com/studio/run/emulator-commandline

android help
https://developer.android.com/studio/run/emulator-commandline

https://facebook.github.io/react-native/docs/debugging
http://www.typescriptlang.org/docs/handbook/generics.html#hello-world-of-generics
https://medium.com/@wittydeveloper/typescript-generics-and-overloads-999679d121cf
https://medium.com/@rossbulat/typescript-generics-explained-15c6493b510f
https://github.com/rossbulat/ts-api-service-manager

# saga & redux
https://github.com/Lemoncode/redux-sagas-typescript-by-example
https://medium.com/@joshuaavalon/create-type-safe-react-redux-store-with-typescript-3ef3eb104609
https://github.com/rodrigoelp/reactnative-typescript-exercise-14/blob/49ed00d1d65f3775d78a1f2d97d612259fe47510/src/store.tsx
https://stackoverflow.com/questions/57781527/how-to-solve-console-error-redux-persist-failed-to-create-sync-storage-falli
https://dev.to/leomeloxp/taking-react-and-redux-to-the-next-level-with-typescript-1m84
https://blog.reactnativecoach.com/the-definitive-guide-to-redux-persist-84738167975
https://github.com/piotrwitek/react-redux-typescript-guide
https://github.com/rodrigoelp/reactnative-typescript-exercise-14/tree/49ed00d1d65f3775d78a1f2d97d612259fe47510
# state and props
https://fettblog.eu/typescript-react/components/
# navigator
https://medium.com/@jan.hesters/building-a-react-native-app-with-complex-navigation-using-react-navigation-85a479308f52
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-navigation/index.d.ts -> kalau mau bongkar navigation type systemnya
https://dev.to/andreasbergqvist/react-navigation-with-typescript-29ka
# react hooks
https://dev.to/camilomejia/fetch-data-with-react-hooks-and-typescript-390c
https://fettblog.eu/typescript-react/hooks/
https://medium.com/@thehappybug/using-react-context-in-a-typescript-app-c4ef7504c858
https://dev.to/hirodeath/similar-redux-architecture-example-powered-by-react-hooks-api-hdg
https://dev.to/camilomejia/fetch-data-with-react-hooks-and-typescript-390c
https://gist.github.com/thehappybug/88342c122cfb1df9f14c9a10fb4926e4
https://stackoverflow.com/questions/56347639/react-useeffect-vs-usememo-vs-usestate
https://blog.hackages.io/react-hooks-usecallback-and-usememo-8d5bb2b67231
https://github.com/react-navigation/hooks

useState is causing a re-render on the call of the setState method (second element in the array returned). It does not have any dependencies like useMemo or useEffect.

useMemo only recalculates a value if the elements in its dependency array change (if there are no dependencies - i.e. the array is empty, it will recalculate only once). If the array is left out, it will recalculate on every render. Calling the function does not cause a re-render. Also it runs during the render of the component and not before.

useEffect is called after each render, if elements in its dependency array have changed or the array is left out. If the array is empty, it will only be run once on the initial mount (and unmount if you return a cleanup function).

# fcm
https://medium.com/@katharinep/firebase-notification-integration-in-react-native-0-60-3a8d6c8d56ff -> penting 1
https://www.djamware.com/post/5d7773f05d8cdc057b603e65/react-native-firebase-cloud-messaging-fcm-push-notification
https://medium.com/@anum.amin/react-native-integrating-push-notifications-using-fcm-349fff071591 -> penting ke 3
https://www.ryadel.com/en/react-native-push-notifications-setup-firebase-2/ -> penting ke 2
https://stackoverflow.com/questions/14536595/how-to-download-google-play-services-in-an-android-emulator
https://basarat.gitbooks.io/typescript/docs/async-await.html
```
yang berubah di android
android/build.gradle -> classpath("com.android.tools.build:gradle:3.4.1", "com.google.gms:google-services:4.2.0")
android/setting.gradle -> diperhatikan saja
android/app/build.gradle -> {
    dependencies {
        // ..... below
        implementation "com.google.android.gms:play-services-base:17.0.0"
        implementation "com.google.firebase:firebase-core:17.0.1"
        implementation "com.google.firebase:firebase-messaging:19.0.0"
        implementation 'me.leolin:ShortcutBadger:1.1.21@aar'
    }
    // below dependencies
    apply plugin: 'com.google.gms.google-services'
}
check AndroidManifest.xml -> banyak yang berubah
check MainApplication.java -> lumanyun
```

# operational command
npm react-native run-android <- runnging android
emulator -avd newafd <- running emulator