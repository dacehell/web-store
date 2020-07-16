<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <App-bar></App-bar>
    <Drawer/>
      
    </v-app-bar>

    <v-content>
      
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';

export default {
  name: 'App',

  components: {
    AppBar,
    Drawer
  },

  data: () => ({
    //
  }),
};
</script>
