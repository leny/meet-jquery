/* leny/meet-jquery
 *
 * /src/js/script.js - Main script (DOM Version)
 *
 * coded by leny@flatLand!
 * started at 13/02/2017
 */

const fHandleTab = function( oEvent ) {
    oEvent.preventDefault();
    let $elt = oEvent.currentTarget;

    if ( $elt.parentNode.classList.contains( "active" ) ) {
        return;
    }

    document.querySelector( "ul.nav.nav-tabs .active" ).classList.remove( "active" );
    $elt.parentNode.classList.add( "active" );
    document.querySelector( ".tab-pane.active" ).classList.remove( "active" );
    document.getElementById( $elt.getAttribute( "data-tab-target" ) ).classList.add( "active" );
};

window.addEventListener( "load", function() {

    // 1. a with rel=external opens in new window
    Array.from( document.querySelectorAll( 'a[rel*="external"]' ) ).forEach( function( $elt ) {
        $elt.setAttribute( "target", "_new" );
    } );

    // 2. handle tabs
    Array.from( document.querySelectorAll( "ul.nav.nav-tabs a" ) ).forEach( function( $elt ) {
        $elt.addEventListener( "click", fHandleTab );
    } );

} );
