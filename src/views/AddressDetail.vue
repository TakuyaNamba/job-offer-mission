<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>詳細情報</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="address.name" label="投稿者"></v-text-field>
               <v-text-field v-model="address.company" label="会社名"></v-text-field>
               <v-textarea readonly=ture, rows=10, v-model="address.info" label="情報"></v-textarea>
               <div class="text-center">
                 <v-btn @click="$router.push({ name: 'addresses' })">一覧に戻る</v-btn>
               </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
      if (!this.$route.params.address_id) return

      const address = this.$store.getters.getAddressById(this.$route.params.address_id)
      if (address) {
          this.address = address
      } else {
          this.$router.push({ name: 'addresses'})
      }
  },
  data () {
    return {
      headers: [
        { text: '投稿者', value: 'name' },
        { text: '会社名', value: 'company' },
        { text: '情報', value: 'info' },
        { text: '操作', value: 'action', sortable: false }
      ],
      address: []
    }
  },
  methods: {
    deleteConfirm (id) {
      if (confirm('削除してよろしいですか？')) {
        this.deleteAddress({ id })
      }
    },
    ...mapActions(['deleteAddress'])
  }
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>