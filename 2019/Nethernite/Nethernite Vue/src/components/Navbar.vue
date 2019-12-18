<template>
  <header class="header">
    <div class="header-main">
      <nav class="header__nav nav">
        <ul class="nav__list">

          <li class="nav__item nav__selected">
            <a class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a class="nav__link">Marketplace</a>
          </li>
          <li class="nav__item">
            <a class="nav__link">Booster packs</a>
          </li>
          <li class="nav__item nav__item-button">
            <button class="nav__button">Play</button>
          </li>
        </ul>
      </nav>
      
      <div class="user-section">
        <div class="user-section__icons">
          <div class="user-section__icons-trophy">
            <div class="icons-trophy-wrap active-icons-trophy">
              <img class="icons-trophy" src="../assets/images/trophy.png" />
            </div>
          </div>
          <div class="user-section__icons-notification">
            <div class="icons-notification-wrap active-icons-notification">
              <img class="icons-notification" src="../assets/images/notification.svg" />
            </div>
          </div>
        </div>
        <div class="user-section__gems">
          <div class="user-section__gems-gem"></div>
          <div class="user-section__gems-count">142</div>
        </div>
        <div class="user-section__profile active-profile">
          <div class="profile-status">
            <div class="profile-status__point"></div>
          </div>
          <img class="profile-picture" src="../assets/images/user-icon.png" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped src="../assets/styles/Navbar.css">
</style>