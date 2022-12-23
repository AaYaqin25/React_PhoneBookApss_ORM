import '../styling/all.css'
import React, { Component } from 'react'
import UserList from './UserList';
import UserFormSearch from './UserFormSearch';
import UserFormAdd from './UserFormAdd';
import axios from 'axios'


export default class UserBox extends Component {
    constructor(props) {
        super(props)
        this.params = {}
        this.state = {
            users: [],
            isAdd: false
        }
    }

    componentDidMount() {
        this.loadUser()
    }

    loadUser = () => {
        axios.get('http://localhost:3000/users', { params: this.params })
            .then(({ data }) => {
                this.setState(state => ({
                    users: [...(this.params.page === 1 ? [] : state.users), ...data.data.result.map(item => {
                        item.sent = true
                        return item
                    })]

                }))
                this.params.page = data.data.page
                this.params.totalPage = data.data.totalPage
            })
            .catch((error) => {
                console.log(error);
            })
    }

    addUser = ({ name, phone }) => {
        const id = Date.now()
        this.setState(function (state, props) {
            return {
                users: [
                    ...state.users,
                    { id, name, phone, sent: true }
                ]
            };
        });

        axios.post('http://localhost:3000/users', { name, phone })
            .then(({ data }) => {
                this.setState(state => {
                    return {
                        users: state.users.map(item => {
                            if (item.id === id) {
                                return {
                                    id: data.data.id,
                                    name: data.data.name,
                                    phone: data.data.phone,
                                    sent: true
                                }
                            }
                            return item
                        })
                    }
                })
            })
            .catch((error) => {
                this.setState(state => {
                    return {
                        users: state.users.map(item => {
                            if (item.id === id) {
                                return {
                                    ...item,
                                    sent: false
                                }
                            }
                            return item
                        })
                    }
                })
            })
    }

    removeUser = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(({ data }) => {
                this.setState(state => {
                    return {
                        users: state.users.filter(item => item.id !== id)
                    }
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    updateUser = (id, name, phone) => {
        axios.put(`http://localhost:3000/users/${id}`, { name, phone })
            .then(({ data }) => {
                this.setState(state => {
                    return {
                        users: state.users.map(item => {
                            if (item.id === id) {
                                return {
                                    id: data.data.id,
                                    name: data.data.name,
                                    phone: data.data.phone,
                                    sent: true
                                }
                            }
                            return item
                        })
                    }
                })
            })
            .catch((error) => {
                console.log("gagal update", error);
            })
    }

    resendUser = ({ id, name, phone }) => {
        axios.post('http://localhost:3000/users', { name, phone })
            .then(({ data }) => {
                this.setState(state => {
                    return {
                        users: state.users.map(item => {
                            if (item.id === id) {
                                return {
                                    id: data.data.id,
                                    name: data.data.name,
                                    phone: data.data.phone,
                                    sent: true
                                }
                            }
                            return item
                        })
                    }
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    searchUser = (query) => {
        this.params = { ...this.params, ...query, page: 1 }
        this.loadUser()
    }

    loadPagination = () => {
        if (this.params.page <= this.params.totalPage) {
            this.params = { ...this.params, page: this.params.page + 1 }
        }
        
        this.loadUser()

    }

    showAdd = (props) => {
        if (!props.show) {
            return null;
        }
        return (
            <div className="card">
                <div className="card-header">
                    <h5 id='texthead'>Adding Form</h5>
                </div>
                <div className="card-body">
                    <UserFormAdd submit={this.addUser} cancel={this.handleCancelClick} />

                </div>
            </div>
        );
    }

    handleClickAdd = () => {
        this.setState(state => ({
            isAdd: !state.isAdd
        }));
    }

    handleCancelClick = () => {
        this.setState({
            isAdd: false
        });
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <div className="head">
                            <h1>Phone Book Apps</h1>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    {/* ini toggle kalo false munculin true kalo true munculin false*/}
                    {this.state.isAdd ? <this.showAdd show={this.state.isAdd} /> : <button id='btnadd' className='btn btn-light' onClick={this.handleClickAdd} ><i className="fas fa-plus"></i> add </button>}
                </div>
                <br />

                <div className="card">
                    <div className="card-header">
                        <h5 id='texthead'>Search Form</h5>
                    </div>
                    <div className="card-body">
                        <UserFormSearch submit={this.searchUser} />
                    </div>
                </div>
                <br />
                <UserList data={this.state.users} delete={this.removeUser} resend={this.resendUser} renew={this.updateUser} paginationscroll={this.loadPagination} />

            </div>
        )
    }
}
