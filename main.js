$('#Anschauen der Fotos').on('click', function() {
  const fotos = $('#fotos').position().top;
  
  $('html, body').animate(
    {
    scrollTop: fotos
  }, 
  900
);
});