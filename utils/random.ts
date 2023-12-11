export function randomNumber(length: number): number {
  if (length <= 0) {
    throw new Error('Length must be greater than 0');
  }

  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;

  const randomInt = Math.floor(Math.random() * (max - min + 1) + min);

  // Format the random integer as a string with leading zeros
  const formattedNumber = randomInt.toString().padStart(length, '0');

  return Number(formattedNumber);
}


export function randomString(length: number): string {
  if (length <= 0) {
    throw new Error('Length must be greater than 0');
  }

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
