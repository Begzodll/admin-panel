import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
import {connect} from "react-redux";

import UserSingUp from "../../Components/UserSingUp";
import UserSingIn from "../../Components/UserSingIn";
import AdminSingIn from "../../Components/AdminSingIn";
import AdminSingUp from "../../Components/AdminSingUp";
import firebase from "../../firebase/config";

import {signInAccount, createUser, signInWithGoogle} from "../../firebase/config";
import {
    adminGetValueEmail,
    adminGetValueLastName,
    adminGetValueName,
    adminGetValuePassword, getAdminFunc, getAdminSingInEmailFunc, getAdminSingInPasswordFunc, getGoogleUser,
    getUserFunc,
    getValueRegUserEmail,
    getValueRegUserLastName,
    getValueRegUserName,
    getValueRegUserPsw,
    getValueSingInEmailFunc,
    getValueSingInPasswordFunc,
    PostAdminFunc,
    PostUserFunc
} from "../../store/Reducers/RegisterSlice";

function Register(
    {
        //State
        //Sing Up User
        users, admin,userGoogle,
        registerUserName,
        registerUserLName,
        registerUserEmail,
        registerUserPsw,

        //Sing In User

        singInEmail,
        singInPassword,

//Sing Up Admin
        adminName,
        adminLastname,
        adminEmail,
        adminPassword,
        // Sing In
        adminSingInEmail,
        adminSingInPassword,

        //Functions
        //Api
        getGoogleUser,
        getUserFunc,
        getAdminFunc,
        PostUserFunc,
        PostAdminFunc,

        //Sing Up User 88
        getValueRegUserName,
        getValueRegUserLastName,
        getValueRegUserEmail,
        getValueRegUserPsw,

        //Sing In User
        getValueSingInEmailFunc,
        getValueSingInPasswordFunc,

        //Sing Up Admin
        adminGetValueName,
        adminGetValueLastName,
        adminGetValueEmail,
        adminGetValuePassword,

        //Sing In Admin
        getAdminSingInEmailFunc,
        getAdminSingInPasswordFunc
    }) {

    const [toggle, setToggle] = useState(false)
    const [modal, setModal] = useState(true)
    const [register, setRegister] = useState(false)

    useEffect(() => {
        getUserFunc()
        getAdminFunc()
    }, [getUserFunc, getAdminFunc])

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            getGoogleUser(user)
        })
    }, [getGoogleUser])
    

    const navigate = useNavigate()

    function Toggler() {
        setModal(p => !p)
        setRegister(false)
    }

    const PostData = () => {
        if (registerUserName !== "" &&
            registerUserEmail !== "" &&
            registerUserPsw !== "" &&
            registerUserPsw.length > 7) {
            createUser(registerUserEmail, registerUserPsw)
                .then(() => navigate('/home'))
                .catch(() => toast.error('This account had been taken')
                )
        } else if (registerUserPsw.length < 7) {
            toast.error('Password should be minimum 8')
        } else {
            toast.error('You have to complete all inputs')
        }
    }

    const CheckSingIn = () => {
        signInAccount(singInEmail, singInPassword)
            .then(() => {
                navigate('/home')
            }).catch(() => toast.error("Check your password or email"))
    }

    const PostDataAdmin = () => {
        if (adminName !== "" &&
            adminEmail !== "" &&
            adminPassword !== "" &&
            adminPassword.length > 7) {
            createUser(adminEmail, adminPassword)
                .then(() => navigate('/admin'))
                .catch(() => toast.error('This account had been taken')
                )
        } else if (adminPassword.length < 7) {
            toast.error('Password should be minimum 8')
        } else {
            toast.error('You have to complete all inputs')
        }
    }

    const CheckSingInAdmin = () => {
        signInAccount(adminEmail, adminPassword)
            .then(() => {
                navigate('/admin')
            }).catch(() => toast.error("Check your password or email"))
    }

    const signInWithGoogleUser = () => {
        signInWithGoogle()
            .then(()=>{
                navigate('/home')
            }).catch( ()=> toast.error('check your connection') )
    }


    return (
        <div className=" z-40 p-2 font-sans bg-slate-900 antialiased bg-grey-lightest">
            <div className="w-full bg-grey-lightest" style={{paddingTop: " 4rem"}}>
                <div className="container mx-auto py-8">
                    <UserSingUp
                        toggle={toggle}
                        name={registerUserName}
                        lName={registerUserLName}
                        email={registerUserEmail}
                        password={registerUserPsw}

                        setName={getValueRegUserName}
                        setLName={getValueRegUserLastName}
                        setEmail={getValueRegUserEmail}
                        setPassword={getValueRegUserPsw}

                        PostData={PostData}
                        singUpGoogle={signInWithGoogleUser}
                    />
                    <UserSingIn
                        toggle={toggle}
                        email={singInEmail}
                        password={singInPassword}

                        CheckSingIn={CheckSingIn}

                        setEmail={getValueSingInEmailFunc}
                        setPassword={getValueSingInPasswordFunc}/>

                    <div id="authentication-modal" tabIndex="-1" aria-hidden="true"
                         className={`${modal ? 'hidden' : 'block'} overflow-y-auto overflow-x-hidden fixed  bg-slate-800 z-50 w-full inset-0 h-modal `}>
                        <div
                            className={` mx-auto sm:mt-24 p-4 w-full max-w-md h-full ${register ? 'hidden' : 'block'}`}>
                            <div className="relative  bg-white rounded-lg shadow dark:bg-gray-700">
                                <button type="button"
                                        onClick={() => setModal(p => !p)}
                                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                        data-modal-toggle="authentication-modal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </button>
                                <AdminSingIn
                                    check={CheckSingInAdmin}
                                    setRegister={setRegister}
                                    email={adminSingInEmail}
                                    password={adminSingInPassword}
                                    setEmail={getAdminSingInEmailFunc}
                                    setPassword={getAdminSingInPasswordFunc}
                                />
                            </div>
                        </div>
                        <AdminSingUp
                            register={register}
                            setModal={setModal}
                            name={adminName}
                            lastName={adminLastname}
                            email={adminEmail}
                            password={adminPassword}

                            setName={adminGetValueName}
                            setLastName={adminGetValueLastName}
                            setEmail={adminGetValueEmail}
                            setPassword={adminGetValuePassword}

                            post={PostDataAdmin}
                        />
                    </div>
                    <p className={`text-center my-4 ${toggle ? 'hidden' : 'block'} `}>
                        <button onClick={() => setToggle(p => !p)}
                                className="text-slate-300 text-md no-underline hover:text-grey-darker">I already
                            have an account <span className={'text-blue-500'}>Sing In</span></button>
                    </p>
                    <p className={`text-center my-4 ${!toggle ? 'hidden' : 'block'} `}>
                        <button onClick={() => setToggle(p => !p)}
                                className="text-slate-300 text-md no-underline hover:text-grey-darker">I don't
                            have an account <span className={'text-blue-500'}>Sing Up</span></button>
                    </p>
                    <p className="text-center my-4">
                        <button onClick={Toggler} type="button" data-modal-toggle="authentication-modal"
                                className="text-slate-300 text-md no-underline hover:text-grey-darker">
                            Register as Admin <span className={'text-blue-500'}>Sing In</span></button>
                    </p>
                </div>
            </div>
            <footer className="w-full bg-grey-lighter py-8">
                <div className="container mx-auto text-center px-8">
                    <p className="text-gray-600 mb-2 text-sm">This is a product of <span className="font-bold">
                        <a href="https://t.me/begzodll">Begzod</a></span>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default connect((
        {
            register: {
                users,
                admin,
                userGoogle,
                // Sing Up User
                registerUserName,
                registerUserLName,
                registerUserEmail,
                registerUserPsw,
                //Sing In
                singInEmail,
                singInPassword,
                //Sing Up ADmin
                adminName,
                adminLastname,
                adminEmail,
                adminPassword,
                // Sing In
                adminSingInEmail,
                adminSingInPassword,
            }
        }) => (
        {
            users,
            admin,
            userGoogle,
            registerUserName,
            registerUserLName,
            registerUserEmail,
            registerUserPsw,

            singInEmail,
            singInPassword,

            adminName,
            adminLastname,
            adminEmail,
            adminPassword,
            // Sing In
            adminSingInEmail,
            adminSingInPassword,
        }),
    {
        getUserFunc,
        getGoogleUser,
        getAdminFunc,
        PostUserFunc,
        PostAdminFunc,
        // Sing Up User
        getValueRegUserName,
        getValueRegUserLastName,
        getValueRegUserEmail,
        getValueRegUserPsw,
        // Sing In User
        getValueSingInEmailFunc,
        getValueSingInPasswordFunc,
        //    Sing Up Admin
        adminGetValueName,
        adminGetValueLastName,
        adminGetValueEmail,
        adminGetValuePassword,
        //Sing In Admin
        getAdminSingInEmailFunc,
        getAdminSingInPasswordFunc
    }
)(Register)