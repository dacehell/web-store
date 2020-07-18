<template>
  <v-app-bar
    absolute
    dark
    shrink-on-scroll
    src="../assets/hero.jpg"
    scroll-target="#scrolling-techniques-2"
  >
    <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to right,#E2231A 38%, rgba(238,146,33,0.48)"
        ></v-img>
      </template>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-container style="height: 1000px;">
      <v-row align="center">
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="100"
          width="100"
          max-width="100"
          @click="$vuetify.goTo(0)"
        />

        <v-btn
          v-for="(link, i) in links"
          :key="i"
          v-bind="link"
          class="hidden-sm-and-down"
          text
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>

        <v-spacer />

        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />
      </v-row>
    </v-container>
  </v-app-bar>
  
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'AppBar',

    computed: {
      ...mapGetters(['links']),
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
      },
    },
  }
</script>
