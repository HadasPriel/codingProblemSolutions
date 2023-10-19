
const EventEmitter = {
    listeners: {},

    emit: function (ev, ...args) {
        this.listeners[ev].forEach(func => func(...args))
        return true
    },

    on: function (ev, func) {
        if (this.listeners[ev]) this.listeners[ev].push(func)
        else this.listeners[ev] = [func]
        return this
    },

    off: function (ev, func) {
        this.listeners[ev] = this.listeners[ev]?.filter((currFunc) => currFunc !== func) || []
        return this
    },
}
