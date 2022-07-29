export default class ASCII {
    constructor (
        string, code
    ) {
        this.string = string,
        this.code = code
    }

    get getArray() {
        return this.code
    }

    get getCode() {
        let nome = this.string
        let charCodeArr = [];
        
        for(let i = 0; i < nome.length; i++){
            let code = nome.charCodeAt(i);
            charCodeArr.push(code);
            console.log(charCodeArr[i])
        }
        
        return this.code = charCodeArr;
    }
}