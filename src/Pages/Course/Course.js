import {connect} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getCategoryFunc, getCourseFunc} from "../../store/Reducers/CourseSlice";

import CourseCard from "../../Components/CourseCard";

function Course({courses, category, getCourseFunc, getCategoryFunc}) {

    useEffect(() => {
        getCourseFunc()
    }, [getCourseFunc])


    const navigator = useNavigate()


    const MoreUser = (item) => navigator('/courses/' + item._id)

    console.log(category)

    return (
        <div className={'bg-slate-900 py-7'}>
            <div className={'h-auto max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10 my-20'}>
                <div className="relative p-2 overflow-x-auto bg-slate-800 shadow-md sm:rounded-lg">
                    <div className={'flex justify-between'}>
                        <div/>
                        <select id="countries"
                                onChange={(e) => getCategoryFunc(e)}
                            // value={category}
                                defaultValue={'DEFAULT'}
                                className="my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="DEFAULT">Categoty</option>
                            <option value="Diniy">Diniy</option>
                            <option value="Tarixiy">Tarixiy</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Tabiat">Tabiat</option>
                            <option value="Astromia">Astromia</option>
                        </select>
                        <div/>
                    </div>
                    <div className={'flex flex-wrap'}>
                        {
                            // eslint-disable-next-line array-callback-return
                            courses.filter(item => {
                                if (category === '') {
                                    return item
                                } else if (item.name.includes(category)) {
                                    return item
                                }
                            }).map((item, index) => (
                                <CourseCard item={item} index={index} more={MoreUser} key={index}/>))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect((
        {
            course: {
                courses,
                category
            }
        }) => (
        {
            courses,
            category
        }),
    {getCourseFunc, getCategoryFunc}
)(Course)