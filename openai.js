const { Configuartion, OpenAIApi} = require('openai');
const configuartion = new Configuartion({apiKey:"sk-mVECOF0mo9dfuUnJf1qCZs9TIcIc1K_ba4goZtRDEGT3BlbkFJJyIPT7Lp5lvcSstrcvTyKXUYbtL7vrabnXNdkLbasA"})
const openai = new OpenAIApi(configuration);


export async function sendMsgToOpenAI(message){
    const res = await openai.createCompletion({
        model: 'text-davinchi-003',
        prompt: message,
        temperature:0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0

    });
    return res.data.choices[0].text;


}