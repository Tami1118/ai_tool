require('dotenv').config();

const {
  OPENAI_API_KEY,
  OPENAI_MAX_TOKENS,
  OPENAI_CONTENT,
} = process.env;

module.exports = {
  OPENAI_API_KEY,
  OPENAI_MAX_TOKENS,
  OPENAI_CONTENT,
};
