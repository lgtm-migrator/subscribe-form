# subscribe-form

Form server can be launched by:
```
npm run start
```

We need to create simple, but custom form for newsletter subscription.
If you can google - "graphql email form" and find what we can use - do it, might save us some time.
I wanna use GraphQL, because it's cool and might help us. Below check some tutorials.
We'll have form with 5-6 fields in it. Better to separate fields as subcomponents.

I wanna to be able to deploy it, maybe to Zeit NOW will be fine, so we can show/test it online.

## Links to read

- https://hackernoon.com/building-and-launching-an-advanced-email-marketing-app-in-just-4-weeks-yw1im30u8
- https://www.freecodecamp.org/news/our-nonprofit-needed-a-cheaper-way-to-send-email-blasts-so-we-engineered-one-167322e3f28e/
- https://github.com/freeCodeCamp/mail-for-good

- https://hackernoon.com/setting-up-a-serverless-contact-form-in-react-using-nodemailer-and-express-19df9fdb20ed
- https://github.com/sheelah/react-form-submission-demo

- https://www.howtographql.com/react-apollo/0-introduction/
- https://github.com/prisma-labs/graphql-yoga
- https://itnext.io/building-a-graphql-api-using-graphql-yoga-lambda-and-mongodb-c0c195621f47

---


- advanced "serverless" email subscription form
- react
- [react ant design](https://github.com/ant-design/ant-design)
- [formik](https://github.com/jaredpalmer/formik) for validation
- graphql as backend.

Current version http://eepurl.com/dLI7so

Plus, responsive layout


### Stage 0
 - repository setup
 - CRA simple form (email field + submit button + validation) - https://ant.design/components/form/
 - graphql init
 - after successful submit, emails goes into graphql db, then redirect to thank you page(h1 only)
 - we can also

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



----


https://forms.technologyreview.com/newsletters/

https://forms.technologyreview.com/the-algorithm/

## Time report

| Date          | Task                                        |  Time spent (HH:mm) | Description                                                                                                                                         |
|---------------|---------------------------------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Sat, 22nd Feb | front-react-markup                          | 4:00                | Markup in react-create-app of the form, ant-design used, primitive validation used. Usage of formik was droped                                      |
| Sat, 29th Feb | mongo-driver                                | 8:00                | Database creation, was used Mongo DB. Created pure GraphQL server with driver with simple endpoints to save/remove subscribers from DB collections. |
| Mon, 9th Mar  | api connection                              | 6:34                | Unsucsessfull try to connect frontend and backend API's. Research for frontend GraphQL libraries or realisation examples.                           |
| Sun, 15th Mar | relay introduction                          | 5:31                | Choosed Relay project, inctroduction to relay, relay architecture observation                                                                       |
| Sun, 29th Mar | meeting, pages mockups, mutations for front | 4:32                | Creation of pages wireframes, research of mutations on front side of project. Discussion of proejct architecture (not done, still unclear)          |
| Mon, 20th Apr | Time report                                 | 1:00                | Data gathering for time report                                                                                                                      |
|               |                                             | Total 28:36         |                                                                                                                                                     |
