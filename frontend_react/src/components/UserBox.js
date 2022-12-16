import '../styling/all.css'
export default function UserBox() {
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
            <button id='btnadd' className='btn btn-light'><i class="fas fa-plus"></i> add</button>
            <br />

            <br />
            <div className="card">
                <div className="card-header">
                    <h5 id='texthead'>Adding Form</h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row g-1 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="name" className="col-form-label">Name</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" id="name" name='name' className="form-control" placeholder='name' />
                            </div>

                            <div className="col-auto">
                                <label htmlFor="phone" className="col-form-label">Phone</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" id="phone" name='name' className="form-control" placeholder='phone' />
                            </div>
                            <div className="col-auto">
                                <button id='btnsave' className='btn btn-light'><i class="fa-regular fa-circle-check"></i> save</button>
                                <button id='btncancel' className='btn btn-light'><i class="fa-solid fa-ban"></i> cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <br />

            <div className="card">
                <div className="card-header">
                    <h5 id='texthead'>Search Form</h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row g-1 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="namesearch" className="col-form-label">Name</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" id="namesearch" name='namesearch' className="form-control" placeholder='name' />
                            </div>

                            <div className="col-auto">
                                <label htmlFor="phonesearch" className="col-form-label">Phone</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" id="phonesearch" name='phonesearch' className="form-control" placeholder='phone' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <br />

            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <button id='btnedit' className='btn btn-light'><i class="fa-sharp fa-solid fa-pen"></i> edit</button>
                            <button id='btndelete' className='btn btn-light'><i class="fa-solid fa-ban"></i> delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}