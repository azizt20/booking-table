<template>
  <div class="Table">
    <h2 v-for="i in getOrders" :key="id">
      {{ i.id }}
    </h2>
    <h1 v-for="i in getRoomtypes" :key="id" >
      {{i.id}}

    </h1>
  </div>
</template>

<script>

import {mapGetters} from "vuex"

export default {
  name: 'Table',
  computed: mapGetters(["getOrders", "getRoomtypes"]),
  // mapGetters(["getRoomtypes"]),
  async mounted() {
    this.$store.dispatch('fetchOrders'),
    this.$store.dispatch('fetchRoomTypes')
  },
  components: {

  }
}


</script>




