import React from 'react';
import { makeObservable, action, observable, makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action.bound,
      decrement: action.bound,
    });
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}

export const counterStore = new CounterStore();

// Create a React Context with the counter store instance.
