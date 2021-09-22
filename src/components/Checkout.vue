<template>
    <div class="checkout">
        <div class="table-area">
            <table>
                <tr>
                    <th>S.No</th>
                    <th>Seat No.</th>
                    <th>Price</th>
                </tr>
                <template v-for="(seat,index) of selectedSeats" :key="index">
                    <tr>
                        <td>{{index+1}}</td>
                        <td>{{seat.number}}</td>
                        <td>{{seat.price}}</td>
                    </tr>
                </template>
                <template v-if="!selectedSeats.length" >
                    <tr>
                        <td colspan="3">Please select a Seat.</td>
                    </tr>
                </template>
            </table>
        </div>
        <button class="checkout-button" :disabled="!selectedSeats.length">Proceed</button>
    </div>
</template>

<script>
    export default {
        computed:{
            selectedSeats(){
                return this.$store.getters.selectedSeats
            }
        }
    }
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #eeeeee;
}


.table-area {
    height: 393px;
    overflow: overlay;
}

.checkout {
    width: 100%;
    margin-left:50px;
    margin-right:50px;
}
.checkout-button {
    height: 32px;
    width: 80px;
    border-radius: 4px;
    background-color: #00897b;
    color: white;
    margin: 8px;
    font-weight: bold;
    border: none;
}

.checkout-button[disabled]{
background-color: grey;
}

@media screen and (max-width:700px) {
    .checkout{
        margin-top: 60px;
        margin-left:0px;
        margin-right:0px;
    }
}
</style>