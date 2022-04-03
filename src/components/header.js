import React, {useState} from 'react';
import Modal from "./Modal/modal";
import Autoriz from "./Modal/autoriz";
import $ from 'jquery'
import Basket from "./Modal/basket";
import {useDispatch, useSelector} from "react-redux";
import {calcTotalPrice} from "./utils";
import {searchCart} from "../redux/cart/reducer";


const Header = () => {
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice=calcTotalPrice(items);
    const dispatch=useDispatch()
    const [searchValue,setSearchValue]=useState("")

    function searchHandler(){
        dispatch(searchCart(searchValue))
    }

    var header = $('.header'),
        scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();

        if ( scrolled > 100 && scrolled > scrollPrev ) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });

    const [modalActive, setModalActive]=useState(false)//авторизация
    const [basketActive, setBasketActive]=useState(false)

    return (
        <div>
            <Modal active={modalActive} setActive={setModalActive}>
                <Autoriz/>
            </Modal>
            <Modal active={basketActive} setActive={setBasketActive}>
                <Basket items={items} onClick={()=>null}/>
            </Modal>
        <header className="header">

            <div className="logo">LOGOS</div>
            <div >
                <i className="bi bi-geo-alt geo"></i>
                <input
                    type="text"
                    placeholder="Введите название еды"
                    value={searchValue}
                    className="reg"
                    onChange={(e)=> setSearchValue(e.target.value)}
                />
                <i className="bi bi-x-lg bi_clear" onClick={()=>setSearchValue('')}></i>


            </div>
            <div className="bi_search"  onClick={()=>searchHandler()}>Поиск</div>
            <div className="section">
                <div className="tel" >
                    <div className="backphone">
                        <i className="bi bi-telephone phone"></i>
                    </div>
                    <div>
                        <p >Контакты:</p>
                        <p className="number">
                            +375 (33) 904-70-49
                        </p>
                    </div>
                </div>

                <div className="sign"  onClick={()=> setModalActive(true)}>
                    <i className="bi bi-person user"></i>
                    <p>Войти</p>
                </div>
            </div>
            <div className="btn" onClick={() => setBasketActive(true)}>
                <p className="btn_txt">Корзина</p>
                <div className="bask_circle">
                    <p className="num">
                        {items.length}
                    </p>
                </div>
            </div>
        </header>
        </div>
    );
};

export default Header;