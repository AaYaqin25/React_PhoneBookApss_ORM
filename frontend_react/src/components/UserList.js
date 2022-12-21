import React from "react"
import UserItem from "./UserItem"

export default function UserList(props) {
    return (
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
    )

}