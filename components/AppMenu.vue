<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/"><AppLogo /></nuxt-link>
      </li>
      <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
      <li><nuxt-link to="/cart">Cart</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
import AppLogo from "@/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  }
};
</script>

<style lang="scss" scoped></style>
