    $(document).ready(function ($) {
        let openTab = window.location.hash;
        $('.nav-link[href="' + openTab + '"]' ).trigger('click');
    })