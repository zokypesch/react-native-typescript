import {createContext}  from 'react';

export interface AppContextInterface {
  name: string,
  author: string,
  url: string
}

// export const {Provider, Consumer} = createContext<AppContextInterface>({name: "", author: "", url: ""});
// export const {Provider, Consumer} = createContext<AppContextInterface | null>(null);

const ctxt = createContext<AppContextInterface | null>(null);
export const AppContextProvider = ctxt.Provider;
export const AppContextConsumer = ctxt.Consumer;