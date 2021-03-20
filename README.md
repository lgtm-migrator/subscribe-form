# subscribe-form



Form server can be launched by:

Development mode:
```
npm run dev
```

Production mode:
```
npm run build
npm run start
```

We need to create simple, but custom form for newsletter subscription.
If you can google - "graphql email form" and find what we can use - do it, might save us some time.
I wanna use GraphQL, because it's cool and might help us. Below check some tutorials.
We'll have form with 5-6 fields in it. Better to separate fields as subcomponents.

I wanna to be able to deploy it, maybe to Zeit NOW will be fine, so we can show/test it online.

https://github.com/atherdon/subscription-server

## Links to read

-   https://hackernoon.com/building-and-launching-an-advanced-email-marketing-app-in-just-4-weeks-yw1im30u8
-   https://www.freecodecamp.org/news/our-nonprofit-needed-a-cheaper-way-to-send-email-blasts-so-we-engineered-one-167322e3f28e/
-   https://github.com/freeCodeCamp/mail-for-good

-   https://hackernoon.com/setting-up-a-serverless-contact-form-in-react-using-nodemailer-and-express-19df9fdb20ed
-   https://github.com/sheelah/react-form-submission-demo

-   https://www.howtographql.com/react-apollo/0-introduction/
-   https://github.com/prisma-labs/graphql-yoga
-   https://itnext.io/building-a-graphql-api-using-graphql-yoga-lambda-and-mongodb-c0c195621f47

---

-   advanced "serverless" email subscription form
-   react
-   [react ant design](https://github.com/ant-design/ant-design)
-   [formik](https://github.com/jaredpalmer/formik) for validation
-   graphql as backend.

Current version http://eepurl.com/dLI7so

Plus, responsive layout

### Stage 0

-   repository setup
-   CRA simple form (email field + submit button + validation) - https://ant.design/components/form/
-   graphql init
-   after successful submit, emails goes into graphql db, then redirect to thank you page(h1 only)
-   we can also

Estimate:

---

### Stage 1

Estimate:

---

### Stage 2

Estimate:

---

### Unfiltered below

---

> Let's make unsubscribes cleaner (accidently posted in archived channel previously)

> unsubscribes should be one click with url opened as confirmation. its ok if more ppl do it, dont want to send to ppl who dont appreciate us

---

Simple flow: https://www.lennyrachitsky.com/

Previous issues: https://www.getrevue.co/profile/platformstream

Newsletters collection: https://www.kickstarter.com/newsletters

https://github.com/atherdon/creative/blob/master/BrandAssets/Noonifications/ProductHunt/Untitled%20design%20(51).png

https://github.com/atherdon/creative/blob/master/BrandAssets/Noonifications/ProductHunt/noon%20notification%20(1).png

https://github.com/atherdon/creative/blob/master/BrandAssets/Noonifications/ProductHunt/noon%20notification%20logo-profile%20(3).png

https://marketingexamples.com/conversion/newsletter-signup-flow

https://medium.com/@abhinavchhikara/nir-eyal-s-killer-email-signup-flow-64009b16bc9b

https://www.precisionmarketinggroup.com/blog/how-to-get-people-to-subscribe

https://www.precisionmarketinggroup.com/blog/new-leads-in-minutes-building-your-first-hubspot-lead-flow

https://medium.com/stack-overflow-design/designing-a-better-email-preference-center-4fddd44b91b5

https://medium.com/@donnachoi/stack-overflow-email-management-a-ux-case-study-964784da541b

https://restdb.io/blog/how-we-created-developer-friendly-email-campaign-tool-using-serverless

https://stackoverflow.com/questions/28876040/most-efficient-way-to-send-newsletters

---

Spam prevention

https://dev.to/felipperegazio/how-to-create-a-simple-honeypot-to-protect-your-web-forms-from-spammers--25n8
https://stackoverflow.com/questions/36227376/better-honeypot-implementation-form-anti-spam
https://elasticemail.com/blog/marketing_tips/how-to-prevent-bots-from-spamming-your-sign-up-forms

GDPR

https://www.npmjs.com/package/react-gdpr-consent
https://github.com/erichard/awesome-gdpr
https://www.mindk.com/blog/how-to-make-your-software-gdpr-compliant/

https://forms.technologyreview.com/newsletters/

https://forms.technologyreview.com/the-algorithm/

## Time report

| Date          | Task                                        | Time spent (HH:mm) | Description                                                                                                                                         |
| ------------- | ------------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sat, 22nd Feb | front-react-markup                          | 4:00               | Markup in react-create-app of the form, ant-design used, primitive validation used. Usage of formik was droped                                      |
| Sat, 29th Feb | mongo-driver                                | 8:00               | Database creation, was used Mongo DB. Created pure GraphQL server with driver with simple endpoints to save/remove subscribers from DB collections. |
| Mon, 9th Mar  | api connection                              | 6:34               | Unsucsessfull try to connect frontend and backend API's. Research for frontend GraphQL libraries or realisation examples.                           |
| Sun, 15th Mar | relay introduction                          | 5:31               | Choosed Relay project, inctroduction to relay, relay architecture observation                                                                       |
| Sun, 29th Mar | meeting, pages mockups, mutations for front | 4:32               | Creation of pages wireframes, research of mutations on front side of project. Discussion of proejct architecture (not done, still unclear)          |
| Mon, 20th Apr | Time report                                 | 1:00               | Data gathering for time report                                                                                                                      |
|               |                                             | Total 28:36        |                                                                                                                                                     |

---

google rss feed microservice or rss feed service
https://www.google.com/search?q=rss+feed+email+service&rlz=1C1GCEA_enUA850UA850&oq=rss+feed+email+service&aqs=chrome..69i57j33l3.10640j0j1&sourceid=chrome&ie=UTF-8

https://ifttt.com/applets/147561p-rss-feed-to-email

https://fliprss.com/

https://www.thatsjournal.com/blog-resources/list-of-best-feed-management-rss-to-email-subscription-services-feedburner-alternatives

https://www.sendinblue.com/plugins/

https://www.mailerlite.com/features/rss-to-email

https://mayecreate.com/blog/rss-to-email-newsletter-integration/

https://blog.mailup.com/2012/11/newsletter-from-blog-rss/

https://blog.dlvrit.com/rss-to-email/

https://goodbits.io/rss-to-email-newsletters

https://www.getresponse.com/features#FeatureBox

https://www.getresponse.com/integrations

https://zapier.com/apps/rss/integrations?utm_source=google&utm_medium=cpc&utm_campaign=gaw-row-nua-search-general-brand_exact&utm_term=zapier%20rss%20feed&utm_content=_pcrid_415928291421_pkw_zapier%20rss%20feed_pmt_e_pdv_c_slid__pgrid_88777571010_ptaid_kwd-791619842134_&gclid=Cj0KCQiAm4TyBRDgARIsAOU75sq2tgePUHpDafVnE3gyK8pHiqyjugNbUuwRuCUyIof7WxExBe4TzwYaAojLEALw_wcB

https://www.wpbeginner.com/showcase/best-mailchimp-alternatives/

https://www.sendinblue.com/features/email-marketing/
https://mailgaze.com/pricing/

https://convertkit.com/features

https://www.mailerlite.com/features

https://www.getresponse.com/features#FeatureBox

https://www.sendinblue.com/features/

https://docs.bitnami.com/aws/how-to/use-ses/

https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-getting-started-prerequisites.html

https://stackoverflow.com/questions/63150672/impact-of-migrating-to-signature-version-4-in-aws-ses-where-we-use-aws-ses-smtp

https://aws.amazon.com/ru/premiumsupport/knowledge-center/ses-migrate-email-solution/

http://jonathanwthomas.net/quitting-mailchimp-and-moving-my-small-business-email-marketing-to-sendy-for-a-fraction-of-the-cost/

> >


FORM PREFERENCES: https://www.technologyreview.com/newsletter-preferences
