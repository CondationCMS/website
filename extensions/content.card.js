import { $hooks } from 'system/hooks.mjs';


$hooks.registerAction("system/content/tags", (context) => {
	context.arguments().get("tags").put(
			"card",
			(params) => `
			<div class="card mb-3" >
				<div class="row g-0">
					<div class="col-md-4">
						<img src="${params.get('image')}" class="img-fluid rounded-start" alt="${params.get('alt')}">
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<h5 class="card-title">${params.get('title')}</h5>
							<p class="card-text">${params.get('_content')}</p>
							<a href="${params.get('link')}" class="btn btn-primary">Read more</a>
						</div>
					</div>
				</div>
			</div>
			`
	)
	return null;
})