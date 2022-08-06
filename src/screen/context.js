import React from 'react';
import { counterStore } from './store';

export const CounterStoreContext = React.createContext(counterStore);
export const useCounterStore = () => React.useContext(CounterStoreContext);
