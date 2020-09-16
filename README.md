# Amazon clone

![Amazon](http://logok.org/wp-content/uploads/2015/01/Amazon-logo-1024x768.png)

![enter image description here](https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ)

This nice **React** application is a clone of basic Amazon website.

- Homepage: product listing, add to basket

- Basket page (checkout): remove from basket, checkout

- Login: using Firebase

## Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Services and main technologies used in this project

- CSS3

- JavaScript

- React

- React Router

- React

- Stripe (payment)

- Firebase (storage and database)

- Axios

- Express server

## Test cards

[Card details](https://stripe.com/docs/testing)

### Valid cards

| NUMBER           | BRAND                       | CVC          | DATE            |
| ---------------- | --------------------------- | ------------ | --------------- |
| 4242424242424242 | Visa                        | Any 3 digits | Any future date |
| 4000056655665556 | Visa (debit)                | Any 3 digits | Any future date |
| 5555555555554444 | Mastercard                  | Any 3 digits | Any future date |
| 2223003122003222 | Mastercard (2-series)       | Any 3 digits | Any future date |
| 5200828282828210 | Mastercard (debit)          | Any 3 digits | Any future date |
| 5105105105105100 | Mastercard (prepaid)        | Any 3 digits | Any future date |
| 378282246310005  | American Express            | Any 4 digits | Any future date |
| 371449635398431  | American Express            | Any 4 digits | Any future date |
| 6011111111111117 | Discover                    | Any 3 digits | Any future date |
| 6011000990139424 | Discover                    | Any 3 digits | Any future date |
| 3056930009020004 | Diners Club                 | Any 3 digits | Any future date |
| 36227206271667   | Diners Club (14 digit card) | Any 3 digits | Any future date |
| 3566002020360505 | JCB                         | Any 3 digits | Any future date |
| 6200000000000005 | UnionPay                    | Any 3 digits | Any future date |

### Declined cards

| NUMBER           | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4000000000000077 | Charge succeeds and funds will be added directly to your available balance (bypassing your pending balance).                                                                                                                                                                                                                                                                  |
| 4000003720000278 | Charge succeeds and funds will be added directly to your available balance (bypassing your pending balance).                                                                                                                                                                                                                                                                  |
| 4000000000000093 | Charge succeeds and domestic pricing is used (other test cards use international pricing). This card is only significant in countries with split pricing.                                                                                                                                                                                                                     |
| 4000000000000010 | The address_line1_check and address_zip_check verifications fail. If your account is blocking payments that fail postal code validation, the charge is declined.                                                                                                                                                                                                              |
| 4000000000000028 | Charge succeeds but the address_line1_check verification fails.                                                                                                                                                                                                                                                                                                               |
| 4000000000000036 | The address_zip_check verification fails. If your account is blocking payments that fail postal code validation, the charge is declined.                                                                                                                                                                                                                                      |
| 4000000000000044 | Charge succeeds but the address_zip_check and address_line1_check verifications are both unavailable.                                                                                                                                                                                                                                                                         |
| 4000000000005126 | Charge succeeds but refunding a captured charge fails asynchronously with a failure_reason of expired_or_canceled_card. Note that because refund failures are asynchronous, the refund will appear to be successful at first and will only have the failed status on subsequent fetches. We also notify you of refund failures using the charge.refund.updated webhook event. |
| 4000000000000101 | If a CVC number is provided, the cvc_check fails. If your account is blocking payments that fail CVC code validation, the charge is declined.                                                                                                                                                                                                                                 |
| 4000000000000341 | Attaching this card to a Customer object succeeds, but attempts to charge the customer fail.                                                                                                                                                                                                                                                                                  |
| 4000000000009235 | Results in a charge with a risk_level of elevated.                                                                                                                                                                                                                                                                                                                            |
| 4000000000004954 | Results in a charge with a risk_level of highest.                                                                                                                                                                                                                                                                                                                             |
| 4100000000000019 | Results in a charge with a risk_level of highest. The charge is blocked as it's considered fraudulent.                                                                                                                                                                                                                                                                        |
| 4000000000000002 | Charge is declined with a card_declined code.                                                                                                                                                                                                                                                                                                                                 |
| 4000000000009995 | Charge is declined with a card_declined code. The decline_code attribute is insufficient_funds.                                                                                                                                                                                                                                                                               |
| 4000000000009987 | Charge is declined with a card_declined code. The decline_code attribute is lost_card.                                                                                                                                                                                                                                                                                        |
| 4000000000009979 | Charge is declined with a card_declined code. The decline_code attribute is stolen_card.                                                                                                                                                                                                                                                                                      |
| 4000000000000069 | Charge is declined with an expired_card code.                                                                                                                                                                                                                                                                                                                                 |
| 4000000000000127 | Charge is declined with an incorrect_cvc code.                                                                                                                                                                                                                                                                                                                                |
| 4000000000000119 | Charge is declined with a processing_error code.                                                                                                                                                                                                                                                                                                                              |
| 4242424242424241 | Charge is declined with an incorrect_number code as the card number fails the Luhn check.                                                                                                                                                                                                                                                                                     |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
