class HashMap{
    constructor(initialValue = 16){
        this.numBuckets = initialValue;
        this.buckets = new Array(this.numBuckets);
        this.bucketsLength = 0;
        this.DEFAULT_LOAD_FACTOR = loadFactor;
    }

    hash(key){
        let hashCode = 0;
        const PRIME_NUMBER = 31;
        for (let i = 0; i < key.length; i++)
        {
            hashCode = (PRIME_NUMBER * hashCode + key.charCodeAt(i)) % this.numBuckets;
        }
        return hashCode;
    }
    set(key, value){
        const hashKey = hash(key);

        const collision = HashMap[hashKey].findIndex((element) => element.key === key);

        if (collision === -1)
        {
            HashMap[hashKey].push(key, value);
        }
        else
        {
            HashMap[hashKey][collision].value = value;
        }


    }
}

