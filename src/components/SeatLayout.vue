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
        <div class="seat-legend">
            <span class="seat-legend-item available">available</span>
            <span class="seat-legend-item restricted">restricted</span>
            <span class="seat-legend-item blocked">blocked</span>
            <span class="seat-legend-item selected">selected</span>
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

.seat-legend {
    display: flex;
}

.seat-legend-item{
    width: 100%;
    padding: 8px;
    margin: 8px;
    border: 1px solid rgb(207, 216, 129);
    border-radius: 8px;
}

.seat-legend-item.available{
background-color: white;
}
.seat-legend-item.restricted{
    background-color: white;
    text-decoration: line-through;
}
.seat-legend-item.blocked{
    background-color: #9fa8da;
    color: white;
}
.seat-legend-item.selected{
    background-color: rgb(35, 32, 179);
    color: white;
}
</style>