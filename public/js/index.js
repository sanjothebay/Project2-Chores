$( ".grid-button" ).on( "click", function ( event )
{
  event.preventDefault();
  console.log( 'click' );
  const userId = $( this ).data( 'user' );
  const choreId = $( this ).data( 'chore' );

  console.log( { userId, choreId } )
} )

console.log( 'click' );