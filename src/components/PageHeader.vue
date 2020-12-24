<template>
  <header class="header">
    <span class="header__logo">#movienow</span>
  </header>
</template>

<style lang="scss">
.header {
  margin-bottom: 40px;
  padding: 36px 10px 16px;
  color: #000;
  text-align: center;
  background-color: $header-background;
  box-shadow: 0 8px 7px rgba(#000, 0.28);
  &__logo {
    font-size: 2rem;
    line-height: 1;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.21em;
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
}
</style>
