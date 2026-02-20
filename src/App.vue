<template>
  <ion-app>
    <transition name="fade-opening">
      <div v-if="isLoading" class="opening-overlay">
        <div class="logo-wrapper">
          <img src="/assets/open.svg" class="logo-opening" alt="Logo Opening">
          <div class="shimmer-bar"></div>
        </div>
      </div>
    </transition>

    <ion-router-outlet />
    <ChatBot />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import ChatBot from './components/ChatBot.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2500);
});
</script>

<style>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #060b13;
  font-family: 'Poppins', sans-serif;
}

.opening-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: #060b13;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.logo-wrapper {
  position: relative;
  display: inline-block;
  line-height: 0; 
}

.logo-opening {
  height: 90px; 
  width: auto;
  filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.4));
}

.shimmer-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  -webkit-mask-image: url('/assets/open.svg');
  mask-image: url('/assets/open.svg');
  
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;

  background: linear-gradient(
    90deg,
    rgba(56, 189, 248, 0) 0%,
    rgba(56, 189, 248, 0.8) 50%,
    rgba(56, 189, 248, 0) 100%
  );

  background-size: 200% 100%;
  background-repeat: no-repeat;
  animation: shineMove 2s linear infinite;
}

@keyframes shineMove {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.fade-opening-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-opening-leave-to {
  opacity: 0;
  filter: blur(30px);
  transform: scale(1.1);
}
</style>