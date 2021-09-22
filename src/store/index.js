import { createStore } from "vuex";
import dbData from "../db.js";

let store = createStore(
    {
        state : function() {
            return {
                seats: {},
                selectedSeats:[],
            }
        },
        getters: {
            selectedSeats(state) {
                let values = Object.values(state.seats)
                return values.filter((value) => value.selected);
          }  
        },
        mutations: {
            updateSeats(state,data) {
                state.seats = data;
            },
            selectSeat(state, data) {
                state.seats[data]['selected'] = true;
            },
            unselectSeat(state, data) {
                state.seats[data]['selected'] = false;
            }
        },
        actions: {
            fetch(context) {
                context.commit('updateSeats', dbData);
            },
            selectSeat(context,data) {
                context.commit('selectSeat', data);
            },
            unselectSeat(context,data) {
                context.commit('unselectSeat', data);
            }
        }
    }
);

export default store;