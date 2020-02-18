<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>就活生向け会社情報閲覧サイト</h1>
        <p>就活生向け会社情報閲覧サイトをご利用の方は、Googleアカウントでログインしてください。</p>
      </v-flex>

      <v-flex xs12 mt-5>
        <v-btn color='info' @click="login">Googleアカウントでログイン</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['login'])
  }
}
</script>
