export class Invoice {
    // Initialize The Values In The Constructor not in the beginning so each obj can have a diff client/amount/details
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    message() {
        return `${this.client} ows $${this.amount} for ${this.details}`;
    }
}
