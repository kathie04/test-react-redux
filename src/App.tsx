import React, {useEffect} from 'react';
import './App.css';
import Loader from "./components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {requestList1} from "./store/actions/actionList1";
import {Dispatch} from "redux";
import {requestList2} from "./store/actions/actionList2";
import {requestList3} from "./store/actions/actionList3";
import Table from "./components/Table";
import {selectIsError, selectIsLoading} from "./store/selectors/selectors";

function App() {

    let dispatch: Dispatch = useDispatch()

    let isLoading: boolean = useSelector(selectIsLoading);

    let isError: boolean = useSelector(selectIsError);

    useEffect(() => {
        dispatch(requestList1());
        dispatch(requestList2());
        dispatch(requestList3())
    }, [dispatch])

    return (
        <div className="App">
            <header className="App-header">
                {isLoading || isError ? <Loader isError={isError}/> : <Table />}
            </header>
        </div>
    );
}

export default App;
