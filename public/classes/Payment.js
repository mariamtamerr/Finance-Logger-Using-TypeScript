export class Payment {
    // Initialize The Values In The Constructor not in the beginning so each obj can have a diff client/amount/details
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    message() {
        return `${this.recepient} ows $${this.amount} for ${this.details}`;
    }
}
