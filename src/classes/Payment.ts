import {hasFormatter} from '../interfaces/hasFormatter'

export class Payment implements hasFormatter {
    // class properties
    readonly recepient: string;
    private details: string;
    amount: number; // means public amount : ... but you don't have to write the public keyword cause it's the default

// Initialize The Values In The Constructor not in the beginning so each obj can have a diff client/amount/details
    constructor(recepient: string, details: string, amount: number) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }

    message() {
        return `${this.recepient} ows $${this.amount} for ${this.details}`;
    }

}
