import React, {useEffect, useState} from 'react';
import Card from "./Card";
import Slider from "./slider";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "./pagination";
import Categories from "./categories";

const Catalog = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [itemPage,setItemsPage]=useState(1)
    const [itemsPerPage]=useState(8)
    const searchItem = useSelector(state=> state.cart.filterCart)

    const filteredItems=items.filter(item=>{
        return item.name.toLowerCase().includes(searchItem)
    })


    const lastIndexPage=itemPage*itemsPerPage
    const firstIndexPage=lastIndexPage-itemsPerPage
    const itemIndex=filteredItems.slice(firstIndexPage,lastIndexPage)

    const paginate = (pageNumber) => setItemsPage(pageNumber)

    useEffect(() => {
        fetch('https://fortniteapi.io/v2/items/list?lang=ru', {
            headers: {
                Authorization: 'f0216882-e67bb552-b87dc6fb-d6b40417'
            }
        })
            .then(response => response.json())
            .then(data => {
                data.items && setItems(data.items.slice(0, 20));
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Slider/>
        <div className="main">
            <Categories/>
            <div className="cards">
                {loading ? (
                    <p>Идёт загрузка товаров...</p>
                ) : itemIndex.length ? (
                    itemIndex.map(item => (
                        <Card key={item.id} {...item} />
                    ))
                ) : (
                    <p>Не удалось найти товар...</p>
                )}
            </div>

        </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={filteredItems.length}
                paginate={paginate}

            />
        </div>
    );
};

export default Catalog;