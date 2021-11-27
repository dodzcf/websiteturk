export const inc=(numm)=>{
    return {
        type: "INCREMENT",
        payload:numm
    }
}

export const dec=(number)=>{
    return {
        type: "DECREMENT",
        payload:number
    }
}