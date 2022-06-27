function UserSingUp(
    {
        toggle,name,lName,email,password,
        setName, setLName, setEmail, setPassword,
        PostData, singUpGoogle
    }
    ){
    return(

        <div className={`${ toggle ? 'hidden' : 'block' }`}>
            <div className="w-5/6 lg:w-1/2 mx-auto bg-slate-800 rounded shadow">
                <div className="py-4 px-8 text-slate-300 text-xl border-b border-slate-600">
                    Register user account
                </div>
                <div className="py-4 px-8">
                    <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="email">Full Name</label>
                        <input className="appearance-none rounded w-full py-2 px-3 text-slate-300 bg-gray-700"
                               type="name" placeholder="Your full name"
                               value={name}
                               onChange={(e)=>setName(e)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="email">Email
                            Address</label>
                        <input className="appearance-none rounded w-full py-2 px-3 text-slate-300 bg-gray-700"
                               id="email" type="email" placeholder="Your email address"
                               value={email}
                               onChange={(e)=>setEmail(e)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-bold mb-2"
                               htmlFor="password">Password</label>
                        <input className="appearance-none rounded w-full py-2 px-3 text-slate-300 bg-gray-700"
                               id="password" type="password" placeholder="Your secure password"
                               value={password}
                               onChange={(e)=>setPassword(e)}
                        />
                        <p className="text-slate-300 text-xs mt-1">At least 8 characters</p>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <button
                            onClick={PostData}
                            className="bg-slate-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                            type="submit">
                            Create
                        </button>
                        <button
                            onClick={singUpGoogle}
                            className="bg-slate-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                            type="submit">
                            Sing up with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default UserSingUp