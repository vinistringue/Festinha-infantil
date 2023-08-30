// Script.js

// Abre/fecha o menu em dispositivos móveis
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Carrega as imagens da galeria
const galleryImages = document.querySelectorAll('.gallery-image');
// Adicione o código para carregar as imagens aqui

// Carrega os vídeos da galeria
const galleryVideos = document.querySelectorAll('.gallery-video');
// Adicione o código para carregar os vídeos aqui

// Validação do formulário de orçamento
const form = document.querySelector('#orcamento-form');
form.addEventListener('submit', (e) => {
  // Adicione a lógica de validação aqui
  // Se algum campo estiver inválido, você pode cancelar o envio do formulário usando: e.preventDefault();
});
