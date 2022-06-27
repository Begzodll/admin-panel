function BookCard({item, index, more}) {
    return (
        <div className={'my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 w-full h-100'}>
            <article className={'overflow-hidden rounded-lg shadow-lg bg-slate-800'}>
                <div
                    className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg h-[8rem]" src={ `https://coursesnodejs.herokuapp.com/${item.imgUrl}` } alt=""/>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.name}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {item.description ? item.description :' What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</p>
                        <button
                            onClick={() => more(item)}
                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default BookCard