"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubSubService = void 0;
class PubSubService {
    constructor() {
        this.subscribers = {};
        this.subscribers = {};
    }
    subscribe(type, subscriber) {
        if (!this.subscribers[type]) {
            this.subscribers[type] = [];
        }
        this.subscribers[type].push(subscriber);
    }
    publish(event) {
        const type = event.type();
        if (!this.subscribers[type])
            return;
        this.subscribers[type].forEach((subscriber) => {
            subscriber.handle(event);
        });
    }
    unsubscribe(type, subscriber) {
        const subscribers = this.subscribers[type];
        if (!subscribers)
            return;
        this.subscribers[type] = subscribers.filter((s) => s !== subscriber);
    }
}
exports.PubSubService = PubSubService;
