const {
  OPENAI_MAX_TOKENS,
} = require('../configs');

const openai = require('../connections/openai');

async function chatAI({ content, description }) {
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content,
      },
      {
        role: 'system',
        content: '好的，我會遵守這個規則。',
      },
      {
        role: 'user',
        content: description,
      },
    ],
    max_tokens: Number(OPENAI_MAX_TOKENS),
  });

  return response.data.choices[0].message.content;
}

module.exports = chatAI;
