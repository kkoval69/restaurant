import React from 'react';


const Autoriz = () => {
    return (
        <div className="autoriz_modal">

            <h2>Авторизация</h2>
            <div className="autoriz_input">
                <div className="input_name">
                    Логин
                    <input type="text" />
                </div>
                <div className="input_name">
                    Пароль
                    <input type="password" />
                </div>

            </div>
            <div className="no_account">
                Нет аккаунта?
            </div>
            <div className="avtoriz_sign">
                Войти
            </div>
        </div>
    );
};

export default Autoriz;