<template>
 <v-app>
  <div>
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid fill-height align-start>
        <router-view/>
      </v-container>
    </v-content>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
