import '../../lib/style/table.css';
import React, {Component} from 'react';
import ReactDOM           from 'react-dom';
import {Table, Col}       from '../../src/Index.js';
import {data, list}       from './fackData';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            list: [],
            length: 10,
            data: data,
            selected: [],
        };
    }

    render() {
        const dataFormat = {
            "a": function (cell, level, row) {
                return cell + ' I am level ' + level;
            },
            "b": function (cell, level, row, index, col) {
                if (level != 0) {
                    // let key = col[index - 1];
                    // return row[key.id || key];
                    return '';
                } else {
                    return cell + ' I am row b';
                }
            },
            "c": function (cell, level, row, index, col) {
                if (level != 0) {
                    let key = col[index - 2];
                    return row[key.id || key];
                } else {
                    return cell;
                }
            },
            "d": function (cell, level, row, index, col) {
                if (level != 0) {
                    let key = col[index - 1];
                    return row[key.id || key];
                } else {
                    return cell + 1;
                }
            }
        };
        const options = {
            page: 1,
            sizePerPage: 1,
            onPageChange: function (page, sizePerPage) {

            }
        };

        const selectRow = {
            mode: "checkbox",
            bgColor: "#ffd800",
            selected: this.state.selected,
            hideSelectColumn: false,
            onSelectAll: (checked, currentSelected) => {
                if (checked) {
                    let checkedList = currentSelected.map(item => {
                        return item.id;
                    });
                    this.setState(old => {
                        old.selected = checkedList;
                        return old;
                    });
                } else {
                    this.setState(old => {
                        old.selected = [];
                        return old;
                    });
                }
            },
            onSelect: (checked, row) => {
                if (checked) {
                    this.setState(old => {
                        old.selected.push(row.id);
                        return old;
                    });
                } else {
                    this.setState(old => {
                        old.selected.splice(old.selected.indexOf(row.id), 1);
                        return old;
                    });
                }
            }
        };
        const style = {
            margin: "20px",
            background: "#fff"
        };
        return (
            <div>
                <div style={style}>
                    <Table
                        isKey="id"
                        data={list}
                        title="colspan && rowspan"
                    >
                        <Col dataField="id" dataAlign="center" colSpan={2}>id</Col>
                        <Col dataAlign='center' dataField='regionRoleName' colSpan={2}>区域角色</Col>
                        <Col dataAlign='center' dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' dataField='region' render={(index) => {
                            if (index == 3) {
                                return {colSpan: 2, rowSpan: 2};
                            }
                            if (index == 4) {
                                return {rowSpan: 0};
                            }
                        }}>区域</Col>
                        <Col dataAlign='center' dataField='createTime' render={(index) => {
                            if (index == 4) {
                                return {rowSpan: 0};
                            }
                        }}>创建时间</Col>
                        <Col dataAlign='center' dataField='description'>描述</Col>
                    </Table>
                </div>
                <div style={style}>
                    <Table
                        isKey="id"
                        data={list}
                        pagination={false}
                        selectRow={selectRow}
                        title="选择框+nestedHead+宽度"
                        nestedHead={[['喵', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]]}
                    >
                        <Col dataField="id" dataAlign="center" dataFixed="auto">id</Col>
                        <Col dataAlign='center' width="150px" dataField='regionRoleName'
                             dataFixed="auto">区域角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataSort={true}
                             dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='region'
                             dataFixed="auto">区域</Col>
                        <Col dataAlign='center' width="150px" dataField='createTime'>创建时间</Col>
                        <Col dataAlign='center' width="150px" dataField='createTime'>创建时间</Col>
                        <Col dataAlign='center' width="150px" dataField='createTime'>创建时间</Col>
                        <Col dataAlign='center' width="150px" dataField='createTime'>创建时间</Col>
                        <Col dataAlign='center' width="150px" dataField='createTime'>创建时间</Col>
                        <Col dataAlign='center' width="150px" dataField='createTime'>创建时间</Col>
                        <Col dataAlign='center' width="150px" dataField='createTime'>创建时间</Col>
                        <Col dataAlign='center' width="150px" dataField='createTime'>创建时间</Col>
                        <Col dataAlign='center' width="150px" dataField='createTime'>创建时间</Col>
                        <Col dataAlign='center' width="150px" dataField='createTime'>创建时间</Col>
                        <Col dataAlign='center' width="150px" dataField='description'
                             dataFixed="auto">描述</Col>
                        <Col dataAlign='center' width="150px" dataFormat={() => {
                            return <a href="#">freedom!</a>;
                        }}>操作</Col>
                    </Table>
                </div>
                <div style={style}>
                    <Table
                        isKey="id"
                        data={list}
                        pagination={false}
                        selectRow={selectRow}
                        title="选择+自定义Col+排序"
                    >
                        <Col dataField="id" dataAlign="center" dataFixed="left">id</Col>
                        <Col dataAlign='center' width="150px" dataField='regionRoleName'
                             dataFixed="left">区域角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataSort={true}
                             dataField='systemRoleName'>系统角色123</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='region'
                             dataFixed="left">区域</Col>
                        <Col dataAlign='center' width="150px" dataField='createTime'>创建时间</Col>
                        <Col dataAlign='center' width="150px" dataField='description'
                             dataFixed="auto">描述</Col>
                        <Col dataAlign='center' width="150px" dataFormat={() => {
                            return <a href="#">freedom!</a>;
                        }}>操作</Col>
                    </Table>
                </div>
                <div style={style}>
                    <Table
                        isKey="id"
                        data={list}
                        pagination={true}
                        topPagination={true}
                        options={options}
                        title="选择+自定义Col+排序"
                    >
                        <Col dataField="id" dataAlign="center" dataFixed="left">id</Col>
                        <Col dataAlign='center' width="150px" dataField='regionRoleName'
                             dataFixed="left">区域角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataSort={true}
                             dataField='systemRoleName'>系统角色123</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='systemRoleName'>系统角色</Col>
                        <Col dataAlign='center' width="150px" dataField='region'
                             dataFixed="left">区域</Col>
                        <Col dataAlign='center' width="150px" dataField='createTime'>创建时间</Col>
                        <Col dataAlign='center' width="150px" dataField='description'
                             dataFixed="auto">描述</Col>
                        <Col dataAlign='center' width="150px" dataFormat={() => {
                            return <a href="#">freedom!</a>;
                        }}>操作</Col>
                    </Table>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Main/>, document.querySelector('.main'));