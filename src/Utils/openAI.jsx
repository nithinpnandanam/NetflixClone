import OpenAI from 'openai';
import { open_AI_key } from './constants';
const openai = new OpenAI({
  apiKey: open_AI_key, 
  dangerouslyAllowBrowser:true
});

export default openai