const PHONE_NUMBER: string = '+6282213548693';
const REFERRAL_CODE: string = '3103138';
const EMAIL: string = 'antoni@miraeasset.co.id';
const OFFICE_NAME: string = 'Mirae Asset Sekuritas Indonesia (Central Park)';
const ADDRESS: string = 'Ruko GSA (Garden Shopping Arcade) Central Park 8ED – 8EE Jl. Letjend S. Parman, Grogol Petamburan, Jakarta Barat 11470';
const W3FORMS: string = '644c4c88-76b0-483e-8a3e-e44ceac2d282';

export const TEMPLATE_WHATSAPP_MESSAGE = {
  CLAIM_PROMO: 'Halo, Saya mau claim promo dan dapatkan cashback.',
  DEFAULT: 'Halo, Saya ingin bertanya mengenai Mirae Asset Sekuritas.',
};


export const LINKS = {
  WHATSAPP: `https://wa.me/${PHONE_NUMBER}`,
  TELEGRAM: 'https://t.me/',
  OPEN_ACCOUNT: `https://login.miraeasset.co.id/registration/oe?referralcode=${REFERRAL_CODE}`,
  PLAYSTORE_MSTOCK: 'https://play.google.com/store/apps/details?id=id.co.miraeasset.stock',
  APPSTORE_MSTOCK: 'https://apps.apple.com/app/m-stock/id1670096144',
  TUTORIAL_MSTOCK: 'https://youtube.com/playlist?list=PLgVr6beQ0uOLcXn7zcntnMrJrMnc13Ngm&si=aBByffYIf8G9QkTk',
  USER_GUIDE_MSTOCK: 'https://drive.google.com/file/d/1h-X-m7ZjPlaH2xgKayWov7yKNp26Ti_o/view?usp=sharing',
  PIN_MAP_OFFICE: 'https://maps.app.goo.gl/ag62PgTeNj2hZcWK9',
  YOUTUBE: 'https://youtube.com/@mulaiinvestasisaham?si=oY8KXzS_LYvYZIv7',
  INSTAGRAM: 'https://www.instagram.com/sahaminsight',
  LINKEDIN: 'http://linkedin.com/in/antoni-ft',
  WHATSAPP_GROUP: 'https://chat.whatsapp.com/GxbNAxWu5j26ERZUuGmnNt',
  // partners
  OJK: 'https://ojk.go.id/id/Default.aspx',
  IDX: 'https://www.idx.co.id/id',
  IDCLEAR: 'https://www.idclear.co.id/id',
  KSEI: 'https://www.ksei.co.id/',
  SIPF: 'https://www.indonesiasipf.co.id/',
};

export const linkToWhatsapp = (message?: keyof typeof TEMPLATE_WHATSAPP_MESSAGE) => {
  switch (message) {
    case "CLAIM_PROMO":
      return LINKS.WHATSAPP + '?text=' + encodeURI(TEMPLATE_WHATSAPP_MESSAGE[message]);
    case "DEFAULT":
    default:
      return LINKS.WHATSAPP + '?text=' + encodeURI(TEMPLATE_WHATSAPP_MESSAGE['DEFAULT']);
  }
}

type TConstant = {
  REFERRAL_CODE: string
  PHONE_NUMBER: string
  EMAIL: string
  ADDRESS: string
  OFFICE_NAME: string
  W3FORMS: string
  TEMPLATE_WHATSAPP_MESSAGE: Record<keyof typeof TEMPLATE_WHATSAPP_MESSAGE, keyof typeof TEMPLATE_WHATSAPP_MESSAGE>
}

export const Constants: TConstant = {
  REFERRAL_CODE,
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  OFFICE_NAME,
  W3FORMS,
  TEMPLATE_WHATSAPP_MESSAGE: {
    CLAIM_PROMO: 'CLAIM_PROMO',
    DEFAULT: 'DEFAULT',
  },
}
