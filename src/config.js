// ============================================================
//  PERINGATAN: aplikasi ini SENGAJA dibuat rentan untuk praktikum.
//  Jangan gunakan kode ini (atau pola di dalamnya) di production.
//  Semua "secret" di bawah ini PALSU (hanya untuk simulasi).
// ============================================================

module.exports = {
  port: process.env.PORT || 3000,

  // Mengambil secret dari Environment Variable
  jwtSecret: process.env.JWT_SECRET,

  // Mengambil API key dari Environment Variable
  paymentGatewayApiKey: process.env.PAYMENT_GATEWAY_API_KEY,

  defaultSettings: {
    currency: 'IDR',
    dailyTransferLimit: 10000000,
    notifications: { email: true, sms: false },
  },
};
