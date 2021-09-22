<template>
    <div class="seat-layout">
        <div class="seating-room">
            <template v-for="(seatDetails,seatId,index) in availableSeats" :key="seatId">
            <seat :number="seatId" :isSelected="seatDetails.selected" :type="seatDetails.type"></seat>
            <template v-if="canAppendEmpty(index)">
                <empty-space></empty-space>
            </template>
            </template>
        </div>
        <div>COCKPIT</div>
    </div>
</template>

<script>
import EmptySpace from './EmptySpace.vue';
import Seat from './Seat.vue'
export default {
  components: { Seat, EmptySpace },
    computed:{
        availableSeats(){
            return this.$store.state.seats;
        }
    },
    methods:{
        canAppendEmpty(index){
            // append emptySpace component after every 3 seats.
            return !((index+1) % 3) && ((index+1) % 6);
        }
    }
}
</script>

<style scoped>

.seat-layout{
    width: 100%;
    background-color: #fffde7;
}

.seating-room{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 3fr 1fr 1fr 1fr;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    padding: 16px;
    border-bottom: 1px solid #cebe15 ;
}


</style>