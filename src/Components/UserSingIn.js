function UserSingIn({toggle,email,password,setEmail,setPassword,CheckSingIn}){
    return(
        <div className={`${ !toggle ? 'hidden' : 'block' }`}>
            <div className="w-5/6 lg:w-1/2 mx-auto bg-slate-800 rounded shadow py-8">
                <div className="py-4 px-8 text-slate-300 text-xl border-b border-slate-600">
                    Sing In to user account
                </div>
                <div className="py-4 px-8">
                    <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="email">Email
                            Address</label>
                        <input className="appearance-none rounded w-full py-2 px-3 text-slate-300 bg-gray-700"
                               id="email" type="email" placeholder="Your email address"
                            onChange={(e)=>setEmail(e)}
                               value={email}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-bold mb-2"
                               htmlFor="password">Password</label>
                        <input className="appearance-none rounded w-full py-2 px-3 text-slate-300 bg-gray-700"
                               id="password" type="password" placeholder="Your secure password"
                               onChange={(e)=>setPassword(e)}
                               value={password}
                        />
                        <p className="text-slate-300 text-xs mt-1">At least 8 characters</p>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <button
                            onClick={CheckSingIn}
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
export default UserSingIn