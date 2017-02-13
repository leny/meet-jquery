/* leny/meet-jquery
 *
 * /src/js/script.js - Main script (DOM Version)
 *
 * coded by leny@flatLand!
 * started at 13/02/2017
 */

window.addEventListener( "load", function() {

    // 1. a with rel=external opens in new window
    Array.from( document.querySelectorAll( 'a[rel*="external"]' ) ).forEach( function( $elt ) {
        $elt.setAttribute( "target", "_new" );
    } );

} );
