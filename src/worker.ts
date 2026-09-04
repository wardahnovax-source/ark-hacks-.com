/**
 * Cloudflare Worker entry — runs middleware (redirects, security headers)
 * then serves static assets from the Astro build.
 */
import { onRequest } from '../functions/_middleware.js';

export interface Env {
	ASSETS: Fetcher;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return onRequest({
			request,
			env,
			ctx,
			next: () => env.ASSETS.fetch(request),
		});
	},
};
