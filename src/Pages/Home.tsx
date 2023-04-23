import Categories from "../Component/Categories";
import qs from 'qs';
import Sort from "../Component/Sort";
import Skeleton from "../Component/PizzaBlock/Skeleton";
import Index from "../Component/PizzaBlock";
import React, {useRef} from "react";
import Pagination from "../Component/Pagination/Pagination";
import {useSelector} from "react-redux";

import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../redux/store";
import {selectFilter} from "../redux/filter/selectors";
import {selectPizzaData} from "../redux/pizzas/selectors";
import {setCategoryId, setCurrentPage} from "../redux/filter/slice";
import {fetchPizzas} from "../redux/pizzas/asyncAction";


const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const {items, status} = useSelector(selectPizzaData);
    const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter);

    const onChangeCategory = React.useCallback((idx: number) => {
        dispatch(setCategoryId(idx));
    }, []);

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    const getPizzas = async () => {

        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(
            fetchPizzas({
                sortBy,
                order,
                category,
                search,
                currentPage: String(currentPage)
            }))
        window.scrollTo(0, 0);
    }

    // React.useEffect(() => {
    //     if (window.location.search) {
    //         const params = (qs.parse(window.location.search.substring(1)) as unknown as FetchPizzasArgs);
    //
    //         const sort = list.find((obj) => obj.sortProperty === params.sortBy)
    //
    //         dispatch(setFilters({
    //             searchValue: params.search,
    //             categoryId: Number(params.category),
    //             currentPage: Number(params.currentPage),
    //             sort: sort || list[0],
    //         }));
    //         isSearch.current = true;
    //     }
    // }, [dispatch]);


    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                currentPage
            });

            navigate(`?${queryString}`)
        }
        isMounted.current = true;
    }, [categoryId, sort.sortProperty, currentPage, navigate])


    React.useEffect(() => {
        if (!isSearch.current) {
            getPizzas()
        }

        isSearch.current = false;

    }, [categoryId, sort, searchValue, currentPage]);


    const pizzas = items.map((obj: any) => (
        <Index key={obj.id} {...obj}/>));
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)

    return (<>
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort value={sort}/>
            </div>
            <h2 className="content__title">Всі піцци</h2>
            {status === 'error' ? (
                <div className='content__error-info'>
                    <h2>Сталася помилка</h2>
                    <p>Не загрузили піци попробуйте пізніше</p>
                </div>) : (<div className="content__items">
                {status === 'loading'
                    ? skeletons
                    : pizzas}
            </div>)}

            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    </>)
}

export default Home;