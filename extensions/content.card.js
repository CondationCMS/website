import { $hooks } from 'system/hooks.mjs';
import { $links } from 'system/links.mjs';


$hooks.registerAction("system/content/shortcode", ({shortCodes}) => {
	shortCodes.put(
			"card",
			(params) => `
			<div class="card mb-3" >
				<div class="row g-0">
					<div class="col-md-2 col-12">
						<img src="${params.image }" class="img-fluid rounded-start" alt="${params.alt}">
					</div>
					<div class="col-md-10 col-12">
						<div class="card-body">
							<h5 class="card-title">${params.title}</h5>
							<p class="card-text">${params._content}</p>
							<a href="${$links.createUrl(params.link)}" class="btn btn-primary">Read more</a>
						</div>
					</div>
				</div>
			</div>
			`
	)
	return null;
})