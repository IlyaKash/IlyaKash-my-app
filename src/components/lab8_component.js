import React from "react";
import Table from "./table_copmonent";


const Lab8_component=()=>{
    const columns=[
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Age',
            accessor: 'age'
        },
        {
            Header: 'Country',
            accessor: 'country'
        }
    ];
    
    const data=[
        {id:1, name: 'Jhon', age: 30, country: 'USA'},
        {id:2, name: 'Vovan', age: 35, country: 'Russia'},
        {id:3, name: 'Ilya1', age: 22, country: 'Russia'},
        {id:4, name: 'Ilya2', age: 22, country: 'Russia'},
        {id:5, name: 'Ilya3', age: 22, country: 'Russia'},
        {id:6, name: 'Ilya4', age: 22, country: 'Russia'},
        {id:7, name: 'Ilya5', age: 22, country: 'Russia'},
        {id:8, name: 'Ilya6', age: 22, country: 'Russia'},
        {id:9, name: 'Ilya7', age: 22, country: 'Russia'},
        {id:10, name: 'Ilya8', age: 22, country: 'Russia'},
        {id:11, name: 'Ilya9', age: 22, country: 'Russia'},
        {id:12, name: 'Ilya10', age: 22, country: 'Russia'},
        {id:13, name: 'Ilya11', age: 22, country: 'Russia'},
        {id:14, name: 'Ilya12', age: 22, country: 'Russia'},
        {id:15, name: 'Ilya13', age: 22, country: 'Russia'},
        {id:16, name: 'Ilya14', age: 22, country: 'Russia'},
        {id:17, name: 'Ilya15', age: 22, country: 'Russia'},
        {id:18, name: 'Ilya16', age: 22, country: 'Russia'},
        {id:19, name: 'Ilya17', age: 22, country: 'Russia'},
        {id:20, name: 'Ilya18', age: 22, country: 'Russia'},
        {id:21, name: 'Ilya19', age: 22, country: 'Russia'},
        {id:22, name: 'Ilya20', age: 22, country: 'Russia'},
        {id:23, name: 'Ilya21', age: 22, country: 'Russia'},
        {id:24, name: 'Ilya22', age: 22, country: 'Russia'},
        {id:25, name: 'Ilya23', age: 22, country: 'Russia'},
        {id:26, name: 'Ilya24', age: 22, country: 'Russia'},
        {id:27, name: 'Ilya25', age: 22, country: 'Russia'},
        {id:28, name: 'Ilya26', age: 22, country: 'Russia'},
        {id:129, name: 'Ilya27', age: 22, country: 'Russia'},
        {id:150, name: 'Ilya28', age: 22, country: 'Russia'},
        {id:160, name: 'Ilya29', age: 22, country: 'Russia'},
        {id:170, name: 'Ilya30', age: 22, country: 'Russia'},
        {id:180, name: 'Ilya31', age: 22, country: 'Russia'},
        {id:190, name: 'Ilya32', age: 22, country: 'Russia'},
        {id:50, name: 'Ilya33', age: 22, country: 'Russia'},
        {id:60, name: 'Ilya34', age: 22, country: 'Russia'},
        {id:70, name: 'Ilya35', age: 22, country: 'Russia'},
        {id:80, name: 'Ilya36', age: 22, country: 'Russia'},
        {id:90, name: 'Ilya37', age: 22, country: 'Russia'},
        {id:100, name: 'Ilya38', age: 22, country: 'Russia'},
        {id:110, name: 'Ilya39', age: 22, country: 'Russia'},
        {id:120, name: 'Ilya40', age: 22, country: 'Russia'},
        {id:131, name: 'Ilya41', age: 22, country: 'Russia'},
        {id:141, name: 'Ilya42', age: 22, country: 'Russia'},
        {id:151, name: 'Ilya43', age: 22, country: 'Russia'},
        {id:161, name: 'Ilya44', age: 22, country: 'Russia'},
        {id:171, name: 'Ilya45', age: 22, country: 'Russia'},
        {id:181, name: 'Ilya46', age: 22, country: 'Russia'},
        {id:191, name: 'Ilya47', age: 22, country: 'Russia'},

    ];
    return (
        <div>
            <h1>React table example</h1>
            <Table columns={columns} data={data} />
        </div>
    );
};
export default Lab8_component;

