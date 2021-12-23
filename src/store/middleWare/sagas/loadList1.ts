import {call, delay, put, takeEvery, SagaReturnType} from "@redux-saga/core/effects";
import {setErrorList1, setProcessList1, setSuccessList1, types} from "../../actions/actionList1";
import fetchList from "../../../services/fetchList";

export default function* loadList1Watcher () {
  yield takeEvery(types.REQUEST_LIST, loadList1Worker);
}

type Data = SagaReturnType<typeof fetchList>

function* loadList1Worker () {
  while (true) {
    yield put(setProcessList1())
    try {
      const data : Data = yield call(fetchList, 'https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10');
      if (Array.isArray(data)) {
        yield put(setSuccessList1(data));
      } else {
        yield put(setSuccessList1([]));
      }
    } catch (error: any) {
      yield put(setErrorList1(error))
    }
  yield delay(20000);
  }
}
