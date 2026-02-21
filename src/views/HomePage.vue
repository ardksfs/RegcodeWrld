<template>
  <ion-page>
    <ion-content :fullscreen="true" class="portfolio-container">
      <!-- HERO SECTION -->
      <section id="hero" class="hero-section">
        <!-- Logo Top Center -->
        <div class="top-logo">
          <img src="/assets/loog1.webp" alt="Logo" />
        </div>

        <div class="glow-overlay"></div>

        <div class="content-wrapper animate-up">
          <p class="intro-text">Perkenalkan diriku,</p>
          <h1 class="main-name">
            <span class="glimmer-text">Fregi</span> Ardika Setyawan
          </h1>
          <div class="sub-title-container">
            <div class="sub-title-wrapper">
              <span class="sub-title-item">Web Developer</span>
              <span class="sub-title-item">FrontEnd Web Developer</span>
              <span class="sub-title-item">Editor dan Digital</span>

              <span class="sub-title-item">Web Developer</span>
            </div>
          </div>
          <div class="btn-group">
            <button @click="showCvVerify = true" class="btn-outline">
              Download CV
            </button>
          </div>


          <!-- MODAL VERIFIKASI CV -->
          <transition name="fade">
            <div v-if="showCvVerify" class="cv-modal-overlay" @click.self="showCvVerify = false">
              <div class="cv-modal animate-pop">
                <div class="modal-handle"></div>
                <h3>Security Verification</h3>
                <p>Untuk alasan keamanan, masukkan kode akses untuk mengunduh CV.</p>
                <p class="hint">Hint: Nama panggilan saya (Huruf Kecil)</p>

                <input type="text" v-model="cvCode" placeholder="Masukkan kode..." class="input-verify">

                <div class="modal-actions">
                  <button @click="verifyAndDownload" class="btn-download-now">
                    Verify & Download
                  </button>
                </div>
              </div>
            </div>
          </transition>

          
          <!-- MODAL SUCCESS DOWNLOAD -->
          <transition name="fade">
            <div v-if="showSuccess" class="cv-modal-overlay">
              <div class="success-card animate-pop">
                <div class="icon-circle">
                  <i class='bx bx-check-shield'></i>
                </div>
                <h3>Izin Diberikan</h3>
                <p>CV sedang diunduh.</p>

                <button @click="showSuccess = false" class="btn-ok">Selesai</button>
              </div>
            </div>
          </transition>

          <!-- MODAL ERROR -->
          <transition name="fade">
            <div v-if="showError" class="cv-modal-overlay" @click.self="showError = false">
              <div class="error-card animate-pop">
                <div class="icon-circle-error">
                  <i class='bx bx-lock-alt'></i>
                </div>
                <h3>Akses Masuk Salah</h3>
                <p>Mohon maaf, kode verifikasi yang Anda masukkan tidak valid. Silahkan Coba Lagi!</p>

                <div class="modal-actions">
                  <button @click="showError = false; showCvVerify = true" class="btn-retry">Coba Lagi</button>
                  <button @click="showError = false" class="btn-cancel">Batal</button>
                </div>
              </div>
            </div>
          </transition>

        </div>

        <!-- Social Sidebar Left -->
        <div class="social-sidebar">
          <a href="https://github.com/ardksfs"><i class="bx bxl-github"></i></a>
          <a href="https://www.instagram.com/ardksfs_/"><i class="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com/in/fregi-ardika-setyawan-4a8bb0381/"><i class="bx bxl-linkedin-square"></i></a>
        </div>

        <!-- Scroll Indicator Right -->
        <div class="scroll-indicator">
          <span>Scroll down</span>
          <i class="bx bx-mouse"></i>
        </div>
      </section>

      <!-- ABOUT SECTION -->
      <section id="about" class="section-padding">
        <div class="section-title">
          <h2>Tentang Saya</h2>
          <p>Biodata singkat</p>
        </div>

        <div class="about-grid">
          <div class="profile-col">
            <img src="/assets/but1.webp" alt="Profile" class="profile-img" />
          </div>

          <div class="about-text">
            <p>
              Halo, nama saya <b>Fregi Ardika Setyawan</b> sering dipanggil
              <span class="accent-text">Regi</span>. Domisili saat ini di Blora
              - Jawa Tengah. Mengenal dunia teknologi sejak SD dan 
              mengenal percodingan sejak beranjak dari SMA & menekuni secara
              otodidak hingga sekarang menjadi freelance FrontEnd Web Developer
              kurang lebih sudah berjalan menuju 3 tahun.
            </p>

            <div class="about-btns">
              <!-- Link to Web Project -->
              <router-link to="/web-projects" class="btn-solid">
                Web Projects
              </router-link>

              <!-- Link to Desain Project -->
              <router-link to="/design-projects" class="btn-solid">
                Desain Project
              </router-link>
            </div>

            <div class="divider-nguli">
              <span class="divider-line"></span>
              <span class="divider-text">Alat Menguli</span>
              <span class="divider-line"></span>
            </div>

            <div class="tech-stack-full">
              <img src="/assets/nguli.webp" alt="Tech Stack" />
            </div>
          </div>
        </div>
      </section>

      <!-- EXPERIENCE SECTION  -->
      <section id="experience" class="section-padding dark-bg-alt">
        <div class="section-title">
          <h2>Pengalaman Saya</h2>
          <p>Beberapa pengalaman akademik dan profesional</p>
        </div>

        <div class="tabs-wrapper">
          <div class="tab-buttons">
            <button
              :class="{ active: activeTab === 'edu' }"
              @click="activeTab = 'edu'"
            >
              Edukasi
            </button>
            <button
              :class="{ active: activeTab === 'work' }"
              @click="activeTab = 'work'"
            >
              Pekerjaan
            </button>
          </div>

          <div class="tab-content-area">
            <transition name="fade-slide" mode="out-in">
              <!-- Content Edukasi -->
              <div v-if="activeTab === 'edu'" key="edu" class="timeline">
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <h3>Universitas Terbuka</h3>
                  <span class="date">2023 - On Going</span>
                  <p>Sistem Informasi | IPS 3.00</p>
                </div>
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <h3>SMA Negeri 2 Blora</h3>
                  <span class="date">2019 - 2022</span>
                  <p>Ilmu Pengetahuan Sosial | 86.53</p>
                </div>
              </div>

              <!-- Content Pekerjaan -->
              <div v-else key="work" class="timeline">
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <h3>CPR Moto Rembang</h3>
                  <span class="date">2024 - 2025</span>
                  <p>
                    Editor Foto - Ngetone foto prewedd & wedingg, kolase foto.
                  </p>
                </div>
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <h3>Junior FrontEnd Developer (WFH)</h3>
                  <span class="date">2023 - 2023</span>
                  <p>FrontEnd Developer fokus pada membuat ui/ux website.</p>
                </div>
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <h3>Admin Marketplace</h3>
                  <span class="date">2022 - 2023</span>
                  <p>Mengelola, Menjawab dan Memberikan pelayanan customers.</p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </section>

      <!-- KESEHARIAN  -->
      <section id="daily" class="section-padding">
        <div class="section-title">
          <h2>Keseharian Lainnya</h2>
          <p>Kegiatanku di waktu luang</p>
        </div>

        <div class="daily-grid">
          <!-- HANYA INSTAGRAM -->
          <a href="https://www.instagram.com/ardksfs_/" class="daily-card-link">
            <div class="daily-card">
              <div class="card-image-box">
                <img src="/assets/ig.webp" alt="Instagram" />
                <div class="card-overlay">
                  <i class="bx bxl-instagram"></i>
                </div>
              </div>
              <div class="card-info">
                <h3>Instagram</h3>
                <p>Daily Life & Konten Edukasi</p>
              </div>
            </div>
          </a>
        </div>

        <div class="donate-wrapper">
          <button @click="showDonate = true" class="btn-donate">
            Kamu ingin donate?
          </button>
        </div>

        <!-- (Pop-up) -->
        <transition name="fade">
          <div
            v-if="showDonate"
            class="donate-overlay"
            @click.self="showDonate = false"
          >
            <div class="donate-modal animate-pop">
              <div class="modal-handle"></div>

              <h3>Pilih platform</h3>
              <p>
                Kamu dapat melakukan donate dengan beberapa plateform berikut
              </p>

              <div class="platform-group">
                <a href="https://sociabuzz.com/" class="btn-platform">
                  Sociabuzz (International)
                </a>

                <a href="https://bagibagi.co/ardksfs_" class="btn-platform">
                  Bagibagi
                </a>
              </div>

            </div>
          </div>
        </transition>

        <div class="divider-container">
                <span class="divider-line"></span>
            </div>

        <!-- SECTION LOGO INFO BARU -->
        <section class="section-info">
          <div class="logo-info">
            <img src="https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21~bgwhite.svg" alt="Info Logo">

            <img src="https://www.vectorlogo.zone/logos/cloudflare/cloudflare-ar21~bgwhite.svg" alt="Info Logo">

            <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21~bgwhite.svg" alt="Info Logo">

            <img src="https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-ar21~bgwhite.svg" alt="Info Logo">

            <img src="https://www.vectorlogo.zone/logos/github/github-ar21~bgwhite.svg" alt="Info Logo">

            <img src="https://www.vectorlogo.zone/logos/google_fonts/google_fonts-ar21.svg" alt="Info Logo">

            <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" alt="Info Logo">

            <img src='https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg' alt="Info Logo">

          </div>
        </section>


        <div class="footer-bottom">
          <p>© Fregi Ardika Setyawan - 2026 All rights reserved</p>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import { ref } from "vue";

const showCvVerify = ref(false);
const showSuccess = ref(false);
const showError = ref(false);
const cvCode = ref("");

const verifyAndDownload = () => {
  if (cvCode.value.toLowerCase() === 'regi') {

    const link = document.createElement('a');
    link.href = '/assets/FREGI ARDIKA S CV.pdf';
    link.download = 'FREGI ARDIKA SETYAWAN CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showCvVerify.value = false;
    cvCode.value = "";
    showSuccess.value = true;

    setTimeout(() => {
    showSuccess.value = false;
    }, 4000);

  
  } else {
    showCvVerify.value = false;
    showError.value = true;
    cvCode.value = ""; 
  }
};

const activeTab = ref("edu");
const showDonate = ref(false);
</script>

<style scoped>
/* CSS VARIABLES */
:host {
  --primary-blue: #38bdf8;
  --bg-dark: #060b13;
  --bg-accent: #0a121e;
  --text-gray: #94a3b8;
}

.portfolio-container {
  --background: #060b13;
}

/* HERO SECTION */
.hero-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  padding: 0 20px;
}

.top-logo {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}
.top-logo img {
  height: 60px;
}

.glow-overlay {
  position: absolute;
  width: 50vw;
  height: 50vw;
  background: radial-gradient(
    circle,
    rgba(56, 189, 248, 0.1) 0%,
    rgba(6, 11, 19, 0) 70%
  );
  pointer-events: none;
  z-index: 0;
}

.content-wrapper {
  z-index: 1;
}

.intro-text {
  color: #ffff;
  font-size: 1.1rem;
  margin-bottom: -20px;
}

.main-name {
  font-size: clamp(2rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  color: white;
}

.glimmer-text {
  animation: glimmerEffect 4s linear infinite;
}

@keyframes glimmerEffect {
  0%,
  100% {
    color: #ffffff;
    text-shadow: 0 0 0px transparent;
  }

  50% {
    color: #38bdf8;
    text-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
  }
}

.sub-title-container {
  height: 24px; 
  overflow: hidden;
  margin-top: 15px;
}

.sub-title-wrapper {
  display: flex;
  flex-direction: column;
  animation: slideSimple 9s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
}

.sub-title-item {
  height: 24px;
  line-height: 24px;
  color: #38bdf8;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.9rem;
  font-weight: 400;
  display: block;
  white-space: nowrap;
}

@keyframes slideSimple {
  0%, 28% {
    transform: translateY(0);
  }
  33%, 61% {
    transform: translateY(-24px);
  }
  66%, 94% {
    transform: translateY(-48px);
  }
  100% {
    transform: translateY(-72px);
  }
}
.btn-outline {
  margin-top: 40px;
  display: inline-block; 
  text-decoration: none;  
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 14px 35px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
  text-align: center;
}

.btn-outline:hover {
  background: white;
  color: #060b13;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

/* OVERLAY */
.cv-modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30000;
  padding: 20px;
}

/* BOX MODAL */
.cv-modal {
  background: #0a121e;
  width: 100%;
  max-width: 400px;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid rgba(56, 189, 248, 0.3);
  text-align: center;
}

.cv-modal h3 { color: #38bdf8; margin-bottom: 10px; font-weight: 700; }
.cv-modal p { color: #94a3b8; font-size: 0.85rem; margin-bottom: 5px; }
.hint { font-style: italic; opacity: 0.6; margin-bottom: 20px !important; }

/* INPUT FIELD */
.input-verify {
  width: 100%;
  background: #060b13;
  border: 1px solid #1e293b;
  padding: 12px;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  outline: none;
}
.input-verify:focus { border-color: #38bdf8; box-shadow: 0 0 10px rgba(56, 189, 248, 0.2); }

/* BUTTON */
.btn-download-now {
  width: 100%;
  background: #38bdf8;
  color: #000;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: 800;
  cursor: pointer;
  transition: 0.3s;
}
.btn-download-now:hover { background: #fff; transform: translateY(-2px); }

/* SUCCESS CARD STYLE */
.success-card {
  background: #0a121e;
  width: 100%;
  max-width: 350px;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #10b981; 
  text-align: center;
  box-shadow: 0 0 30px rgba(16, 185, 129, 0.2);
}

.icon-circle {
  width: 60px;
  height: 60px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.icon-circle i {
  font-size: 2.5rem;
  color: #10b981;
  animation: pulseGreen 2s infinite;
}

.success-card h3 {
  color: #10b981;
  font-weight: 700;
  margin-bottom: 10px;
}

.success-card p {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 25px;
}

.btn-ok {
  width: 100%;
  background: #10b981;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

.btn-ok:hover {
  background: #fff;
  color: #10b981;
  transform: scale(1.05);
}

@keyframes pulseGreen {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* ERROR CARD STYLE */
.error-card {
  background: #0a121e;
  width: 100%;
  max-width: 380px;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #ef4444; 
  text-align: center;
  box-shadow: 0 0 30px rgba(239, 68, 68, 0.15);
}

.icon-circle-error {
  width: 60px;
  height: 60px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.icon-circle-error i {
  font-size: 2.2rem;
  color: #ef4444;
}

.error-card h3 {
  color: #ef4444;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.error-card p {
  color: #94a3b8;
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 30px;
}

/* BUTTONS */
.modal-actions {
  display: flex;
  gap: 10px;
}

.btn-retry {
  flex: 2;
  background: #ef4444;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

.btn-retry:hover {
  background: #fff;
  color: #ef4444;
}

.btn-cancel {
  flex: 1;
  background: transparent;
  color: #94a3b8;
  border: 1px solid #1e293b;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-cancel:hover {
  background: rgba(255,255,255,0.05);
  color: #fff;
}

/* SOCIAL SIDEBAR */
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

/* SCROLL INDICATOR */
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

/* About */
.section-padding {
  padding: 80px 12%;
  background: #060b13;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 2.2rem;
  color: #38bdf8;
  margin: 0;
}

.section-title p {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-top: 5px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 50px;
  align-items: center;
}

.image-frame {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  border: none;
}

.profile-img {
  width: 100%;
  display: block;
  transition: 0.5s ease;
}

.profile-img:hover {
  filter: grayscale(0%);
}

.about-text p {
  color: #94a3b8;
  line-height: 1.8;
  font-size: 1rem;
  font-weight: 700;
}

.accent-text {
  color: #facc15;
  font-weight: 700;
  font-size: 1rem;
}

.about-btns {
  margin: 30px 0;
  display: flex;
  gap: 15px;
}

.btn-solid {
  flex: 1;
  background: #1e293b;
  border: none;
  color: white;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 800;
  transition: 0.3s;
  display: inline-block; 
  text-decoration: none; 
  text-align: center;
}

.btn-solid:hover {
  background: #38bdf8;
  color: #000;
}

.divider-nguli {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 30px 0 20px 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: rgba(148, 163, 184, 0.2);
}

.divider-text {
  color: #94a3b8;
  font-size: 0.8rem;
  white-space: nowrap;
}
.tech-stack-full {
  text-align: center;
}

.tech-stack-full img {
  width: 100%;
  max-width: 400px; 
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.2));
}

@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .about-btns {
    flex-direction: column;
  }

  .profile-img {
    margin: 0 auto;
    max-width: 300px;
  }
}

/* EXPERIENCE TABS */
.dark-bg-alt {
  background: var(--bg-accent);
}

.tabs-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
  background: #111b2b;
  padding: 8px;
  border-radius: 50px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.tab-buttons button {
  padding: 10px 35px;
  border: none;
  background: transparent;
  color: #94a3b8;
  border-radius: 40px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.4s;
}

.tab-buttons button.active {
  background: white;
  color: #060b13;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

/* TIMELINE STYLES */
.timeline {
  border-left: 2px solid #1e293b;
  padding-left: 40px;
  position: relative;
}

.timeline-item {
  margin-bottom: 50px;
  position: relative;
}

.timeline-dot {
  position: absolute;
  left: -51px;
  top: 5px;
  width: 20px;
  height: 20px;
  background: #38bdf8;
  border-radius: 50%;
  border: 4px solid #060b13;
  box-shadow: 0 0 10px #38bdf8;
}

.timeline-item h3 {
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: #94a3b8;
}

.timeline-item .date {
  color: #38bdf8;
  font-size: 0.85rem;
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
}

.timeline-item p {
  color: #94a3b8;
}

/*  KESEHARIAN  */
.daily-grid {
  display: flex;             
  justify-content: center;  
  max-width: 1200px;
  margin: 50px auto 0;
  padding: 0 20px;
}

.daily-card-link {
  width: 100%;
  max-width: 850px;        
  text-decoration: none !important; 
  color: inherit; 
}


.card-image-box {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: 0.4s;
  aspect-ratio: 16 / 9; 
}

.card-image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.6s;
}

.daily-card:hover .card-image-box {
  border-color: #38bdf8;
  box-shadow: 0 10px 40px rgba(56, 189, 248, 0.15);
}

.daily-card:hover img {
  transform: scale(1.03);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(56, 189, 248, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.4s;
}
.card-overlay i {
  font-size: 3rem;
  color: white;
}
.daily-card:hover .card-overlay {
  opacity: 1;
}

.card-info {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 15px 0;
}

.card-info h3 {
  color: #38bdf8; 
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
}

.card-info p {
  color: #ffffff; 
  font-size: 0.95rem;
  margin: 0;
  font-weight: 400;
  opacity: 0.9;
}
.daily-card-link {
  text-decoration: none !important; 
  color: inherit; 
}
.card-info h3, .card-info p {
  text-decoration: none !important;
}
.donate-wrapper {
  text-align: center;
  margin-top: 60px;
}

.btn-donate {
  display: inline-block;
  padding: 12px 35px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 50px;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  background: rgba(15, 23, 42, 0.6);
  transition: 0.3s;
}

.btn-donate:hover {
  border-color: #38bdf8;
  color: #fff;
  background: rgba(56, 189, 248, 0.05);
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

/* FOOTER */
.footer-bottom {
  margin-top: 80px;
  text-align: center;
  color: #64748b;
  font-size: 0.85rem;
  padding-bottom: 30px;
}

/* ANIMATIONS */
.animate-float {
  animation: floating 5s ease-in-out infinite;
}

@keyframes floating {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

/* RESPONSIVE */
@media (max-width: 850px) {
  .daily-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .card-info {
    flex-direction: row; 
  }
}

@media (max-width: 480px) {
  .card-info {
    flex-direction: column; 
    align-items: flex-start;
    gap: 5px;
  }
}
/* DONATE */
.donate-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20000;
  padding: 20px;
}

.donate-modal {
  background: #0a121e; 
  width: 100%;
  max-width: 550px;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.modal-handle {
  width: 50px;
  height: 4px;
  background: #ffffff;
  border-radius: 10px;
  margin: -10px auto 25px;
  opacity: 0.8;
}

.donate-modal h3 {
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.donate-modal p {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 30px;
}

.platform-group {
  display: flex;
  gap: 15px;
}

.btn-platform {
  flex: 1;
  background: #1e293b; 
  color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-platform:hover {
  background: #38bdf8;
  color: #000000;
}

.section-info {
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-wrapper {
  text-align: center;
}

.info-label {
  color: #38bdf8;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 25px;
  font-weight: 600;
  opacity: 0.8;
}

.logo-info {
  display: flex;
  justify-content: center;
  gap: 50px; 
  align-items: center;
}

.logo-info img {
  height: 40px;
  width: auto;
  filter: grayscale(1) brightness(0.8);
  opacity: 0.4;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-info img:hover {
  filter: grayscale(0) brightness(1.2) drop-shadow(0 0 15px rgba(56, 189, 248, 0.6));
  opacity: 1;
  transform: translateY(-5px) scale(1.05);
}

@media (max-width: 768px) {
  .logo-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;
    justify-items: center;
    padding: 0 15px;
  }

  .logo-info img {
    height: 28px;
    max-width: 130px;
  }
}
/* --- ANIMATIONS --- */
.animate-pop {
  animation: popUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes popUp {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .image-frame {
    max-width: 300px;
    margin: 0 auto;
  }
  .about-btns,
  .tech-icons-row {
    justify-content: center;
  }

  .donate-modal {
    padding: 25px 20px;
  }
  .platform-group {
    flex-direction: column; 
  }

  .social-sidebar {
    display: flex !important;
    left: 15px;
    bottom: 25px;
    gap: 15px;
  }
  .social-sidebar i {
    font-size: 1.1rem;
    background: rgba(6, 11, 19, 0.5);
    padding: 5px;
    border-radius: 5px;
  }
  .scroll-indicator {
    display: flex !important;
    right: 15px;
    bottom: 25px;
  }
  .scroll-indicator span {
    font-size: 0.55rem;
    letter-spacing: 1px;
  }
  .scroll-indicator i {
    font-size: 1.2rem;
  }
}
</style>
