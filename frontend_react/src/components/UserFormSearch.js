import React, { Component } from "react";

export default class UserFormSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }



    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submit({ name: this.state.name, phone: this.state.phone })
    }

    handleReset = () => {
        this.props.reset()
        this.setState({name: '', phone: ''})
    }
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
            <div className="row g-1 align-items-center">
                <div className="col-auto">
                    <label htmlFor="name" className="col-form-label">Name</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="name" name='name' className="form-control" placeholder='name' onChange={this.handleInputChange} value={this.state.name} />
                </div>

                <div className="col-auto">
                    <label htmlFor="phone" className="col-form-label">Phone</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="phone" name='phone' className="form-control" placeholder='phone' onChange={this.handleInputChange} value={this.state.phone} />
                </div>
                <div className="col-auto">
                    <button className='btn btn-primary' ><i className="fa-regular fa-circle-check"></i> search</button>
                    <button className='btn btn-dark' onClick={this.handleReset} ><i className="fa-solid fa-rotate"></i> reset</button>
                </div>
            </div>
        </form>
        )
    }
}