<template>
  <div class="Table">
    <div v-for="ii in getOrders" :key="ii.id">
      {{ ii }}
      <br>
      <hr>
    </div>

    <b-alert show>Default Alert</b-alert>

    <div v-for="i in getRoomtypes" :key="i.id" >
      {{i}}
      <br>
      <hr>
    </div>
    <b-alert show>Default Alert</b-alert>

<!--    <div v-for="i in addDays()" :key="i" >-->
<!--      {{i}}-->
<!--      <br>-->
<!--      <hr>-->
<!--    </div>-->



  </div>
</template>

<script>

import {mapGetters} from "vuex"
import {addDays} from "../components/date"

// let addDays;
export default {
  name: 'Table',
  data(){
    return{
      datesCollections:[]
    }
  },
  computed: mapGetters(["getOrders","getRoomtypes"]),
  async mounted() {
    this.$store.dispatch('fetchOrders'),
    this.$store.dispatch('fetchRoomTypes')
  },
  components: {
  },
  methods: {
    addDays
  }
}


</script>




