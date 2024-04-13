/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// If you set another name in wrangler.toml as the value for 'binding',
	// replace "AI" with the variable name you defined.
	AI: any;
  }
  
export default {
	async fetch(request: Request, env: Env) {
	  const response = await env.AI.run('@cf/meta/llama-2-7b-chat-int8', {
		  prompt: "What is the origin of the name, Bethany?"
		}
	  );
  
	  return new Response(JSON.stringify(response));
	},
  };
