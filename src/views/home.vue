<template>
    <div class="home-container">
      <div class="home-container1">
        <div class="home-card">
          <h1 class="home-heading">
            <span>Nakama Tracker</span>
            <br />
            <br />
          </h1>
          <div class="home-container2"> 
            <div>
            <router-link to="/search" class="home-navlink">
              <span>Nakama</span>
              <br />
            </router-link>
          </div>
            <router-link to="/profile" class="home-navlink">
              <span>To Do</span>
              <br />
            </router-link>
            <router-link to="/login" class="home-navlink">
              <span>Dates</span>
              <br />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import router from '../router';
  
  </script>
  
  <style scoped>
  .home-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home-container1 {
    flex: 1;
    width: 100%;
    height: 931px;
    display: flex;
    position: relative;
    max-width: 100%;
    min-height: 85vh;
    align-items: center;
    flex-direction: column;
    background-size: contain;
    justify-content: center;
    background-image: url("/playground_assets/3%20-%20logo%20nakama%20tracker%20digital%20art-1500w.png");
    background-position: center;
  }
  .home-card {
    width: 381px;
    height: 355px;
    display: flex;
    z-index: 0;
    position: relative;
    align-self: center;
    box-shadow: 0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important;
    align-items: center;
    border-radius: var(--dl-radius-radius-round);
    flex-direction: column;
    backdrop-filter: saturate(200%) blur(30px);
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.07);
  }
  .home-heading {
    height: 64px;
    align-self: center;
    font-style: normal;
    margin-top: -5rem;
    text-align: center;
    font-weight: 800;
    background-image: linear-gradient(310deg, rgb(121, 40, 202), rgb(255, 0, 128));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .home-container2 {
    width: 100%;
    height: 14px;
    display: flex;
    align-self: stretch;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .home-link {
    color: #ededf5;
    font-size: 1.5rem;
    align-self: center;
    font-style: normal;
    text-align: center;
    font-weight: 800;
    margin-left: var(--dl-space-space-doubleunit);
    margin-right: var(--dl-space-space-doubleunit);
  }
  .home-navlink {
    color: #ededf5;
    font-size: 1.5rem;
    align-self: center;
    font-style: normal;
    text-align: center;
    font-weight: 800;
    text-transform: capitalize;
    text-decoration: none;
  }
  .home-link1 {
    color: #ededf5;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
  }
  @media(max-width: 991px) {
    .home-container1 {
      max-width: 960px;
    }
    .home-card {
      width: 385px;
    }
  }
  @media(max-width: 767px) {
    .home-card {
      align-items: center;
    }
  }
  @media(max-width: 479px) {
    .home-card {
      padding: var(--dl-space-space-unit);
    }
  }
  </style>
  