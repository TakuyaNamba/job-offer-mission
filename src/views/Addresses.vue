<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>会社一覧</h1>
        <h1>{{addresses.length}}</h1>
      </v-flex>
 
      <v-flex xs12 mt-5 mr-5 text-right>
        <router-link :to="{ name: 'address_edit' }">
          <v-btn color="info">
            会社情報追加
          </v-btn>
        </router-link>
      </v-flex>
      <v-flex xs12 mt-3 justify-center>
        <v-data-table :headers='headers' :items='addresses'>
          <template v-slot:item.info="{ item }">
            {{ item.info.substring(0,10)+"..." }}
          </template>

          <template v-slot:item.action="{ item }">
            <router-link :to="{ name: 'address_edit', params: { address_id: item.id }}">
              <v-icon small class="mr-2">mdi-pencil</v-icon>
            </router-link>
            <v-icon small class="mr-2" @click="deleteConfirm(item.id)">mdi-delete</v-icon>
          </template>

          <template v-slot:item.detail="{ item }">
            <router-link :to="{ name: 'address_detail', params: { address_id: item.id}}">
              <v-icon small class="mr-2">mdi-magnify</v-icon>
            </router-link>
          </template>
          
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    this.addresses = this.$store.state.addresses
  },
  data () {
    return {
      headers: [
        { text: '詳細表示', value: 'detail', sortable: false},
        { text: '投稿者', value: 'name' },
        { text: '会社名', value: 'company' },
        { text: '情報', value: 'info' },
        { text: '操作', value: 'action', sortable: false }
      ],
      addresses: []
    }
  },
  methods: {
    deleteConfirm (id) {
      if (confirm('削除してよろしいですか？')) {
        this.deleteAddress({ id })
      }
    },
    ...mapActions(['deleteAddress'])
  },  
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>

