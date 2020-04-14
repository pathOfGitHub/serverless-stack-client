export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_t9RgPHoSaEwq3T1VpqXp9UmW00dgSaIwka",
    s3: {
      REGION: "us-east-1",
      BUCKET: "kca-notes-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://7p38wro9sj.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_h6VBue5gw",
      APP_CLIENT_ID: "1mk8g7at68mtjnjsb4rdvrvfa9",
      IDENTITY_POOL_ID: "us-east-1:c70c5f5b-f921-4394-87f9-8359d54befcd"
    }
  };