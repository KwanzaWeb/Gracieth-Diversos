// ===== PRODUTOS (edita imagens, nomes e preços à vontade) =====
const PRODUCTS = [
  // PERUCAS
  { id:'p1', cat:'perucas', name:'Peruca cacheada Liria"', desc:'Tamanho 14.', price:0000, tag:'Novo', img:'images/p1.jpg.jpeg' },
  { id:'p2', cat:'perucas', name:'Peruca Liria cacheada', desc:'Tamanho 18.', price:0000, img:'images/p2.jpg.jpeg' },
  { id:'p3', cat:'perucas', name:'Peruca ondulada', desc:'Estilo moderno.', price:0000, tag:'Promo', img:'images/p3.jpg.jpeg' },
  { id:'p4', cat:'perucas', name:'Peruca lisa"', desc:'Tamanho 14.', price:0000, img:'images/p4.jpg.jpeg' },
  { id:'p5', cat:'perucas', name:'Peruca lisa ', desc:'Tamanho 10.', price:0000, img:'images/p5.jpg.jpeg' },
  { id:'p6', cat:'perucas', name:'Peruca lisa ', desc:'Tamanho 14.', price:0000, tag:'Top', img:'images/p6.jpg.jpeg' },
  // COSMÉTICOS
  { id:'c1', cat:'cosmeticos', name:'Perfume da Zara', desc:'alta qualidade', price:35000, tag:'Best', img:'images/c1.jpg.jpeg' },
  { id:'c2', cat:'cosmeticos', name:'óleo da paixão', desc:'longa duração.', price:10000, img:'images/c2.jpg.jpeg' },
  { id:'c3', cat:'cosmeticos', name:'Óleo da poran facial ', desc:'clássico', price:7000, img:'images/c3.jpg.jpeg' },
  { id:'c4', cat:'cosmeticos', name:'Herbissimo Antitranspirante', desc:'Cada.', price:9000, tag:'Novo', img:'images/c4.jpg.jpeg' },
  { id:'c5', cat:'cosmeticos', name:'Óleo da Poran rosa mosqueta', desc:'Recomendo.', price:12000, img:'images/c5.jpg.jpeg' },
  { id:'c6', cat:'cosmeticos', name:'Kit Dermachem clareador ', desc:'4 itens.', price:43000, img:'images/c6.jpg.jpeg' },


    { id:'c1', cat:'cosmeticos', name:'Creme da o Boticário LiLy', desc:'cada', price:28000, tag:'Best', img:'images/c7.jpg.jpeg' },
  { id:'c2', cat:'cosmeticos', name:'Creme Rhenuks Fitness seca barriga', desc:'Recomendado.', price:12000, img:'images/c8.jpg.jpeg' },
  { id:'c3', cat:'cosmeticos', name:'Creme da  o Boticário cuide-se Bem ', desc:'Cada', price:25000, img:'images/c9.jpg.jpeg' },
  { id:'c4', cat:'cosmeticos', name:'Dermachem rosa mosqueta', desc:'Cada.', price:11000, tag:'Novo', img:'images/c10.jpg.jpeg' },
  { id:'c5', cat:'cosmeticos', name:'Kit dermachem', desc:' 4 peças.', price:43000, img:'images/c11.jpg.jpeg' },
  { id:'c6', cat:'cosmeticos', name:'Sabonete íntimo ', desc:'Cada.', price:10000, img:'images/c12.jpg.jpeg' },


      { id:'c1', cat:'cosmeticos', name:'Body splash da o Boticário nativa spar', desc:'Clássico', price:28000, tag:'Best', img:'images/c13.jpg.jpeg' },
  { id:'c2', cat:'cosmeticos', name:'Serum da Dove', desc:'Grande.', price:25000, img:'images/c14.jpg.jpeg' },
  { id:'c3', cat:'cosmeticos', name:'Kit dermachem rosa mosqueta ', desc:'Clássico', price:50000, img:'images/c15.jpg.jpeg' },
  { id:'c4', cat:'cosmeticos', name:'Óleo da Lily', desc:'Recomendado.', price:26000, tag:'Novo', img:'images/c16.jpg.jpeg' },
  { id:'c5', cat:'cosmeticos', name:'Kit Sabonete e creme facial', desc:' Recomendado.', price:12000, img:'images/c17.jpg.jpeg' },
  { id:'c6', cat:'cosmeticos', name:'Serum da Dove pequeno ', desc:'Clássico.', price:18000, img:'images/c18.jpg.jpeg' },



  
      { id:'c1', cat:'cosmeticos', name:'Perfume da Zara', desc:'Clássico', price:40000, tag:'Best', img:'images/c19.jpg.jpeg' },
  { id:'c2', cat:'cosmeticos', name:'Protetor solar da dermachem ', desc:'Recomendo.', price:14000, img:'images/c20.jpg.jpeg' },
  { id:'c3', cat:'cosmeticos', name:'Kit Gentle magic ', desc:'Clássico', price:25000, img:'images/c21.jpg.jpeg' },
  { id:'c4', cat:'cosmeticos', name:'Perfume de calcinha', desc:'Recomendado.', price:5500, tag:'Novo', img:'images/c22.jpg.jpeg' },
  { id:'c5', cat:'cosmeticos', name:'Desodorizante da Herbissimo ', desc:' Cada.', price:6000, img:'images/c23.jpg.jpeg' },
  { id:'c6', cat:'cosmeticos', name:'Creme nativa spar da O Boticário ', desc:'Clássico.', price:25000, img:'images/c24.jpg.jpeg' },


        { id:'c1', cat:'cosmeticos', name:'Creme nativa Spar da O Boticário', desc:'Clássico', price:25000, tag:'Best', img:'images/c25.jpg.jpeg' },
  { id:'c2', cat:'cosmeticos', name:'Kit Dermachem Anti oleosidade', desc:'Recomendo.', price:50000, img:'images/c30.jpg.jpeg' },
  { id:'c3', cat:'cosmeticos', name:'Perfume da Lili ', desc:'Clássico', price:60000, img:'images/c26.jpg.jpeg' },
  { id:'c4', cat:'cosmeticos', name:'Creme da Lily', desc:'Recomendado.', price:28000, tag:'Novo', img:'images/c27.jpg.jpeg' },
  { id:'c5', cat:'cosmeticos', name:'Óleo da rosa mosqueta ', desc:' Recomendo.', price:11000, img:'images/c28.jpg.jpeg' },
  { id:'c6', cat:'cosmeticos', name:'Óleo ', desc:'Clássico.', price:8500, img:'images/c29.jpg.jpeg' },

];

const WHATSAPP = '244928626160';
const fmt = (v) => v.toLocaleString('pt-AO') + ' Kz';

// ===== RENDER PRODUTOS =====
function renderProducts(){
  const peruGrid = document.getElementById('perucasGrid');
  const cosmGrid = document.getElementById('cosmeticosGrid');
  PRODUCTS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product reveal';
    card.innerHTML = `
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <p class="product-price">${fmt(p.price)}</p>
        <button class="add-cart" data-id="${p.id}">🛒 Adicionar ao carrinho</button>
      </div>`;
    (p.cat === 'perucas' ? peruGrid : cosmGrid).appendChild(card);
  });
  document.querySelectorAll('.add-cart').forEach(b => {
    b.addEventListener('click', () => addToCart(b.dataset.id));
  });
}

// ===== CARRINHO =====
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
function saveCart(){ localStorage.setItem('cart', JSON.stringify(cart)); updateCartUI(); }

function addToCart(id){
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++; else cart.push({ id, qty:1 });
  saveCart();
  alert('Produto adicionado ao carrinho!');
}
function removeFromCart(id){ cart = cart.filter(i => i.id !== id); saveCart(); }
function changeQty(id, d){
  const it = cart.find(i => i.id === id);
  if (!it) return;
  it.qty += d;
  if (it.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
}

function updateCartUI(){
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  const list = document.getElementById('cartItems');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');
  list.innerHTML = '';
  if (!cart.length){ empty.style.display = 'block'; footer.hidden = true; return; }
  empty.style.display = 'none'; footer.hidden = false;
  let total = 0;
  cart.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.id); if (!p) return;
    total += p.price * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <div class="cart-item-info">
        <h4>${p.name}</h4>
        <div class="p">${fmt(p.price)}</div>
      </div>
      <div class="qty">
        <button onclick="changeQty('${p.id}',-1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty('${p.id}',1)">+</button>
      </div>
      <button class="remove" onclick="removeFromCart('${p.id}')">✕</button>`;
    list.appendChild(div);
  });
  document.getElementById('cartTotal').textContent = fmt(total);
}

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (!cart.length) return;
  let msg = '*Novo Pedido — Gracieth Diversos*\n\n';
  let total = 0;
  cart.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    msg += `• ${p.name} x${item.qty} — ${fmt(p.price * item.qty)}\n`;
    total += p.price * item.qty;
  });
  msg += `\n*Total: ${fmt(total)}*`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
});

// ===== ENCOMENDA FORM =====
document.getElementById('encomendaForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const msg = `*Encomenda Personalizada*\n\nNome: ${f.get('nome')}\nCidade: ${f.get('cidade')}\nProduto: ${f.get('produto')}\nDetalhes: ${f.get('detalhes')}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
});

// ===== MENU MOBILE =====
const menu = document.getElementById('mobileMenu');
const overlay = document.getElementById('mobileOverlay');
const openMenu = () => { menu.classList.add('open'); overlay.classList.add('open'); };
const closeMenu = () => { menu.classList.remove('open'); overlay.classList.remove('open'); };
document.getElementById('menuToggle').addEventListener('click', openMenu);
document.getElementById('mobileClose').addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// ===== SCROLL REVEAL =====
function setupReveal(){
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '-50px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ===== INIT =====
renderProducts();
updateCartUI();
setupReveal();
document.getElementById('year').textContent = new Date().getFullYear();
