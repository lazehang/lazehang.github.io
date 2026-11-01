# Lighthouse reports (Stage 2 PageSpeed / CWV)

Generated with **Lighthouse 12.8.2** against a local production build:

```bash
yarn build && yarn serve -p 9000
npx lighthouse@12.8.2 http://localhost:9000/ \
  --only-categories=performance,accessibility,best-practices,seo \
  --form-factor=mobile --preset=perf --screenEmulation.mobile=true \
  --throttling.cpuSlowdownMultiplier=4 \
  --output=json --output=html --output-path=./mobile.report
npx lighthouse@12.8.2 http://localhost:9000/ \
  --only-categories=performance,accessibility,best-practices,seo \
  --form-factor=desktop --screenEmulation.mobile=false \
  --output=json --output=html --output-path=./desktop.report
```

Artifacts: `mobile.report.{json,html}`, `desktop.report.{json,html}`.
