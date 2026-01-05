import crypto from "crypto";

export const PHONEPE = {
  merchantId: process.env.PHONEPE_MERCHANT_ID,
  saltKey: process.env.PHONEPE_SALT_KEY,
  saltIndex: process.env.PHONEPE_SALT_INDEX,
  baseUrl: process.env.PHONEPE_BASE_URL,
};

export function generateXVerify(payloadBase64, path) {
  const stringToHash = payloadBase64 + path + PHONEPE.saltKey;

  const sha256 = crypto
    .createHash("sha256")
    .update(stringToHash)
    .digest("hex");

  return `${sha256}###${PHONEPE.saltIndex}`;
}
