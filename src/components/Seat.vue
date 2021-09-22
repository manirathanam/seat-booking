<template>
    <div class="seat" :class="seatClasslist" @click="handleClick">
        <span>{{number}}</span>
    </div>
</template>

<script>
    export default {
        props:{
            number:{
                type:String,
                required:true,
            },
            type:{
                type:String,
                required:true,
            },
            isSelected:{
                type:Boolean,
                required:true
            }
        },
        computed:{
            seatClasslist(){
                return {
                    'restricted': this.type === "restricted",
                    'available':this.type !== "restricted",
                    'selected':this.isSelected,
                }
            }
        },
        methods:{
            handleClick(){
                // do nothing on restricted seats.
                if(this.type === "restricted"){
                    return;
                }
                let currentState = !this.isSelected;
                if(currentState){
                    this.$store.dispatch('selectSeat',this.number);
                }else {
                    this.$store.dispatch('unselectSeat',this.number)
                }
            }
        }
        
    }
</script>

<style>

.seat {
    width: 100%;
    height: 36px;
    border: 1px solid rgb(207, 216, 129);
    cursor: pointer;
    line-height: 36px;
    border-radius: 8px;
    user-select: none;
    min-width: 36px;
}

.seat.restricted {
    cursor: not-allowed;
    background-color: white;
    text-decoration: line-through;
}
.seat.available {
    background-color: white;
    
}
.seat.selected {
    background-color: rgb(35, 32, 179);
    color: white;
}
</style>