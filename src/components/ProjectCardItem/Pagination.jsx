const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const PageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        PageNumbers.push(i)
    }
    return (
        <div>
            <nav aria-label="Page navigation example" className="w-max mx-auto">
                <ul className="flex items-center -space-x-px h-8 text-sm">
                    {PageNumbers.map(number => {
                        return (
                            <li key={number}>
                                <a onClick={() => paginate(number)} href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{number}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}
export default Pagination