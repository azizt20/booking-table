export default {
    actions: {
        async fetchOrders(ctx) {
            const orders = await (await fetch("http://127.0.0.1:8000/api/order/")).json()
            ctx.commit('updateOrders', orders)
        },
        async fetchRoomTypes(ctx) {
            const roomtypes = await (await fetch("http://127.0.0.1:8000/api/roomtype1/")).json()
            ctx.commit('updateRoomTypes', roomtypes)
        },

    },
    state: {
        orders: [],
        roomtypes: []
    },
    mutations: {
        updateOrders(state, orders){
            state.orders = orders.results
        },
        updateRoomTypes(state, roomtypes){
            state.roomtypes = roomtypes.results
        }
    },
    getters: {
        getOrders(state) {
            return state.orders
        },
        getRoomtypes(state) {
            return state.roomtypes
        }
    }
}

