import { Disclosure } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import {  useLocation,Link } from "react-router-dom"
import {useEffect, useState} from "react";
import {connect} from "react-redux";
const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: '/home', current: true },
    { name: 'Library', href: 'library', current: false },
    { name: 'Course', href: 'courses', current: false },
]
const userNavigation = [
    { name: 'Your Profile', to: 'profile' },
    { name: 'Register', to: 'register' },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar({userGoogle}) {

    const [ bool, setBool ] = useState(true)

    const location = useLocation()

    useEffect(()=>{
        if( location.pathname === "/" ){
            setBool(false)
        }
        if(userGoogle){
            setBool(true)
            if(location.pathname === "/"){
                setBool(false)
            }
        } else {
            setBool(false)
        }
    })

    return (
        <div className={` ${ bool ? `block` : `hidden` }  sticky top-0 z-40`} id={'bl'}>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Link to={'/home'}>
                                                <img
                                                    className="h-8 w-8"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                                    alt="Workflow"
                                                />
                                            </Link>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className={classNames(
                                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            {/* Profile dropdown */}
                                            <Link to={'/'} className={'text-slate-200'}>Register</Link>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="pt-4 pb-3 border-t border-gray-700">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                        </div>

                                    </div>
                                    <div className="mt-3 px-2 space-y-1">
                                        {userNavigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                href={item.href}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}
export default connect(({register: {userGoogle}}) => ({userGoogle}), null)(Navbar)