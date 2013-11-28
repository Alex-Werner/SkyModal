//THIS CODE WON'T WORK AS IT IN YOUR CODE. But some modifcation and you are ready to go (Object.subClass for exemple...)
// call : app.modal = new app.widgets.Modal

( function ( $, nu, app, Log, undefined ) {

	'use strict';

	/**
	 * @class app.widgets.Modal
	 * General behavior of a Modal window.
	 *
	 * @provide app.widgets.Modal
	 *
	 * @require app.widgets
	 * @require nu.debug.Log
	 */

	app.widgets.Modal = Object.subClass( {

		/**
		 * @constructor
		 *
		 */
		init: function () {
			this.html = {};
			this.defaults = {
				top: 100,
				overlay: 0.5
			};

			//If modalContainer does not exist
			if ( ( $( 'body' ).find( '#Modal_container' ).length ) < 1 ) {
				//TODO : Load from hogan
				var modalTpl = $( "<div id='Modal_container'></div>" );
				$( "body" ).append( modalTpl );
			}
			this.html.modal = $( 'body' ).find( '#Modal_container' );

			/* CHANGE TEXT IN MODAL 
					modal.html(content);
					*/
			if ( ( $( 'body' ).find( '#Modal_overlay' ).length ) < 1 ) {
				var overlayTpl = $( "<div id='Modal_overlay'></div>" );
				$( "body" ).append( overlayTpl );
			}
			this.html.overlay = $( 'body' ).find( '#Modal_overlay' );
		},
		show: function () {
			var modal_H = this.html.modal.outerHeight();
			var modal_W = this.html.modal.outerWidth();
			var overlay_ZIndex = this.html.overlay.css( 'z-index' );
			var modal_ZIndex = parseInt( overlay_ZIndex, 10 ) + 10;
			this.html.overlay.css( {
				"display": "block",
				"opacity": 0
			} );

			//DISPLAYING with some fancy fade
			this.html.overlay.css( {
				"opacity": 0.5,
				'transition': 'opacity .5s ease-out',
				'-moz-transition': 'opacity .5s ease-out',
				'-webkit-transition': 'opacity .5s ease-out',
				'-o-transition': 'opacity .5s ease-out'
			} );

			this.html.modal.css( {
				"display": "block",
				"position": "fixed",
				"opacity": 0,
				"z-index": modal_ZIndex,
				"left": 50 + "%",
				"margin-left": -( modal_W / 2 ) + "px",
				"top": this.defaults.top + "px",

				'transition': 'opacity .5s ease-out',
				'-moz-transition': 'opacity .5s ease-out',
				'-webkit-transition': 'opacity .5s ease-out',
				'-o-transition': 'opacity .5s ease-out'
			} );

			this.html.modal.css( {
				"opacity": 1
			} );

			this.html.overlay.click( function ( e ) {
				app.modal.close();
				e.preventDefault();
			} );

		},
		close: function () {
			//HIDING with some fancy fade
			this.html.overlay.css( {
				"opacity": 0,
				'transition': 'opacity .5s ease-out',
				'-moz-transition': 'opacity .5s ease-out',
				'-webkit-transition': 'opacity .5s ease-out',
				'-o-transition': 'opacity .5s ease-out'
			} );
			this.html.modal.css( {
				'display': 'none'
			} );
		}
	} );
} )( jQuery, nu, app, nu.debug.Log );
