export function arrayBufferToBase64 (buffer: ArrayBuffer) {
  const uint8Array = new Uint8Array(buffer);

  let binaryString = '';
  for (let i = 0; i < uint8Array.byteLength; i++) {
    binaryString += String.fromCharCode(uint8Array[i]);
  }

  const base64String = btoa(binaryString);

  return base64String;
}

export function downloadBlob (blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');

  a.href = url;
  a.download = filename || 'download';

  const clickHandler = () => {
    setTimeout(() => {
      URL.revokeObjectURL(url);
      this.removeEventListener('click', clickHandler);
    }, 150);
  };

  a.addEventListener('click', clickHandler, false);

  a.click();
}
