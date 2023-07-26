import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserobj, FunUpdateUser } from "../Redux/Action";

const UpdateUser = () => {
    const [id, idchange] = useState('');
    const [name, namechange] = useState('');
    const [email, emailchange] = useState('');
    const [phone, phonechange] = useState('');
    const [role, rolechange] = useState('staff');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();

    const userobj = useSelector((state) => state.user.userobj)


    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { id, name, email, phone, role };
        dispatch(FunUpdateUser(userobj,id));
        navigate('/user');

    }

    useEffect(() => {
        dispatch(FetchUserobj(code));
    }, [])

    useEffect(() => {
        if (userobj) {
            idchange(userobj.id);
            namechange(userobj.name);
            emailchange(userobj.email);
            phonechange(userobj.phone);
            rolechange(userobj.role);

        }
    }, [userobj])

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header">
                        <h1> Update User</h1>
                    </div>

                    <div className="card-body" style={{ textAlign: "left" }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>ID</label>
                                    <input value={id} disabled="disabled" className="form-control"></input>

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Role</label>
                                    <select value={role} onChange={e => rolechange(e.target.value)} className="form-control">
                                        <option value={"admin"}>Admin</option>
                                        <option value={"staff"}>Staff</option>
                                    </select>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="card-footer">
                        <button className="btn btn-primary" type="submit">Submit</button>
                        <Link to={'/user'} className="btn btn-danger">Back</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateUser;