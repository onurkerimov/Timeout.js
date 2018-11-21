/*
 * Timeout.js v0.1
 * Copyright (c) 2018 Onur Kerimov
 * http://github.com/onurkerimov
 * Licensed under the MIT license
 */

Timeout = (function() {

    var Timeout = function() {
        this.timers = []
        this.i = 0
    }

    Timeout.prototype = {

        constructor: Timeout,   

        set: function(fn, time) {
            var self = this
            var j = this.i
            var t = setTimeout(function() {
                self.timers[j] = null
                fn.call(self)
            }, time)
            this.timers[this.i] = t
            this.i++
        },

        clear: function() {
            var self = this 
            var num = this.i
            for(j=0; j<=num; j++) {
                clearTimeout(self.timers[j])
                self.timers[j] = null
            }
        },

        done: function() {
            return this.timers.every(function(el) {
                return el === null
            })
        }
    }

    return Timeout
})();