export function arrayBufferToBase64 (buffer: ArrayBuffer) {
  const uint8Array = new Uint8Array(buffer);

  let binaryString = '';
  for (let i = 0; i < uint8Array.byteLength; i++) {
    binaryString += String.fromCharCode(uint8Array[i]);
  }

  const base64String = btoa(binaryString);

  return base64String;
}
