// ===== DATA =====
/*const categories = [
    { id: 'lubrifiants-eau', icon: '💧', name: 'À Base d\'Eau', desc: 'Doux, naturels et compatibles avec tous les préservatifs. Idéal pour une utilisation quotidienne.', count: 5 },
    { id: 'lubrifiants-silicone', icon: '💎', name: 'Silicone Premium', desc: 'Longue durée, résistant à l\'eau. Formule lisse et soyeuse pour une expérience prolongée.', count: 3 },
    { id: 'lubrifiants-chauffants', icon: '🔥', name: 'Effet Chauffant', desc: 'Sensation de chaleur douce et progressive qui stimule et intensifie les sensations.', count: 3 },
    { id: 'lubrifiants-aromatises', icon: '🍓', name: 'Aromatisés', desc: 'Parfums délicats et goûts fruités pour pimenter les moments à deux. Sans sucre.', count: 4 },
    { id: 'bien-etre', icon: '🌿', name: 'Bien-être & Massage', desc: 'Huiles et gels de massage relaxants pour prendre soin de vous et de votre partenaire.', count: 3 },
    { id: 'accessoires', icon: '✨', name: 'Accessoires', desc: 'Préservatifs premium, lingettes, et accessoires complémentaires pour votre bien-être.', count: 4 },
];*/

let products = [
    { id: 0, name: 'Classic Gel Intime', cat: 'lubrifiants-eau', catLabel: 'Lubrifiant aqueux', emoji: '💧', price: 8500, desc: 'Notre gel intime classique à base d\'eau, hypoallergénique et compatible avec tous les matériaux. Texture légère et non-collante.', rating: 4.8, reviews: 124, variants: ['50ml', '100ml', '150ml'], features: ['Sans parfum', 'Hypoallergénique', 'Sans parabènes', 'Compatible latex'], badge: 'best', stock: 42 },
    { id: 1, name: 'Gel Aqueux Soyeux', cat: 'lubrifiants-eau', catLabel: 'Lubrifiant aqueux', emoji: '🫧', price: 9500, desc: 'Texture ultra-soyeuse à base d\'eau enrichi à l\'aloe vera. Hydratant longue durée.', rating: 4.7, reviews: 86, variants: ['75ml', '150ml'], features: ['Aloe Vera', 'Hydratant', 'Sans alcool', 'Végan'], stock: 28 },
    { id: 2, name: 'Bio Naturel Plus', cat: 'lubrifiants-eau', catLabel: 'Lubrifiant bio', emoji: '🌿', price: 12000, desc: 'Formule 100% naturelle certifiée bio, enrichie à l\'huile d\'argan et extraits de camomille pour une douceur optimale.', rating: 4.9, reviews: 203, variants: ['75ml', '120ml'], features: ['Certifié Bio', 'Huile d\'Argan', 'Camomille', 'Sans sulfates'], badge: 'new', stock: 18 },
    { id: 3, name: 'Chauffant Passion', cat: 'lubrifiants-chauffants', catLabel: 'Lubrifiant chauffant', emoji: '🔥', price: 14500, desc: 'Un lubrifiant innovant avec effet chauffant progressif, formule à base d\'eau avec extrait de gingembre naturel.', rating: 4.6, reviews: 67, variants: ['50ml', '100ml'], features: ['Effet chauffant', 'Gingembre naturel', 'Compatible latex', 'Longue durée'], stock: 22 },
    { id: 4, name: 'Silicone Premium Pro', cat: 'lubrifiants-silicone', catLabel: 'Lubrifiant silicone', emoji: '💎', price: 18000, desc: 'Notre formule silicone longue durée, résistante à l\'eau, pour une expérience sans interruption. Texture ultra-soyeuse.', rating: 4.8, reviews: 91, variants: ['60ml', '120ml'], features: ['Résistant eau', 'Longue durée', 'Silicone pur', 'Sans parabènes'], badge: 'premium', stock: 15 },
    { id: 5, name: 'Silicone Doux', cat: 'lubrifiants-silicone', catLabel: 'Lubrifiant silicone', emoji: '✨', price: 15000, desc: 'Version allégée du silicone premium, idéal pour les peaux sensibles. Formule hypoallergénique.', rating: 4.5, reviews: 43, variants: ['60ml'], features: ['Peau sensible', 'Hypoallergénique', 'Silicone', 'Léger'], stock: 19 },
    { id: 6, name: 'Framboise & Vanille', cat: 'lubrifiants-aromatises', catLabel: 'Lubrifiant aromatisé', emoji: '🍓', price: 10500, desc: 'Saveur gourmande framboise et vanille, sans sucre et sans alcool. Parfum délicat et goût agréable.', rating: 4.7, reviews: 158, variants: ['50ml', '100ml'], features: ['Goût framboise', 'Sans sucre', 'Base eau', 'Comestible'], stock: 35 },
    { id: 7, name: 'Mangue Tropicale', cat: 'lubrifiants-aromatises', catLabel: 'Lubrifiant aromatisé', emoji: '🥭', price: 10500, desc: 'Un voyage tropical en bouche avec ce lubrifiant au parfum de mangue fraîche. Formule légère et hydratante.', rating: 4.6, reviews: 72, variants: ['50ml', '100ml'], features: ['Goût mangue', 'Sans alcool', 'Tropical', 'Hydratant'], badge: 'new', stock: 29 },
    { id: 8, name: 'Cooling Effect', cat: 'lubrifiants-eau', catLabel: 'Lubrifiant fraîcheur', emoji: '❄️', price: 11000, desc: 'Effet rafraîchissant et tonifiant à la menthe douce. Idéal pour les journées chaudes ou après l\'effort.', rating: 4.5, reviews: 38, variants: ['75ml'], features: ['Effet frais', 'Menthe douce', 'Tonifiant', 'Base eau'], stock: 21 },
    { id: 9, name: 'Huile de Massage Sensuelle', cat: 'bien-etre', catLabel: 'Massage & Bien-être', emoji: '🕯️', price: 15500, desc: 'Huile de massage douce aux huiles essentielles de jasmin et ylang-ylang pour des moments de détente profonde.', rating: 4.9, reviews: 117, variants: ['100ml', '200ml'], features: ['Jasmin & Ylang', 'Relaxante', 'Corps entier', 'Non grasse'], badge: 'best', stock: 24 },
    { id: 10, name: 'Gel Relaxant Musculaire', cat: 'bien-etre', catLabel: 'Bien-être', emoji: '🌺', price: 13000, desc: 'Gel de massage relaxant pour soulager les tensions musculaires avec une formule enrichie à l\'arnica et eucalyptus.', rating: 4.4, reviews: 54, variants: ['100ml', '150ml'], features: ['Arnica', 'Eucalyptus', 'Anti-tension', 'Chaleur douce'], stock: 17 },
    { id: 11, name: 'Coffret Découverte', cat: 'bien-etre', catLabel: 'Bien-être Pack', emoji: '🎁', price: 28000, desc: 'Coffret cadeau incluant 3 produits essentiels : lubrifiant Classic, huile de massage et gel fraîcheur. Idéal comme cadeau.', rating: 5.0, reviews: 39, variants: ['Pack 3 produits'], features: ['3 produits', 'Coffret cadeau', 'Emballage luxe', 'Économique'], badge: 'premium', stock: 10 },
    { id: 12, name: 'Préservatifs Ultra-Thin', cat: 'accessoires', catLabel: 'Accessoires', emoji: '🛡️', price: 7500, desc: 'Préservatifs ultra-fins de haute qualité, testés CE. Compatibles avec tous nos lubrifiants.', rating: 4.7, reviews: 89, variants: ['Pack 12', 'Pack 24'], features: ['Ultra-fin', 'Certifié CE', 'Compatible', 'Discret'], stock: 50 },
    { id: 13, name: 'Lingettes Intimes', cat: 'accessoires', catLabel: 'Accessoires', emoji: '🧴', price: 3500, desc: 'Lingettes douces au pH équilibré pour une hygiène intime optimale en toutes circonstances.', rating: 4.6, reviews: 62, variants: ['Pack 10', 'Pack 20'], features: ['pH équilibré', 'Doux', 'Pratique', 'Sans alcool'], badge: 'new', stock: 45 },
    { id: 14, name: 'Chauffant Cannelle', cat: 'lubrifiants-chauffants', catLabel: 'Lubrifiant chauffant', emoji: '🌶️', price: 13500, desc: 'Effet chauffant intense à la cannelle et au poivre rose. Pour les amateurs de sensations fortes.', rating: 4.3, reviews: 28, variants: ['50ml'], features: ['Cannelle', 'Effet intense', 'Base eau', 'Compatible latex'], stock: 14 },
    { id: 15, name: 'Chocolat Fondant', cat: 'lubrifiants-aromatises', catLabel: 'Lubrifiant aromatisé', emoji: '🍫', price: 11500, desc: 'Saveur intense de chocolat noir avec une touche de caramel. Une expérience gourmande unique.', rating: 4.8, reviews: 73, variants: ['50ml', '100ml'], features: ['Chocolat noir', 'Sans sucre', 'Base eau', 'Comestible'], stock: 26 },
];

let cart = [];
let currentProduct = null;
let currentModalQty = 1;
let currentVariant = null;
let currentFilter = 'all';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts(products);
    renderAdminTable();
    window.addEventListener('scroll', handleScroll);
});

function handleScroll() {
    const header = document.getElementById('mainHeader');
    header.classList.toggle('scrolled', window.scrollY > 60);
}

// ===== CATEGORIES =====
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = categories.map(cat => `
    <div class="cat-card" onclick="filterProducts('${cat.id}', null); document.getElementById('catalogue').scrollIntoView({behavior:'smooth'})">
      <div class="cat-icon">${cat.icon}</div>
      <div class="cat-name">${cat.name}</div>
      <div class="cat-desc">${cat.desc}</div>
      <div class="cat-count">${cat.count} produits disponibles →</div>
    </div>
  `).join('');
}

// ===== PRODUCTS =====
function renderProducts(list) {
    const grid = document.getElementById('productsGrid');
    if (!list.length) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)">Aucun produit trouvé</div>';
        return;
    }
    grid.innerHTML = list.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.07}s" onclick="openProduct(${p.id})">
      <div class="product-img">
        <div class="product-wishlist" onclick="event.stopPropagation(); toggleWishlist(this)">♡</div>
        <div class="product-badge-wrap">
          ${p.badge === 'best' ? '<span class="badge badge-gold">Bestseller</span>' : ''}
          ${p.badge === 'new' ? '<span class="badge badge-new">Nouveau</span>' : ''}
          ${p.badge === 'premium' ? '<span class="badge badge-rose">Premium</span>' : ''}
        </div>
        ${p.emoji}
      </div>
      <div class="product-info">
        <div class="product-cat">${p.catLabel}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc.substring(0, 70)}...</div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div>
            <span class="product-price">${formatPrice(p.price)}</span>
            ${p.stock < 10 ? `<span style="font-size:10px;color:#ffc107;">⚠ Stock limité: ${p.stock}</span>` : ''}
          </div>
          <button class="add-cart-btn" onclick="event.stopPropagation(); quickAddToCart(${p.id})" title="Ajouter au panier">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts(catId, btn) {
    currentFilter = catId;
    // Update active tab
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');

    let filtered = catId === 'all' ? products : products.filter(p => p.cat === catId);
    renderProducts(filtered);
}

function sortProducts(type) {
    let list = currentFilter === 'all' ? [...products] : products.filter(p => p.cat === currentFilter);
    if (type === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (type === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (type === 'rating') list.sort((a, b) => b.rating - a.rating);
    else if (type === 'new') list.sort((a, b) => (b.badge === 'new') - (a.badge === 'new'));
    renderProducts(list);
}

function handleSearch(val) {
    if (!val) { renderProducts(products); return; }
    const q = val.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.catLabel.toLowerCase().includes(q)
    );
    renderProducts(filtered);
}

function toggleSearch() {
    const wrapper = document.querySelector('.search-bar-wrapper');
    wrapper.style.display = wrapper.style.display === 'none' ? 'block' : 'none';
}

// ===== PRODUCT MODAL =====
function openProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    currentProduct = p;
    currentModalQty = 1;
    currentVariant = p.variants[0];

    document.getElementById('modalImg').textContent = p.emoji;
    document.getElementById('modalCat').textContent = p.catLabel;
    document.getElementById('modalName').textContent = p.name;
    document.getElementById('modalDesc').textContent = p.desc;
    document.getElementById('modalPrice').textContent = formatPrice(p.price);
    document.getElementById('modalQty').textContent = '1';

    document.getElementById('modalVariants').innerHTML = p.variants.map((v, i) =>
        `<button class="variant-btn ${i === 0 ? 'active' : ''}" onclick="selectVariant('${v}', this)">${v}</button>`
    ).join('');

    document.getElementById('modalFeatures').innerHTML = p.features.map(f =>
        `<div class="product-feature"><span class="product-feature-icon">✓</span>${f}</div>`
    ).join('');

    document.getElementById('productModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('show');
    document.body.style.overflow = '';
}

function selectVariant(v, btn) {
    currentVariant = v;
    document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function changeModalQty(delta) {
    currentModalQty = Math.max(1, currentModalQty + delta);
    document.getElementById('modalQty').textContent = currentModalQty;
}

function addToCartFromModal() {
    if (!currentProduct) return;
    addToCart(currentProduct, currentVariant, currentModalQty);
    closeProductModal();
}

// ===== CART =====
function quickAddToCart(id) {
    const p = products.find(x => x.id === id);
    if (p) addToCart(p, p.variants[0], 1);
}

function addToCart(product, variant, qty) {
    const key = `${product.id}-${variant}`;
    const existing = cart.find(i => i.key === key);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ key, product, variant, qty });
    }
    updateCartUI();
    showToast(` ${product.name} ajouté au panier !`, 'success');
}

function removeFromCart(key) {
    cart = cart.filter(i => i.key !== key);
    updateCartUI();
}

function changeCartQty(key, delta) {
    const item = cart.find(i => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    if (item.qty === 0) removeFromCart(key);
    updateCartUI();
}

function updateCartUI() {
    const count = cart.reduce((sum, i) => sum + i.qty, 0);
    const countEl = document.getElementById('cartCount');
    countEl.textContent = count;
    countEl.classList.toggle('show', count > 0);

    const subtotal = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);
   // const delivery = 1500;
    const total = subtotal ;//+ (cart.length > 0 ? delivery : 0);

    document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('cartTotal').textContent = formatPrice(total);

    const itemsEl = document.getElementById('cartItems');
    const footerEl = document.getElementById('cartFooter');

    if (cart.length === 0) {
        itemsEl.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><span>Votre panier est vide</span></div>`;
        footerEl.style.display = 'none';
    } else {
        footerEl.style.display = 'block';
        itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">${item.product.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.product.name}</div>
          <div class="cart-item-variant">${item.variant}</div>
          <div class="cart-item-price">${formatPrice(item.product.price * item.qty)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeCartQty('${item.key}', -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="changeCartQty('${item.key}', 1)">+</button>
          </div>
        </div>
        <div class="cart-item-del" onclick="removeFromCart('${item.key}')">🗑</div>
      </div>
    `).join('');
    }

    // Update checkout summary
    updateCheckoutSummary();
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('cartOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('show');
    document.body.style.overflow = '';
}

// ===== CHECKOUT =====
function openCheckout() {
    if (cart.length === 0) { showToast('Votre panier est vide !', 'error'); return; }
    closeCart();
    updateCheckoutSummary();
    document.getElementById('checkoutModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('show');
    document.body.style.overflow = '';
}

function updateCheckoutSummary() {
    const el = document.getElementById('checkoutSummary');
    if (!el) return;
    if (cart.length === 0) { el.textContent = 'Panier vide'; return; }
    const subtotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
    const total = subtotal //+ 1500;
    el.innerHTML = cart.map(i => `<div style="display:flex;justify-content:space-between;margin-bottom:4px">
    <span>${i.product.name} × ${i.qty}</span><span>${formatPrice(i.product.price * i.qty)}</span>
  </div>`).join('') + `<div style="display:flex;justify-content:space-between;margin-top:8px;padding-top:8px;border-top:1px solid var(--border);font-weight:600;color:var(--rose-light)">
    <span>Total</span><span>${formatPrice(total)}</span>
  </div>`;
}

function selectPayment(el) {
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
}

function placeOrder() {
    const num = '#DA-' + (1048 + Math.floor(Math.random() * 10));
    const total = cart.reduce((s, i) => s + i.product.price * i.qty, 0) ;//+ 1500;
    cart = [];
    updateCartUI();
    closeCheckout();

    // Add to admin table
    const tbody = document.getElementById('adminOrdersTable');
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${num}</td><td>Nouveau client</td><td>Commande récente</td><td>${formatPrice(total)}</td><td>Mobile Money</td>
    <td><span class="status-badge status-preparing">⏳ Préparation</span></td>`;
    tbody.insertBefore(tr, tbody.firstChild);

    showToast(`🎉 Commande ${num} confirmée ! Vous serez contacté sous peu.`, 'success');
}

// ===== WISHLIST =====
function toggleWishlist(btn) {
    btn.classList.toggle('active');
    btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
    showToast(btn.classList.contains('active') ? '♥ Ajouté aux favoris' : '♡ Retiré des favoris');
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
    document.getElementById('mobileOverlay').classList.toggle('show');
}
function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('mobileOverlay').classList.remove('show');
}

// ===== ADMIN =====
function openAdmin() {
    document.getElementById('adminPanel').classList.add('show');
    document.body.style.overflow = 'hidden';
}
function closeAdmin() {
    document.getElementById('adminPanel').classList.remove('show');
    document.body.style.overflow = '';
}

function renderAdminTable() {
    const tbody = document.getElementById('adminProductsTable');
    tbody.innerHTML = products.map(p => `
    <tr>
      <td>${p.emoji} ${p.name}</td>
      <td>${p.catLabel}</td>
      <td>${formatPrice(p.price)}</td>
      <td style="color:${p.stock < 15 ? '#ffc107' : '#5ad282'}">${p.stock} unités</td>
      <td>${p.reviews}</td>
      <td><button class="btn btn-outline btn-sm" onclick="adminDeleteProduct(${p.id})">Supprimer</button></td>
    </tr>
  `).join('');
}

function adminAddProduct() {
    const name = document.getElementById('adminProductName').value.trim();
    const cat = document.getElementById('adminProductCat').value;
    const price = parseInt(document.getElementById('adminProductPrice').value);
    const stock = parseInt(document.getElementById('adminProductStock').value);
    const desc = document.getElementById('adminProductDesc').value.trim();
    const emoji = document.getElementById('adminProductEmoji').value.trim() || '📦';
    const variantsRaw = document.getElementById('adminProductVariants').value.trim();
    const variants = variantsRaw ? variantsRaw.split(',').map(v => v.trim()) : ['Standard'];

    if (!name || !price) { showToast('Remplissez le nom et le prix', 'error'); return; }

    const catData = categories.find(c => c.id === cat);
    const newProduct = {
        id: products.length,
        name, cat,
        catLabel: catData ? catData.name : cat,
        emoji, price, desc: desc || 'Nouveau produit.',
        rating: 0, reviews: 0, variants,
        features: ['Nouveau produit'],
        badge: 'new', stock: stock || 10
    };

    products.push(newProduct);
    renderAdminTable();
    renderProducts(currentFilter === 'all' ? products : products.filter(p => p.cat === currentFilter));

    // Clear form
    ['adminProductName', 'adminProductPrice', 'adminProductStock', 'adminProductDesc', 'adminProductEmoji', 'adminProductVariants'].forEach(id => {
        document.getElementById(id).value = '';
    });

    showToast(`✓ "${name}" ajouté au catalogue !`, 'success');
}

function adminDeleteProduct(id) {
    if (!confirm('Supprimer ce produit ?')) return;
    products = products.filter(p => p.id !== id);
    renderAdminTable();
    renderProducts(currentFilter === 'all' ? products : products.filter(p => p.cat === currentFilter));
    showToast('Produit supprimé.', 'success');
}

// ===== TOAST =====
function showToast(msg, type = '') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>${msg}`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(60px)'; toast.style.transition = '0.3s'; setTimeout(() => toast.remove(), 300); }, 3000);
}

// ===== UTILS =====
function formatPrice(n) {
    return new Intl.NumberFormat('fr-CM').format(n) + ' FCFA';
}

// Close modals on overlay click
document.getElementById('productModal').addEventListener('click', function (e) {
    if (e.target === this) closeProductModal();
});
document.getElementById('checkoutModal').addEventListener('click', function (e) {
    if (e.target === this) closeCheckout();
});
