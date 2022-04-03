import React from 'react';

const Contacts = () => {
    return (
        <div className="contact">
            <div className="cafe">
                <div className="cafe_shadow">
                    <div className="cafe_desc">
                        <h2 className="cafe_name">НАШЕ КАФЕ</h2>
                        <div className="cafe_txt">
                            Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.
                        </div>
                    </div>
                    <div className="square">
                        <div className="square_content">
                            <div className="square_icons">
                                <i className="bi bi-lightning"></i>
                            </div>
                            <div className="square_name">
                                Быстрая доставка
                            </div>
                        </div>
                        <div className="square_content">
                            <div className="square_icons">
                                <i className="bi bi-lightning"></i>
                            </div>
                            <div className="square_name">
                                Быстрая доставка
                            </div>
                        </div>
                        <div className="square_content">
                            <div className="square_icons">
                                <i className="bi bi-lightning"></i>
                            </div>
                            <div className="square_name">
                                Быстрая доставка
                            </div>
                        </div>
                        <div className="square_content">
                            <div className="square_icons">
                                <i className="bi bi-lightning"></i>
                            </div>
                            <div className="square_name">
                                Быстрая доставка
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="map" >
                <div className="address">
                    <h2>КОНТАКТЫ</h2>
                    <div className="address_desc">
                        <div className="address_first">
                            <p className="address_name">Наш адрес: </p>
                            <p className="address_txt">г. Витебск, ул Гагарина 41</p>
                        </div>
                        <div className="address_first">
                            <p className="address_name">Наша почта: </p>
                            <p className="address_txt">kovaal69@gmail.com</p>
                        </div>
                    </div>
                    <div className="telp_apl">
                        <h2 className="telp">+375 (33) 904-70-49</h2>
                        <p className="apl">Звоните или оставляйте заявку</p>
                    </div>
                    <div className="social_media">
                        <p className="social">Мы в соц сетях: </p>
                        <div className="media">
                            <a href="https://www.instagram.com/kkoval_69/"><i className="bi bi-instagram"></i></a>
                            <a href="https://github.com/kkoval69"><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;