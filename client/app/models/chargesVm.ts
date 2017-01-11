export enum chargeType {
    none = 0,
    unexpected = 1,
    expected = 2
}

export enum unexpectedChargeType {
    none = 0,
    suply = 1, // fourniture
    article = 2,
    other = 3
}

export enum expectedChargeType {
    none = 0,
    doorkeeper = 1, 
    housekeeper = 2
}

export class baseCharge {
    _id: string;
    type: chargeType;
    typeKeys: string[];
    title: string;
    description: string;
    effectiveDate: Date;
    creationDate: Date;
    quantity: number;
    unitPrice: number;
    price: number;
    accounted: boolean;

    constructor() {
        var options = Object.keys(chargeType);
        this.typeKeys = options.slice(options.length / 2);
    }
}

export class expectedCharge extends baseCharge {
    subtype: expectedChargeType;
}

export class unexpectedCharge extends baseCharge {
    subtype: unexpectedChargeType;
}

export class ChargesVm {
    charges: baseCharge[];

    constructor(pCharges: baseCharge[]) {
        this.charges = pCharges;
    }
}