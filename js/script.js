// Abre/fecha o menu em dispositivos móveis
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Carrega as imagens da galeria de fotos
const galleryImages = document.querySelectorAll('.gallery-photos .gallery-image');
galleryImages.forEach(image => {
  // Adicione o código para carregar cada imagem da galeria de fotos
});

// Carrega os vídeos da galeria de vídeos
const galleryVideos = document.querySelectorAll('.gallery-videos .gallery-video');
galleryVideos.forEach(video => {
  // Adicione o código para carregar cada vídeo da galeria de vídeos
});

// Validação do formulário de orçamento
const form = document.querySelector('#orcamento-form');
form.addEventListener('submit', (e) => {
  // Adicione a lógica de validação aqui
  // Se algum campo estiver inválido, você pode cancelar o envio do formulário usando: e.preventDefault();
});
