import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
/*export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});*/


export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: "Welcome to quiz app! Verify your email!",
      verificationEmailBody: (code) =>
        `Here is your verification code: ${code()}`,
      verificationEmailStyle: "CODE",
    },
  },
  userAttributes: {
    preferredUsername: {
      mutable: true,
      required: true,
    },
  },
});
