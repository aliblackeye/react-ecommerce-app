const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();

const Iyzipay = require("iyzipay");

var iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API_KEY,
  secretKey: process.env.IYZICO_SECRET_KEY,
  uri: process.env.IYZIPAY_URI,
});

var request = {
  locale: Iyzipay.LOCALE.TR, // Ödeme ekranı dili
  conversationId: "2385283593", // İşlem Numarası veya Sipariş Numarası
  price: "8000", // Sepet Tutarı
  paidPrice: "8000", // Tahsil Edilen Tutar
  currency: Iyzipay.CURRENCY.TRY, // Para Birimi
  installment: "1", // Taksit Bilgisi (Ay)
  basketId: "B67832", // Sepet ID
  paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
  paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
  callbackUrl: "http://localhost:5000/pay",
  paymentCard: {
    cardHolderName: "Ali Karagöz", // Kart İsim Soyisim
    cardNumber: "5528790000000008", // Kart Numarasi
    expireMonth: "12", // Kart Ay
    expireYear: "2030", // Kart Yıl
    cvc: "123", // Kart CVC
    registerCard: "0", // Ödeme esnasında kart kaydedilmesi için 1 yapılır.
  },
  // Alıcı Bilgileri
  buyer: {
    id: "BY789", // Alıcı ID - User ID
    name: "Ali", // Alıcı İsim
    surname: "Karagöz", // Alıcı Soyad
    gsmNumber: "+905350000000", // Alıcı Telefon
    email: "ali.blackeye@hotmail.com", // Alıcı Email
    identityNumber: "74300864791", // TC Kimlik No
    lastLoginDate: "2015-10-05 12:43:35", // Son Giriş Tarihi
    registrationDate: "2013-04-21 15:12:09", // Kayıt Olma Tarihi
    registrationAddress: "Yazılımcılar Mah. Zengin cad. No:53", // Kayıtlı adres
    ip: "85.34.78.112", // IP Adresi
    city: "Istanbul", // Şehir
    country: "Turkey", // Ülke
    zipCode: "34732", // Posta Kodu
  },
  // Teslimat Bilgileri
  shippingAddress: {
    contactName: "Jane Doe", //  Teslimat İsim Soyad
    city: "Istanbul", // Teslimat Şehir
    country: "Turkey", // Teslimat Ülke
    address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1", // Fatura adres
    zipCode: "34742", //  Teslimat Posta Kodu
  },
  // Fatura Ad Soyad
  billingAddress: {
    contactName: "Jane Doe", //Fatura Ad Soyad
    city: "Istanbul", //Fatura Şehir
    country: "Turkey", //Fatura Ülke
    address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1", // Teslimat adres
    zipCode: "34742", // Fatura posta kodu
  },
  // Sepettekiler
  basketItems: [
    {
      id: "BI101", // Sepetteki Ürün ID
      name: "Binocular", // Sepetteki Ürün Adı
      category1: "Collectibles", // Sepetteki Ürün Kategori
      category2: "Accessories", // Sepetteki Ürün Kategori2
      itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
      price: "8000", // Sepetteki Ürün Fiyat
    },
  ],
};

router.post("/payment", (req, res) => {
  iyzipay.payment.create(request, function (err, result) {
    // Ödeme Yapılır
    console.log(err, result);
    if (!err) {
      res.status(200).json("Payment created successfully!");
    }
  });

  iyzipay.checkoutFormInitialize.create(request, function (err, result) {
    console.log(err, result);
  });

  iyzipay.checkoutForm.retrieve(
    {
      locale: Iyzipay.LOCALE.TR,
      conversationId: "123456789",
      token: "token",
    },
    function (err, result) {
      console.log(err, result);
      done();
    }
  );
});

router.get("/", async (req, res) => {
  // iyzipay.payment.create(request, function (err, result) {
  //   // Ödeme Yapılır
  //   console.log(err, result);
  //   if (!err) {
  //     res.status(200).json("Payment created successfully!");
  //   }
  // });
  
  // await iyzipay.checkoutFormInitialize.create(request, async (err, result) => {
  //   console.log(err);


  // });

      // await iyzipay.checkoutForm.retrieve(
    //   {
    //     locale: Iyzipay.LOCALE.TR,
    //     conversationId: request.conversationId,
    //     token: result.token,
    //   },
    //   function (err, result) {
    //     console.log(err, result);
    //     console.log(result.paymentPageUrl);
    //     res.status(200).send(result.paymentPageUrl);
    //   }
    // );
});

module.exports = router;
