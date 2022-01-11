import {call, put, SagaReturnType, takeEvery} from "@redux-saga/core/effects";
import {setErrorList3, setProcessList3, setSuccessList3, types} from "../../actions/actionList3";
import fetchList from "../../../services/fetchList";

export default function* loadList1Watcher3() {
    yield takeEvery(types.REQUEST_LIST, loadList1Worker3);
}
type Data = SagaReturnType<typeof fetchList>

function* loadList1Worker3() {
    yield put(setProcessList3())
    try {
        const data: Data = yield call(fetchList, 'https://jsonplaceholder.typicode.com/posts?_page=3&_limit=10');
        if (Array.isArray(data)) {
            yield put(setSuccessList3(data));
        } else {
            yield put(setSuccessList3([]));
        }
    } catch (error: any) {
        yield put(setErrorList3(error))
    }
}
