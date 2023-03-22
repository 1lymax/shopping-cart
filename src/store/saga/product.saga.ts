import {put, takeEvery} from 'redux-saga/effects'

import {sagaActions} from './actions'
import {setProducts} from "../slices/product.slice";


interface FetchProductFromApiProps {
    limit: number,
    offset: number
}

const fetchProductsFromApi = async (payload: FetchProductFromApiProps) => {
    const { limit, offset } = payload
    const result = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${offset}`)
        .then(response => response.json())
    return result
}

function* fetchProductsWorker(action: any): any {
    const data = yield fetchProductsFromApi(action.payload)
    yield put(setProducts(data.products))
}

export function* productsWatcher() {
    yield takeEvery(sagaActions.FETCH_ALL_PRODUCTS, fetchProductsWorker)
}
