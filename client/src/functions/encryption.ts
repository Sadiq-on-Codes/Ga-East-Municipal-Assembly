import CryptoJS from 'crypto-js';
import { key } from "@/functions/endpoint";

export function encryptString(text: string): string {
    const encrypted = CryptoJS.AES.encrypt(text, key);
    return encrypted.toString();
  }
  
export function decryptString(encryptedText: string): string {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, key);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
