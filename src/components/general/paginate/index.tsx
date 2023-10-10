import { LeftIcon, RightIcon } from '@/svg';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';





export function PaginatedItems({ total, handlePage ,initialPage}: any) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);



    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {

        console.log(
            `User requested page number ${event.selected + 1}, which is offset `
        );
        handlePage(event.selected + 1)
    };

    return (
        <>

            <ReactPaginate
                className='flex justify-center gap-x-5 items-center [&>.selected]:font-semibold [&>.selected]:underline'
                breakLabel="..."
                nextLabel={<span><RightIcon /></span>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={total}
                previousLabel={<span><LeftIcon /></span>}
                renderOnZeroPageCount={null}
                forcePage={initialPage}
            />
        </>
    );
}