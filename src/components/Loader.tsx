import logo from "../logo.svg";
import React from "react";
import fetchStatuses from "../models/statuses";
import {useSelector} from "react-redux";
import {State} from "../store/reducers/rootReducer";

interface LoaderProps {
    isError: boolean
}

const Loader: React.FC<LoaderProps> = ({isError}) => {

    const state = useSelector((state: State) => state);
    let list = [state.list1, state.list2, state.list3]

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
            {isError
                ? <div>
                    <p>Something went wrong, we've got an errors:</p>
                    <ul>
                        {list.map((item, index) => {
                            if (item.status === fetchStatuses.ERROR) {
                                return <p>Request for list{index + 1} has got an error: {item.error.message}</p>
                            }
                            return <p>Request for list{index + 1} was successful</p>
                        })
                        }
                    </ul>
                </div>
                : <p>Please wait while data is loading</p>}
        </div>
    )
}

export default Loader;
