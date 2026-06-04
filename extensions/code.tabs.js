import { $hooks } from 'system/hooks.mjs';
import { $links } from 'system/links.mjs';


$hooks.registerAction("system/content/shortCodes", ({shortCodes}) => {
	shortCodes.put(
			"code-tabs-container",
			(params) => `
			    <div class="code-tabs">
                    <div class="code-tabs-nav">
                        <button class="tab active" data-tab="javascript">Javascript</button>
                        <button class="tab" data-tab="markdown">Markdown</button>
                    </div>
                    ${params._content}
                </div>
			`
	)
    shortCodes.put(
			"code-tabs-item",
			(params) => `
                <div class='code-content ${params.class || ""}' data-content='${params.id}'>
                    ${params._content}
                </div>
            `
	)
	return null;
})