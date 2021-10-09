import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setPage } from './pageSlice';
import { Pagination } from '@mui/material';

export const ITEM_PER_PAGE = 16;

export const Paginate = () => {
    const dispatch = useAppDispatch();
    const { selectedPage, pageCount } = useAppSelector(state => state.page);
    console.log("🚀 ~ file: Pagination.tsx ~ line 10 ~ Pagination ~ pageCount", pageCount)
    console.log("🚀 ~ file: Pagination.tsx ~ line 10 ~ Pagination ~ selectedPage", selectedPage)

    if (pageCount === 1) return null;
    return (
        <>
            <Pagination
                count={pageCount}
                shape="rounded"
                page={selectedPage} 
                onChange={(event,page)=> dispatch(setPage(page))}
                siblingCount={2}
                boundaryCount={4}
            />
        </>
    );
};
