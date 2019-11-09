

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import storage  from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    // storage: storage,
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
    // whitelist: [
    //     'chatReducer'
    // ]
};

export default persistConfig;