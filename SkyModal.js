// TODO : Add options handle.
// TODO : Add function : set a close button (type modal, or type confirm)
// TODO : Check for the Cannot call method 'apply' of undefined (in the Close's event each loop)
// TODO : Add an option to desactivate the click event.
// TODO : \m/
(function ($) {
    $.fn.extend({
        SkyModal: function (options) {
            var defaults = {
                top: 100,
                overlay: 0.5
            }
            var overlay = $("<div id='SkyOverlay'></div>");
            $("body").append(overlay);
        },
        SkyModal_Close: function () {
            $('#SkyOverlay').fadeOut(200);
            $('#SkyModal').css({"display": "none"});
            $(this).each(
                console.log(this),
                $(this).css({"display": "block"})
            );

        },
        SkyModal_Open: function () {
            var defaults = {
                top: 100,
                overlay: 0.5
            }
            var modal_H = $(this).outerHeight();
            var modal_W = $(this).outerWidth();
            var overlay_zindex = $('#SkyOverlay').css('z-index');
            var modal_zindex = parseInt(overlay_zindex) + 10;
            $('#SkyOverlay').css({"display": "block", opacity: 0});
            $('#SkyOverlay').fadeTo(200, defaults.overlay);
            $(this).css({
                "display": "block",
                "position": "fixed",
                "opacity": 0,
                "z-index": modal_zindex,
                "left": 50 + "%",
                "margin-left": -(modal_W / 2) + "px",
                "top": defaults.top + "px"});
            $(this).fadeTo(200, 1);

            $('#SkyOverlay').click(function (e) {
                $('#SkyOverlay').SkyModal_Close();
                e.preventDefault();
            })
        }
    });

})
    (jQuery);