import { expect, test } from 'vitest';
import { linkToWhatsapp } from './cta';

test('should return link of whatsapp with default message', () => {
  const expectedResult = 'https://wa.me/+6282213548693?text=Halo,%20Saya%20ingin%20bertanya%20mengenai%20Mirae%20Asset%20Sekuritas.';
  
  expect(linkToWhatsapp()).toBe(expectedResult);
  expect(linkToWhatsapp('OTHER_KEY')).toBe(expectedResult);
});

test('should return link of whatsapp with claim promo message', () => {
  expect(linkToWhatsapp('CLAIM_PROMO')).toBe('https://wa.me/+6282213548693?text=Halo,%20Saya%20mau%20claim%20promo%20dan%20dapatkan%20cashback.');
});
