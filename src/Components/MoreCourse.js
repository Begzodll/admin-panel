import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";
import {getCourseFunc} from "../store/Reducers/CourseSlice";

function MoreCourse({courses,getCourseFunc}){

    useEffect(()=>{
        getCourseFunc()
    },[getCourseFunc])


    const match = useParams()
    const navigator = useNavigate()

    const Back = (e) => {
        e.preventDefault()
        navigator('/courses')
    }
    return(
        <div className={'bg-slate-900 py-7'}>
            <div className={'h-screen max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10 my-20'}>
                <div className="relative p-8 overflow-x-auto bg-slate-800 shadow-md sm:rounded-lg">
                    <div className={'flex justify-center items-center mt-20'}>
                        <div className={'my-1'}>
                            <article className={'overflow-hidden rounded-lg shadow-lg bg-slate-800 h-auto w-full'}>
                                <h1 className={'text-gray-500'}>About Course</h1>
                                {
                                    courses.filter(item => item._id === match.id)
                                        .map((item, index) => (
                                                <div className={'px-12'} key={index}>
                                                    <h1 className={'text-3xl mt-5 text-white text-center'}
                                                        key={index + 1}>About: {item.name} Book</h1>
                                                    <ul className={'w-auto mt-10 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'}>
                                                        <li className={'w-auto px-4 py-2 border-b border-gray:600 bg-slate-800 rounded-t-lg dark:border-gray-600'}>
                                                            <span className={'text-slate-400 mr-3 uppercase'}>Name:</span><span
                                                            className={'text-slate-300'}>{item.name}</span></li>
                                                        <li className={'w-auto px-4 py-2 border-b border-gray:600 bg-slate-800 rounded-t-lg dark:border-gray-600'}>
                                                            <span className={'text-slate-400 mr-3 uppercase'}>Description:</span><span
                                                            className={'text-slate-300'}>{item.description ? item.description : "The Best Book i've ever seen i recommend to read this book" }</span></li>
                                                        <li className={'w-auto px-4 py-2 border-b border-gray:600 bg-slate-800 rounded-t-lg dark:border-gray-600'}>
                                                            <span className={'text-slate-400 mr-3 uppercase'}>Dilevery:</span><a href={item.ebookUrl ? item.ebookUrl : 'https://asaxiy.uz/'}
                                                                                                                                 className={'text-slate-300'}>{item.ebookUrl ? item.ebookUrl : 'Asaxiy.uz'}</a></li>
                                                        <li className={'w-auto px-4 py-2 border-b border-gray:600 bg-slate-800 roundedebookUrl-t-lg dark:border-gray-600'}>
                                                            <span className={'text-slate-400 mr-3 uppercase'}>Email:</span><NavLink
                                                            className={'text-slate-300'}  target="_blank"
                                                            to={{ pathname: "mailto:begzodsirojiddinov0@gmail.com" }}>begzodsirojiddinov0@gmail.com</NavLink></li>
                                                    </ul>
                                                </div>
                                            )
                                        )
                                }
                                <div className={'flex justify-between m-4'}>
                                    <div/>
                                    <button onClick={Back} className={'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'}>
                                        back
                                    </button>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect((
        {
            course: {
                courses
            }
        }) => (
        {
            courses
        }),
    {getCourseFunc}
)(MoreCourse)