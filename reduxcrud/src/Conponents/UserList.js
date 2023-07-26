import React, { useEffect } from "react";
import { RemoveUser, fetchUserList } from "../Redux/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserList = (props) => {
    useEffect(() => {
        props.loaduser();
    }, [])

    const handledelete = (code) => {
        if (window.confirm('do you want to delete ? ')) {
            props.removeuser(code);
            props.loaduser();
            toast.success('User Removed Successfully...!')

        }
    }



    return (

        // props.user.loading?<div><h2>loading....</h2></div>:
        // props.user.errmessage?<div><h2>{props.user.errmessage}</h2></div>:
        <div>
            <div className="card">
                <div className="card-header">
                    <Link to={'/user/add'} className="btn btn-success">Add +</Link>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>id</td>
                                <td>name</td>
                                <td>email</td>
                                <td>phone</td>
                                <td>role</td>
                                <td>action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.user.userlist && props.user.userlist.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.role}</td>

                                        <td>
                                            <Link to={'/user/edit/' + item.id} className="btn btn-info" style={{ marginRight: "10px" }}>Edit</Link>
                                            <button onClick={() => { handledelete(item.id) }} className="btn btn-danger">Delete</button>
                                        </td>


                                    </tr>
                                )
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

const mapStoreToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(fetchUserList()),
        removeuser: (code) => dispatch(RemoveUser(code))
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(UserList);