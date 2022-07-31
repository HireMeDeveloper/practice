type Employee = {
    readonly id: number,
    name: string,

    retire: (date: Date) => void;
}

function kgToLbs(weight: number | string): number{
    //narrowing
    if(typeof weight === 'number'){
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}
