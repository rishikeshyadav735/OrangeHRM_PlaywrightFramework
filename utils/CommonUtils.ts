import cryptoJs from 'crypto-js';

export default class CommonUtils {
    
    private scretKey: string;

    constructor() {
        // this.scretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : 'defaultSecretKey';    

        if(process.env.SECRET_KEY ) {
            this.scretKey = process.env.SECRET_KEY;
        }
        else{
            throw new Error('SECRET_KEY environment variable is not set');
        }
    }

    /**
     * 
     * @param data - The data to be encrypted.
     * Encrypts the given data using AES encryption with a secret key.
     * @returns 
     */
    public encryptData(data : string){
        const encryptedData = cryptoJs.AES.encrypt(data, this.scretKey);
        console.log('Encrypted Data:', encryptedData.toString());
        return encryptedData.toString();
    }

    public decryptData(encryptedData: string) {
        const bytes = cryptoJs.AES.decrypt(encryptedData, this.scretKey);
        const decryptedData = bytes.toString(cryptoJs.enc.Utf8);
        return decryptedData;
    }

}