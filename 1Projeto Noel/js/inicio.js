function enviarContato() {
    Swal.fire({
      icon: 'success',
      title: 'Mensagem Enviada!',
      text: 'Obrigado por entrar em contato. Recebemos sua mensagem.',
      confirmButtonColor: '#4CAF50',
    });
  
  }

  document.addEventListener("DOMContentLoaded", function() {
    var linkPresente = document.querySelector('a[href="index.html"]');
    if (linkPresente) {
      linkPresente.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "index.html"; 
      });
    }
  });
  function mostrarDesenvolvedores() {
    Swal.fire({
      title: 'Desenvolvedores da Página',
      html: 'Desenvolvido por:<br> Diego<br>Gabriel<br> Joao<br> Luan<br> Richard<br> Rodrigo<br>',  


      icon: 'info',
      confirmButtonText: 'Fechar'
    });
  }