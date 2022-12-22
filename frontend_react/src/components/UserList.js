import React from "react"
import UserItem from "./UserItem"

export default function UserList(props) {

    const scrolling = (event) => {
        console.log("di scroll");
        var element = event.target;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            props.paginationscroll()
        }
    }
    return (
        <div onScroll={scrolling} style={{ overflowY: "scroll", height: 50}}>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item, index) => (
                            <UserItem key={item.id} no={index + 1} name={item.name} phone={item.phone} sent={item.sent} remove={() => props.delete(item.id)} resending={() => props.resend(item)} update={(name, phone) => props.renew(item.id, name, phone)} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}