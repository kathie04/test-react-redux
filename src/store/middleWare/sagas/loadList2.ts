import {call, put, SagaReturnType, takeEvery} from "@redux-saga/core/effects";
import {setErrorList2, setProcessList2, setSuccessList2, types} from "../../actions/actionList2";
import fetchList from "../../../services/fetchList";

export default function* loadList1Watcher2() {
    yield takeEvery(types.REQUEST_LIST, loadList1Worker2);
}

type Data = SagaReturnType<typeof fetchList>


function* loadList1Worker2() {
    yield put(setProcessList2())
    try {
        const data: Data = yield call(fetchList, 'https://jsonplaceholder.typicode.com/posts?_page=2&_limit=10');
        if (Array.isArray(data)) {
            yield put(setSuccessList2(data));
        } else {
            yield put(setSuccessList2([]));
        }
    } catch (error: any) {
        yield put(setErrorList2(error))
    }
}
