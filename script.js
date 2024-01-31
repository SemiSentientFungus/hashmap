function HashMap(){
    
    
    const hash = (key) =>{
        let hashCode = 1;
        const primeNum = 31;
        for (let i =0; i < key.length; i++)
        {
            hashCode = primeNum * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }

    return {hash};
}
