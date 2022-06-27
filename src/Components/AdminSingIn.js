function AdminSingIn({setRegister,check,email,password,setEmail,setPassword}){
    return(
        <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Log In as Admin
            </h3>
            {/*Form*/}
            <div className="space-y-6" >
                <div>
                    <label htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                        email</label>
                    <input type="email" name="email" id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                           placeholder="name@company.com" required
                        onChange={(e)=>setEmail(e)}
                           value={email}
                    />
                </div>
                <div>
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                        password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                           required
                           onChange={(e)=>setPassword(e)}
                           value={password}
                    />
                </div>

                <button type="submit"
                        onClick={check}
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login In
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?
                    <button onClick={()=>setRegister(p=>!p)} className="text-blue-700 hover:underline dark:text-blue-500">
                        Create account</button>
                </div>
            </div>
        </div>
    )
}
export default AdminSingIn