function AdminSingUp(
    {
        register, setModal, name, lastName, email, password,
        setName, setLastName, setEmail, setPassword, post
    }
) {
    return (
        <div className={` ${!register ? 'hidden' : 'block'}`}>
            <div className="w-5/6 lg:w-1/2 mx-auto bg-slate-900 mt-24 rounded shadow">
                <div className="py-4 px-8 text-slate-300 text-xl border-b border-slate-600">
                    Register as Admin
                </div>
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
                <div className="py-4 px-8">
                    <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="email">Full Name</label>
                        <input className="appearance-none rounded w-full py-2 px-3 text-slate-300 bg-gray-700"
                               type="name"
                               placeholder="Your full name"
                               onChange={(e)=>setName(e)} value={name}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="email">Email
                            Address</label>
                        <input className="appearance-none rounded w-full py-2 px-3 text-slate-300 bg-gray-700"
                               id="email" type="email"
                               placeholder="Your email address"
                               onChange={(e)=>setEmail(e)} value={email}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-bold mb-2"
                               htmlFor="password">Password</label>
                        <input className="appearance-none rounded w-full py-2 px-3 text-slate-300 bg-gray-700"
                               id="password" type="password"
                               placeholder="Your secure password"
                               onChange={(e) => setPassword(e)}
                               value={password}
                        />
                        <p className="text-slate-300 text-xs mt-1">At least 8 characters</p>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <button
                            onClick={post}
                            className="bg-slate-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                            type="submit">
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSingUp