export default {
    actions: {
        async fetchOrders(ctx) {
            const order = await fetch("http://127.0.0.1:8000/api/order/")
            const orders = await order.json()
            ctx.commit('updateOrders', orders)
        },
        async fetchRoomTypes(ctx) {
            const roomtype = await fetch("http://127.0.0.1:8000/api/roomtype1/")
            const roomtypes = await order.json()
            ctx.commit('updateRoomType', roomtypes)
        }
    },
    state: {
        orders: [],
        roomtypes: []
    },
    mutations: {
        updateOrders(state, orders){
            state.orders = orders.results
        },
        updateRoomType(state, roomtypes){
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

