import React from 'react';
import $ from 'jquery'
const Scroll = () => {
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('.topbutton').fadeIn()
            } else {
                $('.topbutton').fadeOut();
            }
        });
        $('.topbutton').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });
    });

    return (
            <a href="#" title="Вернуться к началу" className="topbutton">^</a>
    );
};

export default Scroll;