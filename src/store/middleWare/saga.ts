import {delay, spawn} from "@redux-saga/core/effects";
import loadList1Watcher from "./sagas/loadList1";
import loadList1Watcher2 from "./sagas/loadList2";
import loadList1Watcher3 from "./sagas/loadList3";

export default function* rootSaga() {
  while (true) {
    yield spawn(loadList1Watcher);
    yield spawn(loadList1Watcher2);
    yield spawn(loadList1Watcher3);
    yield delay(20000);
  }
}
