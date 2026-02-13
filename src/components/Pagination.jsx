import { useSelector, useDispatch } from "react-redux";
import { setOffset } from "../store/product/productReducer";

const Pagination = () => {

    const dispatch = useDispatch();

    const { total, limit, offset } = useSelector(
        state => state.product
    );

    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    const groupSize = 3;
    const currentGroup = Math.ceil(currentPage / groupSize);

    const startPage = (currentGroup - 1) * groupSize + 1;
    const endPage = Math.min(startPage + groupSize - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const handlePageChange = (page) => {
        const newOffset = (page - 1) * limit;
        dispatch(setOffset(newOffset));
        window.scrollTo({ top: 0, behavior: "smooth"});
    };

    if (totalPages <= 1) return null;

    return (
        <div className='flex justify-center gap-3 mt-12 font-montserrat'>

            <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className='px-3 py-2 border rounded disabled:opacity-30'
            >
                &lt;&lt;
            </button>

            {currentGroup > 1 && (
                <button
                    onClick={() => handlePageChange(startPage - 1)}
                    className='px-3 py-2 border rounded'
                >
                    &lt;
                </button>
            )}

            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded border ${
                        page === currentPage
                        ? "bg-[#236AF0] text-white"
                        : "bg-white text-[#252B42]"
                    }`}
                >
                    {page}
                </button>
            ))}

            {endPage < totalPages && (
                <button
                    onClick={() => handlePageChange(endPage + 1)}
                    className='px-3 py-2 border rounded'
                >
                    &gt;
                </button>
            )}

            <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className='px-3 py-2 border rounded disabled:opacity-30'
            >
                &gt;&gt;
            </button>

        </div>
    );
};

export default Pagination;