<template>
    <div class="chatbot-wrapper">
        <!-- Bubble Notifikasi  -->
        <transition name="fade-notif">
            <div v-if="showNotif && !isOpen" class="chat-notif-bubble">
                <span>Hi, klik aku dong!</span>
                <div class="bubble-arrow"></div>
            </div>
        </transition>

        <!-- Trigger Bot  -->
        <div class="chat-trigger" @click="toggleChat">
            <img src="/assets/bot.webp" alt="Bot Logo" class="bot-img-animate" :class="{ 'active-logo': isOpen }">
        </div>

        <!-- Jendela Chat -->
        <transition name="chat-anim">
            <div v-if="isOpen" class="chat-window">
                <!-- Header -->
                <div class="chat-header">
                    <!-- Tombol Kiri: Minimize  -->
                    <button @click="minimizeChat" class="head-btn" title="Minimize">
                        <i class='bx bx-chevron-down'></i>
                    </button>

                    <div class="header-center">
                        <img src="/assets/bot.webp" class="mini-logo">
                        <span class="assistant-name"><span class="glimmer-r">R</span>obo chat</span>
                    </div>

                    <!-- Tombol Kanan: Close  -->
                    <button @click="closeAndReset" class="head-btn close-btn" title="Reset & Close">
                        <i class='bx bx-x'></i>
                    </button>
                </div>

                <!-- Body Chat -->
                <div class="chat-body" ref="chatContainer">
                    <div v-for="(msg, index) in chatHistory" :key="index" :class="['message-row', msg.type]">
                        <div class="bubble">
                            <p v-html="msg.text"></p>
                        </div>
                    </div>

                    <div v-if="isTyping" class="message-row bot">
                        <div class="bubble typing">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>

                <!-- Footer Options -->
                <div class="chat-footer">
                    <div class="options-container">
                        <button v-for="opt in currentOptions" :key="opt.id" @click="handleOption(opt)" class="opt-btn">
                            {{ opt.label }}
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted } from 'vue';

const isOpen = ref(false);
const isTyping = ref(false);
const showNotif = ref(false);
const chatContainer = ref(null);
const chatHistory = reactive([]);
const currentOptions = ref([]);

const chatTree = {
    start: {
        text: "Selamat datang. Saya R-bot, asisten virtual yang akan membantu Anda memahami layanan dan prosedur kerja sama kami. Apa yang bisa saya bantu hari ini?",
        options: [
            { id: 'services', label: 'Our Services', next: 'services' },
            { id: 'hire', label: 'Hire Me', next: 'hire' },
            { id: 'contact', label: 'Contact Me', next: 'contact' }
        ]
    },
    services: {
        text: "Berikut adalah bidang keahlian utama yang saya tawarkan:",
        options: [
            { id: 'web_dev', label: 'Web Development', next: 'web_dev' },
            { id: 'landing', label: 'Landing Page', next: 'landing' },
            { id: 'design', label: 'Design Grafis', next: 'design' },
            { id: 'start', label: 'Kembali', next: 'start' }
        ]
    },
    web_dev: {
        text: "Layanan mencakup pengembangan website performa tinggi dan optimasi SEO. Ingin mendiskusikan project Anda?",
        options: [
            { id: 'contact', label: 'Ya, Hubungi Sekarang', next: 'contact' },
            { id: 'services', label: 'Kembali', next: 'services' }
        ]
    },
    landing: {
        text: "Pembuatan Landing Page responsif untuk meningkatkan konversi brand Anda.",
        options: [
            { id: 'contact', label: 'Hubungi Saya', next: 'contact' },
            { id: 'services', label: 'Kembali', next: 'services' }
        ]
    },
    design: {
        text: "Visualisasi identitas brand, konten media sosial, hingga desain UI/UX profesional.",
        options: [
            { id: 'contact', label: 'Konsultasi Desain', next: 'contact' },
            { id: 'services', label: 'Kembali', next: 'services' }
        ]
    },
    hire: {
        text: "Saya terbuka untuk kolaborasi pada project baru. Mari diskusikan rencana Anda lebih lanjut.",
        options: [
            { id: 'contact', label: 'Hubungi untuk Kerja Sama', next: 'contact' },
            { id: 'start', label: 'Kembali ke Menu Utama', next: 'start' }
        ]
    },
    contact: {
        text: `Silakan hubungi saya melalui platform di bawah ini. Klik alamat email untuk menyalin otomatis:<br><br>
        <div class="contact-list">
            <a href="https://wa.me/6285728326976" target="_blank" class="contact-item">
                <img src="https://www.vectorlogo.zone/logos/whatsapp/whatsapp-tile.svg" alt="WA">
                <span>+62 857-2832-6976</span>
            </a>
            <div class="contact-item" onclick="copyEmail('fregidikasetiawan@gmail.com')">
                <img src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" alt="Mail">
                <span>fregidikasetiawan@gmail.com</span>
            </div>
        </div>`,
        options: [{ id: 'start', label: 'Kembali ke Menu Utama', next: 'start' }]
    }
};

onMounted(() => {
    window.copyEmail = (email) => {
        navigator.clipboard.writeText(email).then(() => {
            chatHistory.push({ type: 'bot', text: "✅ <b>Email berhasil disalin!</b>" });
            scrollToBottom();
        });
    };

    setInterval(() => {
        if (!isOpen.value) {
            showNotif.value = true;
            setTimeout(() => { showNotif.value = false; }, 4500);
        }
    }, 12000);
});

const toggleChat = () => {
    isOpen.value = true;
    showNotif.value = false;
    if (chatHistory.length === 0) {
        loadState('start');
    }
};

const minimizeChat = () => { isOpen.value = false; };

const closeAndReset = () => {
    isOpen.value = false;
    chatHistory.length = 0;
};

const handleOption = (opt) => {
    chatHistory.push({ type: 'user', text: opt.label });
    scrollToBottom();
    isTyping.value = true;
    currentOptions.value = [];
    setTimeout(() => {
        isTyping.value = false;
        loadState(opt.next);
    }, 800);
};

const loadState = (stateId) => {
    const state = chatTree[stateId];
    chatHistory.push({ type: 'bot', text: state.text });
    currentOptions.value = state.options;
    scrollToBottom();
};

const scrollToBottom = async () => {
    await nextTick();
    if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
};
</script>

<style scoped>
.chatbot-wrapper {
    position: fixed;
    right: 60px;
    bottom: 50px;
    z-index: 99999;
}

/* Notif Bubble */
.chat-notif-bubble {
    position: absolute;
    bottom: 85px;
    right: 10px;
    background: #38bdf8;
    color: #060b13;
    padding: 10px 18px;
    border-radius: 14px;
    font-size: 0.75rem;
    font-weight: 800;
    white-space: nowrap;
    box-shadow: 0 8px 20px rgba(56, 189, 248, 0.4);
    pointer-events: none;
}

.bubble-arrow {
    position: absolute;
    bottom: -6px;
    right: 25px;
    width: 12px;
    height: 12px;
    background: #38bdf8;
    transform: rotate(45deg);
}

/* Trigger Logo */
.chat-trigger {
    cursor: pointer;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bot-img-animate {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.4));
    animation: floatingBot 4s ease-in-out infinite;
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.chat-trigger:hover .bot-img-animate {
    transform: scale(1.15);
    filter: drop-shadow(0 0 15px #38bdf8);
}

.active-logo {
    transform: scale(0.7) translateY(20px);
    opacity: 0;
    pointer-events: none;
}

/* --- CONTACT LIST STYLE (DEEP FOR V-HTML) --- */
.bubble :deep(.contact-list) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 8px;
}

.bubble :deep(.contact-item) {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.05);
    padding: 8px 12px;
    border-radius: 10px;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.bubble :deep(.contact-item:hover) {
    background: rgba(56, 189, 248, 0.1);
    border-color: rgba(56, 189, 248, 0.3);
}

.bubble :deep(.contact-item img) {
    width: 20px !important;
    height: 20px !important;
    flex-shrink: 0;
}

.bubble :deep(.contact-item span) {
    font-size: 0.8rem;
    word-break: break-all;
}

/* Jendela Chat */
.chat-window {
    position: absolute;
    bottom: 20px;
    right: 0;
    width: 340px;
    height: 520px;
    background: #0a121e;
    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.8);
}

/* Header */
.chat-header {
    background: #1e293b;
    padding: 15px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-center {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    justify-content: center;
}

.mini-logo {
    width: 40px;
    height: auto;
}

.assistant-name {
    color: #fff;
    font-size: 0.95rem;
    font-weight: 700;
}

.glimmer-r {
    color: #38bdf8;
    animation: glimmerR 2s infinite alternate;
}

@keyframes glimmerR {
    0% {
        color: #38bdf8;
        text-shadow: 0 0 8px #38bdf8;
    }

    100% {
        color: #fff;
        text-shadow: 0 0 2px #fff;
    }
}

.head-btn {
    background: none;
    border: none;
    color: #94a3b8;
    font-size: 1.6rem;
    cursor: pointer;
    transition: 0.2s;
    display: flex;
}

.head-btn:hover {
    color: #38bdf8;
}

.close-btn:hover {
    color: #ef4444;
}

/* Chat Body */
.chat-body {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    scrollbar-width: none;
}

.chat-body::-webkit-scrollbar {
    display: none;
}

.message-row {
    display: flex;
    width: 100%;
    animation: slideIn 0.3s ease-out;
}

.message-row.bot {
    justify-content: flex-start;
}

.message-row.user {
    justify-content: flex-end;
}

.bubble {
    max-width: 88%;
    padding: 12px 16px;
    font-size: 0.85rem;
    line-height: 1.6;
}

.bot .bubble {
    background: #1e293b;
    color: #f1f5f9;
    border-radius: 4px 18px 18px 18px;
    border-left: 3px solid #38bdf8;
}

.user .bubble {
    background: #38bdf8;
    color: #060b13;
    border-radius: 18px 18px 4px 18px;
    font-weight: 600;
}

/* Typing */
.typing span {
    width: 6px;
    height: 6px;
    background: #38bdf8;
    border-radius: 50%;
    display: inline-block;
    margin: 0 2px;
    animation: bounce 1.3s infinite;
}

.typing span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing span:nth-child(3) {
    animation-delay: 0.4s;
}

/* Footer */
.chat-footer {
    padding: 15px;
    background: #060b13;
    border-top: 1px solid rgba(255, 255, 255, 0.03);
}

.options-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.opt-btn {
    background: rgba(56, 189, 248, 0.05);
    border: 1px solid rgba(56, 189, 248, 0.2);
    color: #38bdf8;
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
}

.opt-btn:hover {
    background: #38bdf8;
    color: #060b13;
    transform: translateY(-2px);
}

/* Animations */
@keyframes floatingBot {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-12px);
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounce {

    0%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-6px);
    }
}

.fade-notif-enter-active,
.fade-notif-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.fade-notif-enter-from,
.fade-notif-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

.chat-anim-enter-active,
.chat-anim-leave-active {
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.chat-anim-enter-from,
.chat-anim-leave-to {
    opacity: 0;
    transform: translateY(50px) scale(0.8);
}

/* MOBILE RESPONSIVE */
@media (max-width: 600px) {
    .chatbot-wrapper {
        right: 25px;
        bottom: 25px;
    }

    .bot-img-animate {
        width: 60px;
    }

    .chat-window {
        width: calc(100vw - 40px);
        height: 75vh;
        right: 0;
        bottom: 0;
    }

    .chat-notif-bubble {
        bottom: 75px;
        right: 0;
        font-size: 0.7rem;
    }
}
</style>