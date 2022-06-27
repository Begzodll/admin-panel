import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {getBooksFunc} from "../../store/Reducers/LibrarySlice";

import BookCard from "../../Components/BookCard";

function Library({books, getBooksFunc}) {

    // const [images, setImages] = useState([])
    // const [term, setTerm] = useState('book')

    useEffect(() => {
        getBooksFunc()
    }, [getBooksFunc])

    // useEffect(() => {
    //     fetch(`https://pixabay.com/api/?key=27597840-7a741b419ef9114af3f9bc2c0&q=${term}&image_type=photo&pretty=true`)
    //         .then(res => res.json())
    //         .then(data => setImages(data.hits))
    // }, [term])


    const navigator = useNavigate()


    const MoreUser = (item) => navigator('/library/' + item._id)


    return (
        <div className={'bg-slate-900 py-7'}>
            <div className={'h-auto max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10 my-20'}>
                <div className="relative p-8 overflow-x-auto bg-slate-800 shadow-md sm:rounded-lg">
                    <div className={'flex flex-wrap'}>
                        {
                            // eslint-disable-next-line array-callback-return
                            books.map((item, index) => (
                                    <BookCard item={item} key={index} more={MoreUser}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect((
        {
            library: {
                books
            }
        }) => (
        {
            books
        }),
    {getBooksFunc}
)(Library)