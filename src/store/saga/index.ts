import {all} from 'redux-saga/effects'
import {productsWatcher} from "./product.saga";

export function* rootWatcher() {
    yield all([
        productsWatcher(),
    ])
}