<template>
    <ion-page>
        <ion-content :fullscreen="true" class="project-container">

            <!-- Header Logo & Title -->
            <header class="project-header animate-fade-down">
                <div class="top-logo">
                    <router-link to="/home" class="logo-link">
                        <img src="/assets/loog1.webp" alt="Logo">
                    </router-link>
                </div>
                <h1 class="page-title">Web Projects</h1>
                <p class="page-subtitle">Beberapa web project yang telah dikerjakan</p>
            </header>

            <!-- Projects Grid -->
            <div class="projects-grid">
                <div v-for="project in projects" :key="project.id" class="project-card animate-float"
                    @click="openProject(project)">
                    <div class="project-img-box">
                        <img :src="project.image" :alt="project.title">
                        <div class="card-overlay">
                            <span class="view-btn">Lihat Detail</span>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3 class="p-title">{{ project.title }}</h3>
                        <div class="p-icons">
                            <img v-for="icon in project.techIcons" :key="icon" :src="icon" class="tech-mini-icon">
                        </div>
                    </div>
                </div>
            </div>

            <div class="divider-container">
                <span class="divider-line"></span>
            </div>

            <!-- Navigation & Footer -->
            <div class="bottom-section">
                <router-link to="/home" class="btn-back">Kembali ke Halaman Utama</router-link>
                <footer class="footer-bottom">
                    <p>© Fregi Ardika Setyawan - 2026 All rights reserved</p>
                </footer>
            </div>

            <!-- Project Modal (Pop-up Detail) -->
            <transition name="modal-fade">
                <div v-if="selectedProject" class="modal-overlay" @click.self="closeProject">
                    <div class="modal-content animate-pop">
                        <div class="modal-header">
                            <h2>{{ selectedProject.title }}</h2>
                            <button class="close-x" @click="closeProject"><i class='bx bx-x'></i></button>
                        </div>

                        <p class="modal-desc">{{ selectedProject.fullDesc }}</p>

                        <div class="modal-tech-list">
                            <div v-for="tech in selectedProject.techDetails" :key="tech.name" class="tech-item">
                                <img :src="tech.icon" :alt="tech.name">
                                <span>{{ tech.name }}</span>
                            </div>
                        </div>

                        <div class="modal-inner-box">
                            <p>{{ selectedProject.longInfo }}</p>
                        </div>

                        <div class="modal-footer">
                            <button class="btn-close-modal" @click="closeProject">Tutup</button>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- Social Sidebar Left (Fixed) -->
            <div class="social-sidebar">
                <a href="https://github.com/ardksfs"><i class="bx bxl-github"></i></a>
                <a href="https://www.instagram.com/ardksfs_/"><i class="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/in/fregi-ardika-setyawan-4a8bb0381/"><i
                        class="bx bxl-linkedin-square"></i></a>
            </div>

            <!-- Scroll Indicator Right (Fixed) -->
            <div class="scroll-indicator">
                <span>Scroll on</span>
                <i class='bx bx-mouse'></i>
            </div>

        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import { ref, onMounted } from 'vue';

// Logic Neon Trail
onMounted(() => {
    const dot = document.getElementById('cursor-dot');
    const trail = document.getElementById('cursor-trail');
    let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0, trailX = 0, trailY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
    });

    const animateCursor = () => {
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        if (dot) dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
        if (trail) trail.style.transform = `translate(${trailX}px, ${trailY}px)`;
        requestAnimationFrame(animateCursor);
    };
    animateCursor();
});

// Modal Logic
const selectedProject = ref(null);
const openProject = (project) => { selectedProject.value = project; };
const closeProject = () => { selectedProject.value = null; };

// Data Projects
const projects = ref([
    {
        id: 1,
        title: 'Website Desa Kominfo',
        image: '/assets/kkp.webp',
        techIcons: ['https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg', 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'],
        fullDesc: 'Project Website Desa yang dikembangkan sebagai bagian dari program kerja digitalisasi instansi selama masa magang di Dinas Kominfo, yang dibangun dengan basic Html, Tailwind Css, dan JS',
        techDetails: [
            { name: 'JavaScript', icon: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg' },
            { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' }
        ],
        longInfo: 'Website ini dirancang untuk mempercepat transformasi digital di tingkat desa. Fokus utama project ini adalah mempermudah akses informasi publik, transparansi anggaran, serta integrasi sistem administrasi kependudukan yang lebih efisien bagi warga desa dan perangkat pemerintah setempat.'
    },
    {
        id: 2,
        title: 'House My',
        image: '/assets/Hs.webp',
        techIcons: ['https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg', 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'],
        fullDesc: 'Detail informasi tentang project Website Penyewaan dan PembelianVilla/Rumah versi yang dibangun dengan Tailwind Css dan JS',
        techDetails: [
            { name: 'JavaScript', icon: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg' },
            { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' }
        ],
        longInfo: 'Website ini dirancang untuk memudahkan pengguna dalam mencari hunian idaman atau investasi properti. Fokus utama terletak pada sistem filter pencarian yang akurat, katalog galeri rumah dan villa, serta manajemen listing yang terstruktur untuk memberikan pengalaman transaksi properti yang transparan dan aman. '
    },
    {
        id: 3,
        title: 'Admin Cashier',
        image: '/assets/adm-.webp',
        techIcons: ['https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg', 'https://www.vectorlogo.zone/logos/ionicframework/ionicframework-icon.svg'],
        fullDesc: 'Detail informasi tentang project sebuah Website app kasir restoran dengan yang dibangun dengan Vue dan Ionic.',
        techDetails: [
            { name: 'Vue', icon: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg' },
            { name: 'Ionic', icon: 'https://www.vectorlogo.zone/logos/ionicframework/ionicframework-icon.svg' }
        ],
        longInfo: 'Project ini bertujuan untuk meningkatkan efisiensi operasional restoran melalui sistem kasir otomatis. Mencakup fitur manajemen pesanan, pemantauan stok bahan baku (inventaris), hingga pembuatan laporan penjualan harian secara otomatis yang membantu pemilik bisnis dalam mengambil keputusan secara data-driven.'
    },
    {
        id: 4,
        title: 'APP Cuaca',
        image: '/assets/weather-.webp',
        techIcons: ['https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg', 'https://www.vectorlogo.zone/logos/ionicframework/ionicframework-icon.svg'],
        fullDesc: 'Detail informasi tentang project sebuah Website app Perkiraan Cuaca dengan yang dibangun dengan API, Vue dan Ionic.',
        techDetails: [
            { name: 'Vue', icon: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg' },
            { name: 'Ionic', icon: 'https://www.vectorlogo.zone/logos/ionicframework/ionicframework-icon.svg' }
        ],
        longInfo: 'Aplikasi ini berfokus pada visualisasi data cuaca yang simple, bersih dan mudah dipahami. Menggunakan integrasi API cuaca global, sistem ini mampu menampilkan suhu, kelembapan, dan prediksi cuaca harian di berbagai wilayah dengan performa akses yang sangat cepat dan responsif.'
    }
    
]);
</script>

<style scoped>

/*  SIDEBAR & SCROLL  */
.social-sidebar {
    position: fixed;
    left: 30px;
    bottom: 60px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 100;
}

.social-sidebar i {
    font-size: 1.3rem;
    color: #94a3b8;
    transition: 0.3s;
}

.social-sidebar i:hover {
    color: #38bdf8;
    transform: translateY(-3px);
}

.scroll-indicator {
    position: fixed;
    right: 30px;
    bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #94a3b8;
    z-index: 100;
}

.scroll-indicator span {
    writing-mode: vertical-rl;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.scroll-indicator i {
    font-size: 1.6rem;
    color: #38bdf8;
    animation: mouseBounce 2s infinite;
}

@keyframes mouseBounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(10px);
    }
}

/* PROJECT  */
.project-container {
    --background: #060b13;
    color: white;
    font-family: 'Poppins', sans-serif;
}

.project-header {
    text-align: center;
    padding: 60px 20px 40px;
}

.top-logo {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    pointer-events: auto; 
}

.logo-link {
    display: block;
    text-decoration: none;
    cursor: pointer;
}

.top-logo img {
    height: 60px;
    width: auto;
    transition: 0.3s;
}

.top-logo img:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
}
.page-title {
    font-size: 2.5rem;
    color: #38bdf8;
    font-weight: 700;
    margin-top: 50px;
}

.page-subtitle {
    color: #94a3b8;
    font-size: 0.9rem;
    margin-top: 10px;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 40px;
    padding: 0 10%;
    max-width: 1300px;
    margin: 0 auto;
}
.divider-container {
    display: flex;
    justify-content: center;
    padding: 60px 10% 20px;
}

.divider-line {
    width: 100%;
    max-width: 1000px; 
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.3), transparent);
}


.project-card {
    cursor: pointer;
    transition: 0.4s;
}

.project-img-box {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.project-img-box img {
    width: 100%;
    display: block;
    transition: 0.6s;
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(6, 11, 19, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.4s;
}

.view-btn {
    border: 1px solid #38bdf8;
    color: #38bdf8;
    padding: 8px 20px;
    border-radius: 15px;
    font-size: 0.8rem;
}

.project-card:hover .card-overlay {
    opacity: 1;
}

.project-card:hover img {
    transform: scale(1.05);
}

.project-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5px;
}

.p-title {
    font-size: 1.4rem;
    color: #38bdf8;
    font-weight: 700;
    margin: 0;
}

.tech-mini-icon {
    width: 24px;
    height: 24px;
    margin-left: 10px;
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.1));
}

.bottom-section {
    text-align: center;
    padding: 80px 0 40px;
}

.btn-back {
    display: inline-block;
    padding: 12px 30px;
    border: 1px solid #1e293b;
    border-radius: 50px;
    color: #94a3b8;
    text-decoration: none;
    transition: 0.3s;
    background: rgba(15, 23, 42, 0.5);
}

.btn-back:hover {
    border-color: #38bdf8;
    color: white;
    background: rgba(56, 189, 248, 0.1);
}

.footer-bottom {
    margin-top: 80px;
    text-align: center;
    color: #64748b;
    font-size: 0.85rem;
    padding-bottom: 30px;
}
/* POP-UP */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    z-index: 20000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.modal-content {
    background: #0a121e;
    width: 100%;
    max-width: 600px;
    border-radius: 15px;
    border: 1px solid rgba(56, 189, 248, 0.3);
    padding: 30px;
    position: relative;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.modal-header h2 {
    font-size: 1.8rem;
    color: #fff;
    margin: 0;
}

.close-x {
    background: none;
    border: none;
    color: #94a3b8;
    font-size: 2rem;
    cursor: pointer;
}

.modal-desc {
    color: #94a3b8;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 25px;
}

.modal-tech-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 25px;
}

.tech-item {
    display: flex;
    align-items: center;
    gap: 15px;
    color: #fff;
    font-size: 1rem;
}

.tech-item img {
    width: 28px;
    height: 28px;
}

.modal-inner-box {
    background: #060b13;
    padding: 20px;
    border-radius: 10px;
    color: #94a3b8;
    font-size: 0.9rem;
    line-height: 1.6;
}

.modal-footer {
    margin-top: 30px;
    text-align: right;
}

.btn-close-modal {
    background: #1e293b;
    color: white;
    border: none;
    padding: 10px 30px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}

.btn-close-modal:hover {
    background: #38bdf8;
    color: black;
}


@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.3s;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.animate-pop {
    animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes pop {
    from {
        transform: scale(0.8);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

    .p-title {
        font-size: 1.1rem;
    }

    .social-sidebar {
        display: flex !important;
        left: 15px !important; 
        bottom: 30px !important;
        gap: 10px;
    }

    .scroll-indicator {
        display: flex !important;
        right: 15px !important; 
        bottom: 30px !important;
    }

    .social-sidebar i { font-size: 1.1rem; }
    .scroll-indicator i { font-size: 1.3rem; }
    .scroll-indicator span { font-size: 0.6rem; }
}
    .modal-content {
        width: 92%; 
        padding: 20px; 
        max-height: 85vh; 
        overflow-y: auto; 
    }

    .modal-header h2 {
        font-size: 1.4rem;
    }

    .close-x {
        font-size: 1.6rem;
    }

    .modal-desc {
        font-size: 0.85rem;
        margin-bottom: 15px;
    }

    .tech-item {
        gap: 10px;
        font-size: 0.9rem;
    }

    .tech-item img {
        width: 22px;
        height: 22px;
    }

    .modal-inner-box {
        padding: 15px;
        font-size: 0.8rem;
    }

    .btn-close-modal {
        padding: 8px 20px;
        font-size: 0.9rem;
        width: 100%; 
    }
</style>