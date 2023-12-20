const estoque = {
    Bola: 10,
    Boneca: 5,
    Carro: 15,
    'Quebra-cabeça': 8,
    Lego: 20,
    Ursinho: 12,
    Skate: 7,
    Jogos: 10,
    Livro: 18,
    Carrinho: 14,
    Barbie: 6,
    Robo: 9,
    Puzzle: 11,
    KitPintura: 16,
    Aviao: 13
  };
  
  const pedidos = [];
  let numeroPedido = 1;
  
  function changeTab(tabId) {
    const tabs = document.querySelectorAll('.tabs li');
    const contents = document.querySelectorAll('.content');
  
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.style.display = 'none');
  
    document.getElementById(tabId).style.display = 'block';
    tabs[Array.from(tabs).findIndex(tab => tab.textContent.toLowerCase() === tabId)].classList.add('active');
  }
  
  function updateEstoque() {
    const listaEstoque = document.getElementById('listaEstoque');
    listaEstoque.innerHTML = '';
    for (const [brinquedo, quantidade] of Object.entries(estoque)) {
      const novoItem = document.createElement('li');
      novoItem.textContent = `${brinquedo}: ${quantidade} unidades`;
      listaEstoque.appendChild(novoItem);
    }
  }
  
  function updatePedidos() {
    const listaPedidos = document.getElementById('listaPedidos');
    listaPedidos.innerHTML = '';
    pedidos.forEach((pedido, index) => {
      const novoPedido = document.createElement('li');
      novoPedido.classList.add('pedido-item');
      novoPedido.innerHTML = `
        <strong>Novo pedido #${index + 1}</strong>
        <div class="pedido-info">
          <span><b>Nome:</b> ${pedido.nome}</span> <br>
          <span><b>Pedido:</b> ${pedido.pedido}</span>
        </div>
      `;
      listaPedidos.appendChild(novoPedido);
    });
  }
  
  function submitPedido(event) {
    event.preventDefault();
  
    const crianca = document.getElementById('crianca').value;
    const brinquedo = document.getElementById('brinquedo').value;
  
    if (estoque[brinquedo] > 0) {
      pedidos.push({
        nome: crianca,
        pedido: brinquedo
      });
  
      estoque[brinquedo]--;
  
      updateEstoque();
      updatePedidos();
      numeroPedido++;
  
      Swal.fire({
        icon: 'success',
        title: 'Pedido Enviado!',
        text: `Seu pedido de ${brinquedo} foi enviado com sucesso para o Papai Noel!`,
        confirmButtonColor: '#4CAF50',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Desculpe, ${brinquedo} está fora de estoque!`,
        confirmButtonColor: '#4CAF50',
      });
    }
  }
  
  changeTab('estoque');
  updateEstoque();
  
  function enviarPedidos() {
    if (pedidos.length > 0) {
      Swal.fire({
        icon: 'success',
        title: 'Pedidos Enviados!',
        text: 'Os pedidos foram enviados com sucesso para o Polo Norte!',
        confirmButtonColor: '#4CAF50',
      });
  
      pedidos.length = 0;
      updatePedidos();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Não há pedidos para enviar!',
        confirmButtonColor: '#4CAF50',
      });
    }
  }

  function updateEstoque() {
    const listaEstoque = document.getElementById('listaEstoque');
    listaEstoque.innerHTML = '';
    for (const [brinquedo, quantidade] of Object.entries(estoque)) {
      const novoItem = document.createElement('li');
      novoItem.innerHTML = `<strong>${brinquedo}:</strong> ${quantidade} unidades`;
      listaEstoque.appendChild(novoItem);
    }
  }