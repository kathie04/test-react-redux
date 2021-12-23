import React, {useEffect} from 'react';
import './App.css';
import Loader from "./components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {requestList1} from "./store/actions/actionList1";
import {Dispatch} from "redux";
import {requestList2} from "./store/actions/actionList2";
import {requestList3} from "./store/actions/actionList3";
import {State} from "./store/reducers/rootReducer";
import Table from "./components/Table";
import fetchStatuses from "./models/statuses";

function App() {

    let dispatch: Dispatch = useDispatch()

    const state = useSelector((state : State) => state);

    let isLoading: boolean;

    let isError: boolean = false;

    useEffect(() => {
        dispatch(requestList1());
        dispatch(requestList2());
        dispatch(requestList3())
    }, [dispatch])

    let list = [state.list1, state.list2, state.list3]

    isLoading = !list.every(item => item.status === fetchStatuses.SUCCESS || item.status === fetchStatuses.ERROR)

    isError = list.some(item => item.status === fetchStatuses.ERROR);

    return (
        <div className="App">
            <header className="App-header">
                {isLoading || isError ? <Loader isError={isError}/> : <Table />}
            </header>
        </div>
    );
}

export default App;
