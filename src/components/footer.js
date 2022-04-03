import React from 'react';

const Footer = () => {
    return (
        <footer >
            <div className="info">
                <h2 className="info_name">
                    logos
                </h2>
                <div className="copir">
                    © Все права защищены. 2022
                </div>
            </div>
            <ul >
                <li>О ресторане</li>
                <li>Условия доставки</li>
                <li>Возврат товара</li>
                <li>Акции</li>
            </ul>
        </footer>
    );
};

export default Footer;