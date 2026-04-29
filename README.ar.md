# واجهة متجر Vendure - النسخة العربية

واجهة متجر إلكتروني عربية مبنية بـ [Remix](https://remix.run) و [Vendure](https://www.vendure.io).

## الإعداد

### متطلبات الخادم الخلفي

يعمل هذا المتجر مع خادم Vendure على:
```
https://bramjlive.com/shop-api
```

تأكد من أن خادم Vendure يدعم:
```ts
// vendure-config.ts
authOptions: {
  tokenMethod: ['bearer', 'cookie'],
}
```

## الميزات

- ✅ واجهة عربية كاملة من اليمين إلى اليسار (RTL)
- ✅ خط Cairo العربي
- ✅ مترجم بالكامل للعربية
- ✅ متصل بخادم bramjlive.com
- ✅ جاهز للنشر على Vercel

## النشر على Vercel

1. ادفع الكود إلى GitHub
2. افتح [vercel.com](https://vercel.com) وأنشئ مشروعاً جديداً
3. اربط المستودع
4. أضف متغيرات البيئة:
   ```
   VENDURE_API_URL=https://bramjlive.com/shop-api
   ```
5. انشر!

## التطوير المحلي

```bash
yarn install
yarn dev
```

افتح [http://localhost:3000](http://localhost:3000)

## متغيرات البيئة

```env
VENDURE_API_URL=https://bramjlive.com/shop-api
NODE_ENV=production
# STRIPE_PUBLISHABLE_KEY=pk_live_... (اختياري)
```

## الترخيص

MIT
