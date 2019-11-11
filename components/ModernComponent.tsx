import React from 'react';
import Post from '../hooks/Example/Post';
import {Text, View, Button} from 'react-native'
import reducer, {initialState, Action, State} from '../hooks/Example/Reducer'
import { AppContextConsumer, AppContextInterface, AppContextProvider } from '../hooks/Example/Context';

const initialDataState: AppContextInterface = {
    name: "",
    author: "",
    url: ""
}

function updateContext(name: string, author: string): AppContextInterface {
    console.log("called updatecontext")
    return  {
        name: name,
        author: author,
        url: "fb.com"
    } as AppContextInterface
}

// const memoclbk: number = 0; 
// contoh high order functionnya ya kt tes
const ModernComponent: React.FC<{}> = () => {
  const service = Post();
  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );

  const [data, setData] = React.useState<AppContextInterface>(initialDataState);

  const [memoCount, setMemoCount] = React.useState(0);
  const [callbackCount, setCallbackCount] = React.useState(0);

  const memoFunction = () => {
    console.log(memoCount, "memo called");
    // Do something that will take a lot of processing ...
  };

  const callbackFunction = React.useCallback(() => {
    console.log(callbackCount, "callback called");
    // Do something with callbackCount ...
    return callbackCount;
  }, [callbackCount]);
  
  React.useMemo(memoFunction, [memoCount]);
  
  React.useEffect(() => {
    console.log("side effect calling")
}, [memoCount]) 

  return (
    <View>
      {service.status === 'loading' && <Text>Loading...</Text>}
      {service.status === 'loaded' &&
        service.payload.results.map(starship => (
          <Text key={starship.url}>{starship.name}</Text>
        ))}
      {service.status === 'error' && (
        <Text>Error, the backend moved to the dark side.</Text>
      )}
        <Text>{state.count}</Text>
        <Button title="hitme increase" onPress={() => dispatch({type: "increment"})} />
        <Button title="hitme reset" onPress={() => dispatch({type: "reset"})}/>
        {/* <AppContextConsumer>
            {appContext => appContext && (
                <Text>
                Name: {appContext.name},
                Author: {appContext.author},
                Url: {appContext.url}
                </Text>
            )}
        </AppContextConsumer> */}
        <AppContextProvider value={data}>
            <ChildComponent action={callbackFunction}/>
        </AppContextProvider>
        <Button title="change context" onPress={() => setData(updateContext("udin", "okto"))} />
        <Button onPress={() => setCallbackCount(callbackCount + 1)} title="Change callback count" />
        <Button onPress={() => setMemoCount(memoCount + 1)} title="Change memo count"/>
    </View>
  );
};

const ChildComponent = ({action}) => {
    const [value, setValue] = React.useState(0)

    const [memoCount, setMemoCount] = React.useState(0);

    React.useEffect(() => {
        console.log("child calling")
        let val = action()
        setValue(val)
    }, [action]) 

    return (
        <View>
            <Text>
                <AppContextConsumer>
                    {appContext => appContext && (
                        <Text>
                        Name: {appContext.name},
                        Author: {appContext.author},
                        Url: {appContext.url}
                        </Text>
                    )}
                </AppContextConsumer>
                {memoCount}
            </Text>
            <Text>
                Child : {value}
            </Text>
            <Button title="call from child" onPress={() => setMemoCount(memoCount + 1)} />
        </View>
    )
}
export default ModernComponent;
