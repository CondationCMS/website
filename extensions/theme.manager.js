import { $hooks } from 'system/hooks.mjs';

$hooks.registerFilter("manager/media/forms", (context) => {
	var mediaForms = context.value();
	mediaForms.registerForm("meta", {
		fields: [
			{
				type: "text",
				name: "alt",
				title: "Alt-Text"
			}
		]
	});
	return mediaForms;
})

const defaultPageSettingsForm = [
	{
		type: "text",
		name: "title",
		title: "Titel"
	},
	{
		type: "text",
		name: "seo.description",
		title: "Seo-Description"
	},
	{
		type: "text",
		name: "seo.keywords",
		title: "Seo-Keywords"
	},
	{
		type: "text",
		name: "seo.author",
		title: "Seo-Author"
	}
]

$hooks.registerFilter("manager/contentTypes/register", (context) => {
	var contentTypes = context.value();
	contentTypes.registerPageTemplate({
		name: "StartPage",
		template: "start.html",
		forms: {
			settings: [
				...defaultPageSettingsForm
			]
		}
	});
	contentTypes.registerPageTemplate({
		name: "Content",
		template: "content.html",
		forms: {
			settings: [
				...defaultPageSettingsForm
			]
		}
	});
	contentTypes.registerPageTemplate({
		name: "Blog (entry)",
		template: "blog-entry.html",
		forms: {
			settings: [
				...defaultPageSettingsForm
			]
		}
	});
	contentTypes.registerSectionTemplate({
		section: "features",
		name: "Feature",
		template: "sections/feature.html"
	});
	contentTypes.registerSectionTemplate({
		section: "content",
		name: "Text",
		template: "sections/content-text.html"
	});
	contentTypes.registerSectionTemplate({
		section: "content",
		name: "Teaser",
		template: "sections/content-teaser.html"
	});
	return contentTypes;
})