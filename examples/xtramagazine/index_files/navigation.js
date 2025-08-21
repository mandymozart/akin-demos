/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
	var container, buttons, menu, i, len, currentMenu;

	const targetElement = document.querySelector(".fade-holder");

	container = document.getElementById( 'site-navigation' );
	bodyHolder = document.querySelector( 'body' );

	var hamburgerButton = document.querySelector('button.main-menu.hamburger');


	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	if ( ! container ) {
		return;
	}

	buttons = document.querySelectorAll( '.menu-toggle' );
	if ( 'undefined' === typeof buttons ) {
		return;
	}


	menu = document.querySelector('.mega-menu');

	searchMenu = document.querySelector('div.search-menu');
	mainMenu = document.querySelector('div.main-menu');

	if( menu) {
		menu.setAttribute( 'aria-expanded', 'false' );
		if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
			menu.className += ' nav-menu';
		}
	}
	
	for (i = 0, len = buttons.length; i < len; i++){
		buttons[i].onclick = buttonClick;
	}

	function buttonClick ( ) {


		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			// searchMenu.classList.add('hidden');
			// mainMenu.classList.add('hidden');


			if ( -1 !== this.className.indexOf( 'search-menu' ) && currentMenu !== searchMenu ) {
				currentMenu = searchMenu;
				// searchMenu.className = searchMenu.className.replace( 'hidden', '' );
				mainMenu.classList.add('hidden');
				searchMenu.classList.remove('hidden');
			} else {

				if(!isMobile.iOS()){
					bodyScrollLock.enableBodyScroll(targetElement);
				}
				
				container.className = container.className.replace( ' toggled', '' );
				
				hamburgerButton.classList.remove('is-active');
				hamburgerButton.setAttribute( 'aria-expanded', 'false' );
	
				menu.className = menu.className.replace( ' toggled', '' );
				menu.setAttribute( 'aria-expanded', 'false' );
				
				bodyHolder.classList.remove('toggle');
	
			}

		} else {


			if ( -1 !== this.className.indexOf( 'main-menu' ) ) {
				mainMenu.className = mainMenu.className.replace( 'hidden', '' );
				searchMenu.classList.add('hidden');
				currentMenu = mainMenu;
			}

			if ( -1 !== this.className.indexOf( 'search-menu' ) ) {
				currentMenu = searchMenu;
				searchMenu.className = searchMenu.className.replace( 'hidden', '' );
				mainMenu.classList.add('hidden');

				searchMenu.querySelector( '#s' ).focus();

			}

			var options = { reserveScrollBarGap: true };
			if(!isMobile.iOS()){
				bodyScrollLock.disableBodyScroll(targetElement, options);
			}

			trapFocus( currentMenu );

			container.className += ' toggled';
			container.classList.add('toggled');
			
			bodyHolder.classList.add('toggle')

			menu.className += ' toggled';
			menu.setAttribute( 'aria-expanded', 'true' );

			this.setAttribute( 'aria-expanded', 'true' );
			
			this.className += ' is-active';
			this.classList.add('is-active');

			hamburgerButton.setAttribute( 'aria-expanded', 'true' );
			
			hamburgerButton.className += ' is-active';
			hamburgerButton.classList.add('is-active');

		}
	};

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}


	function closeMenu (){
		var box = document.querySelector(".fade-holder");
		var menuToggle = document.querySelector(".menu-toggle");

		// If user clicks outside the element, hide it!
		box.classList.remove('toggled');
		menuToggle.classList.remove('is-active');

		container.className = container.className.replace( ' toggled', '' );
		// this.classList.remove('is-active');
		// this.setAttribute( 'aria-expanded', 'false' );
		menu.className = menu.className.replace( ' toggled', '' );
		menu.setAttribute( 'aria-expanded', 'false' );		
		bodyHolder.classList.remove('toggle');
		
		if(!isMobile.iOS()){
			bodyScrollLock.enableBodyScroll(targetElement);
		}
	}

	// // Detect all clicks on the document
	// document.addEventListener("click", function(event) {
	// 	// If user clicks inside the element, do nothing
	// 	if (event.target.closest(".fade-holder")) return;

	// 	// closeMenu();
	// });


	/**
	 * Toggles `focus` class to allow submenu access on tablets.
	 */
	( function( container ) {
		var touchStartFn, i,
			parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

		if ( 'ontouchstart' in window ) {
			touchStartFn = function( e ) {
				var menuItem = this.parentNode, i;

				if ( ! menuItem.classList.contains( 'focus' ) ) {
					e.preventDefault();
					for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
						if ( menuItem === menuItem.parentNode.children[i] ) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove( 'focus' );
					}
					menuItem.classList.add( 'focus' );
				} else {
					menuItem.classList.remove( 'focus' );
				}
			};

			for ( i = 0; i < parentLink.length; ++i ) {
				parentLink[i].addEventListener( 'touchstart', touchStartFn, false );
			}
		}
	}( container ) );

	function trapFocus( selector ) {
		var element = selector;
		// var element = document.querySelector( selector );
		var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="search"]:not([disabled]), input[type="submit"]:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),
		firstFocusableEl = focusableEls[0];  
		lastFocusableEl = focusableEls[focusableEls.length - 1];
		KEYCODE_TAB = 9;
	
		document.addEventListener('keydown', function(e) {
			var isEscapePressed = (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27);
			if ( isEscapePressed ) {
				closeMenu();
			}
		});
		
		document.addEventListener('keydown', function(e) {
			var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
	
			if ( isTabPressed && !e.shiftKey) { 
				if (document.activeElement === lastFocusableEl) {
					firstFocusableEl.focus();
					e.preventDefault();
				}

			} else if ( isTabPressed && e.shiftKey ) {
				if (element.parentNode.classList.contains('toggled')) {
					if (document.activeElement === firstFocusableEl) {
						lastFocusableEl.focus();
						e.preventDefault();
					}
				}
			}
			return;
	
		});
	}

  // Get the left and right padding of an Header navbar menu
  function headerNavbarPadding(element) {
    var styles = window.getComputedStyle(element);
    var paddingLeft = parseFloat(styles.paddingLeft);
    var paddingRight = parseFloat(styles.paddingRight);
    return paddingLeft + paddingRight;
  }

  // Check if the Header navbar menu fits in the container
  function headerNavbarMenu() {
    var navbar = document.querySelector('.header__navbar');
    var menu = navbar.querySelector('ul');
    var menuWidth = menu.scrollWidth + headerNavbarPadding(navbar);
    var containerWidth = navbar.clientWidth;

    if (menuWidth > containerWidth) {
        navbar.classList.add('header-nav-width');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    headerNavbarMenu();
  });

} )();