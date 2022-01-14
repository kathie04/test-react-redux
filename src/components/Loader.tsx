import logo from "../logo.svg";
import React from "react";
import {useSelector} from "react-redux";
import {selectErrors, selectIsError} from "../store/selectors/selectors";


const Loader: React.FC = () => {

    let isError: boolean = useSelector(selectIsError);
    let errors = useSelector(selectErrors)

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
            {isError
                ? <div>
                    <p>Something went wrong, we've got an errors:</p>
                    <ul>
                        {errors.map((item, index) => {
                            if (item) {
                                return <p>Request for list{index + 1} has got an error: {item.message}</p>
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
