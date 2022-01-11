import React from "react";
import {useSelector} from "react-redux";
import {selectUnionList} from "../store/selectors/selectors";

const Table: React.FC = () => {

    let list = useSelector(selectUnionList);
    let fields: string[] = []

    list.forEach(item => {
        for (let key in item) {
            if (fields.indexOf(key) === -1) {
                fields.push(key)
            }
        }
    })

    return (
        <table className={'max-w-[90%] divide-y divide-gray-200'}>
            <thead className={"bg-gray-50"}>
                <tr className="px-6 py-3 text-center text-base font-medium text-gray-500 uppercase tracking-wider">
                    <td>№№</td>
                    { fields.map((item, index) => {
                        return <td key={index}>{item}</td>
                    })}
                </tr>
            </thead>
            <tbody className={"bg-white divide-y divide-gray-200"}>
                {list.map((item, index) => {
                    return <tr key={item.id}>
                        <td className={"px-6 py-4 text-xs text-gray-700"}>{index+1}</td>
                        {fields.map(field => {
                            return <td key={Math.random()} className={"px-6 py-4 text-xs text-gray-700"}>{item[field]}</td>
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Table