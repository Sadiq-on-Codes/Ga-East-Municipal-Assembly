import CryptoJS from 'crypto-js';
import { key } from "@/functions/endpoint";

function base64URLEncode(input: string): string {
  return input?.replace(/\+/g, '-').replace(/\//g, '_')?.replace(/=+$/, '');
}

function base64URLDecode(input: string): string {
  input = input?.replace(/-/g, '+')?.replace(/_/g, '/');
  while (input?.length % 4) {
    input += '=';
  }
  return input;
}

export function encryptString(text: string): string {
  const encrypted = CryptoJS.AES.encrypt(text, key, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
  });
  const encryptedBase64URL = base64URLEncode(encrypted.toString(CryptoJS.format.OpenSSL));
  return encryptedBase64URL;
}

export function decryptString(encryptedText: string): string {
  try {
      const encryptedBase64 = base64URLDecode(encryptedText);
      const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key, {
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
      });
      return decrypted?.toString(CryptoJS.enc.Utf8);
  } catch (error) {
      console.error('Decryption error:', error);
      return '';
  }
}
