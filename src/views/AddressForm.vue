<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>会社情報編集</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="address.name" label="投稿者"></v-text-field>
               <v-text-field v-model="address.company" label="会社名"></v-text-field>
               <v-text-field v-model="address.info" label="情報"></v-text-field>
               <div class="text-center">
                 <v-btn @click="$router.push({ name: 'addresses' })">キャンセル</v-btn>
                 <v-btn color="info" class="ml-2" @click="submit">保存</v-btn>
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
      address: {}
    }
  },
  methods: {
    submit () {
      if (this.$route.params.address_id) {
          this.updateAddress({ id: this.$route.params.address_id, address: this.address })
      } else {
          this.addAddress(this.address)
      }

      this.$router.push({ name: 'addresses' })
      this.address = {}
    },
    ...mapActions(['addAddress', 'updateAddress'])
  }
}
</script>