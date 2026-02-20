<template>
    <ion-page>
        <ion-content :fullscreen="true" class="project-container">

            <!-- Header -->
            <header class="project-header animate-fade-down">
                <div class="top-logo">
                    <router-link to="/home" class="logo-link">
                        <img src="/assets/loog1.png" alt="Logo">
                    </router-link>
                </div>
                <h1 class="page-title">Design Projects</h1>
                <p class="page-subtitle">Kumpulan karya desain</p>
            </header>

            <!-- Projects Grid -->
            <div class="projects-grid">
                <div v-for="project in projects" :key="project.id" class="project-card animate-float"
                    @click="openProject(project)">

                    <div class="project-img-box" :class="{ 'ratio-4-5': project.images }">
                        <template v-if="project.images">
                            <img v-for="(img, idx) in project.images" :key="idx" :src="img"
                                :class="{ 'active': activeSlides[project.id] === idx }" class="slide-img">
                        </template>
                        
                        <img :src="project.image" :alt="project.title">
                        <div class="card-overlay">
                            <span class="view-btn">Detail Desain</span>
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

            <!-- Footer & Nav -->
            <div class="bottom-section">
                <router-link to="/home" class="btn-back">Kembali ke Halaman Utama</router-link>
                <footer class="footer-bottom">
                    <p>© Fregi Ardika Setyawan - 2026 All rights reserved</p>
                </footer>
            </div>

            <!-- Modal Detail -->
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

            <!-- Fixed Components -->
            <div class="social-sidebar">
                <a href="https://github.com/ardksfs"><i class="bx bxl-github"></i></a>
                <a href="https://www.instagram.com/ardksfs_/"><i class="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/in/fregi-ardika-setyawan-4a8bb0381/"><i
                        class="bx bxl-linkedin-square"></i></a>
            </div>

            <div class="scroll-indicator">
                <span>Scroll on</span>
                <i class='bx bx-mouse'></i>
            </div>

        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import { ref, reactive, onMounted } from 'vue';

const selectedProject = ref(null);
const activeSlides = reactive({});
const openProject = (p) => { selectedProject.value = p; };
const closeProject = () => { selectedProject.value = null; };

// Dummy Data Desain
const projects = ref([
    {
        id: 7, 
        title: 'Photo Toning & Collage',
        images: [
            '/assets/W1/1.svg',
            '/assets/W1/2.svg',
            '/assets/W1/3.svg',
            '/assets/W1/4.svg',
            '/assets/W1/5.svg',
            '/assets/W1/6.svg',
            '/assets/W1/7.svg'
        ],
        techIcons: ['/assets/Lr.svg', 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg'],
        fullDesc: 'Detail informasi tentang jobdesk pekerjaan Photo Toning & Collage kreatif wedding, photo studio, prewedding, menggunakan Adobe Lightroom Classic dan Canva.',
        techDetails: [
            { name: 'Lightroom', icon: '/assets/Lr.svg' },
            { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg' }
        ],
        longInfo: 'Berfokus pada penciptaan identitas visual melalui permainan warna. Setiap foto diproses secara mendalam di Adobe Lightroom untuk mendapatkan tone yang tajam dan berkarakter, lalu dikurasi menjadi sebuah kolase menggunakan Canva untuk menghasilkan komposisi gambar yang harmonis dan menarik mata.'
    },
    {
        id: 8,
        title: 'Photo Toning & Collage',
        images: [
            '/assets/W2/A1.svg',
            '/assets/W2/A2.svg',
            '/assets/W2/A3.svg',
            '/assets/W2/A4.svg',
            '/assets/W2/A5.svg',
            '/assets/W2/A6.svg'
        ],
        techIcons: ['/assets/Lr.svg', 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg'],
        fullDesc: 'Detail informasi tentang jobdesk pekerjaan Photo Toning & Collage kreatif wedding, photo studio, prewedding, menggunakan Adobe Lightroom Classic dan Canva.',
        techDetails: [
            { name: 'Lightroom', icon: '/assets/Lr.svg' },
            { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg' }
        ],
        longInfo: 'Berfokus pada penciptaan identitas visual melalui permainan warna. Setiap foto diproses secara mendalam di Adobe Lightroom untuk mendapatkan tone yang tajam dan berkarakter, lalu dikurasi menjadi sebuah kolase menggunakan Canva untuk menghasilkan komposisi gambar yang harmonis dan menarik mata.'
    },
    {
        id: 2,
        title: 'Admin Cashier Poster',
        image: '/assets/admps 1.svg',
        techIcons: ['https://www.vectorlogo.zone/logos/figma/figma-icon.svg', 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg'],
        fullDesc: 'Desain poster feed ig untuk App admin kasir restoran.',
        techDetails: [
            { name: 'Figma Design', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
            { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg' }
        ],
        longInfo: 'Poster feed IG ini berfokus pada tampilan User Interface (UI) aplikasi kasir yang intuitif dan bersih. Perpaduan tipografi yang tegas dan elemen visual modern dirancang untuk memberikan kesan profesionalitas pada sistem administrasi restoran.'
    },
    {
        id: 3,
        title: 'Indonesia Team PNC Poster',
        image: '/assets/pnc 1.svg',
        techIcons: ['https://www.vectorlogo.zone/logos/figma/figma-icon.svg', 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg'],
        fullDesc: 'Konsep poster profesional untuk untuk mendukung tim nasional Indonesia di ajang PUBG Nations Cup (PNC).',
        techDetails: [
            { name: 'Figma Design', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
            { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg' }
        ],
        longInfo: 'Desain poster resmi untuk mendukung tim nasional Indonesia di ajang PUBG Nations Cup (PNC). Menggabungkan elemen patriotik dengan estetika desain esports modern yang dinamis, menonjolkan semangat juang dan kebanggaan nasional melalui komposisi visual yang kuat dan ikonik.'
    },
    {
        id: 1,
        title: 'House Repair Poster',
        image: '/assets/DSHS 1.svg',
        techIcons: ['https://www.vectorlogo.zone/logos/figma/figma-icon.svg', 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg'],
        fullDesc: 'Desain poster feed ig untuk web profile House Repair.',
        techDetails: [
            { name: 'Figma Design', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
            { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg' }
        ],
        longInfo: "Poster profil web ini berfokus pada visualisasi hasil renovasi rumah yang berkualitas, dipadukan dengan estetika desain modern yang intuitif untuk menarik perhatian calon klien dalam sekali lihat."
    },
    {
        id: 4,
        title: 'Thumbnail of Team THE EXPENDABLES',
        image: '/assets/TES 1.svg',
        techIcons: ['https://www.vectorlogo.zone/logos/canva/canva-icon.svg'],
        fullDesc: 'Desain Thumbnail all roaster player dari THE EXPENDABLES tim dari Vietnam',
        techDetails: [
            { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg' }
        ],
        longInfo: 'Desain thumbnail khusus untuk tim THE EXPENDABLES yang menekankan pada branding tim, menggunakan tipografi bold serta efek visual dramatis yang agresif dan profesional.'
    },
    {
        id: 5,
        title: 'Thumbnail Player of TEAM FALCONS',
        image: '/assets/kick 1.svg',
        techIcons: ['https://www.vectorlogo.zone/logos/canva/canva-icon.svg'],
        fullDesc: 'Desain Thumbnail dari seorang player dari TEAM FALCONS dari tim US',
        techDetails: [
            { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg' }
        ],
        longInfo: 'Thumbnail spotlight pemain untuk TEAM FALCONS. Desain ini berfokus pada personifikasi pemain mencerminkan identitas tim Falcons sebagai salah satu kekuatan besar di skena esports global'
    },
    {
        id: 6,
        title: 'Thumbnail Player of ROY ESPORTS',
        image: '/assets/TD1 1.svg',
        techIcons: ['https://www.vectorlogo.zone/logos/canva/canva-icon.svg'],
        fullDesc: 'Desain Thumbnail dari seorang player dari ROY ESPORTS dari tim Indonesia',
        techDetails: [
            { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg' }
        ],
        longInfo: '"Desain thumbnail player untuk ROY ESPORTS yang mengutamakan komposisi visual energik, Menggunakan permainan lighting dan shading yang mendalam.'
    }
]);

onMounted(() => {
    projects.value.forEach(p => {
        if (p.images) activeSlides[p.id] = 0;
    });

    setInterval(() => {
        projects.value.forEach(p => {
            if (p.images) {
                activeSlides[p.id] = (activeSlides[p.id] + 1) % p.images.length;
            }
        });
    }, 4000); 
});
</script>

<style scoped>
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
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); 
    gap: 20px;
    padding: 0 10%;
    max-width: 1200px;
    margin: 30px auto 0;
    align-items: start; 
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
    border-radius: 10px;
    overflow: hidden;
    background: #0a121e;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.project-img-box img {
    width: 100%;
    height: auto; 
    display: block;
    transition: 0.5s;
}
.project-img-box img:not(.slide-img) {
    width: 100%;
    height: auto;
    display: block;
}

.ratio-4-5 {
    aspect-ratio: 4 / 5;
    width: 100%;
}

.slide-img {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.slide-img.active {
    opacity: 1;
    z-index: 1;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
    gap: 25px;
    padding: 0 10%;
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
    border-radius: 20px;
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
    padding: 10px 5px;
}

.p-title {
    font-size: 0.96rem;
    color: #38bdf8;
    font-weight: 700;
    margin: 0;
}

.tech-mini-icon {
    width: 18px;
    height: 18px;
    margin-left: 5px;
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
/* MODAL */
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
.modal-header h2 {
    font-size: 1.5rem;
    color: #ffffff !important; 
    font-weight: 550;
    margin: 0;
    text-shadow: 0 0 10px rgba(56, 189, 248, 0.3); 
}
.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.close-x {
    background: none;
    border: none;
    color: #94a3b8;
    font-size: 2rem;
    cursor: pointer;
}

.modal-desc {
    color: #ffffff;
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
}

.tech-item img {
    width: 30px;
    height: 30px;
}

.modal-inner-box {
    background: #060b13;
    padding: 20px;
    border-radius: 10px;
    color: #94a3b8;
    font-size: 0.9rem;
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
    .social-sidebar i {
        font-size: 1.1rem;
    }

    .scroll-indicator i {
        font-size: 1.3rem;
    }

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