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

const TextField = (overrides = {}) => ({
    type: "text",
    ...overrides
});

const DateTimeField = (overrides = {}) => ({
	type: "datetime",
	...overrides
});

const defaultPageSettingsForm = [
	TextField({
		name: "seo.description",
		title: "Seo-Description"
	}),
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
	contentTypes.registerPageTemplate({
		name: "Module",
		template: "module.html",
		forms: {
			settings: [
				...defaultPageSettingsForm
			],
			attributes: [
				{
					name: "module.descirption",
					type: "text",
					title: "Module Description"
				},
				{
					name: "module.features",
					type: "markdown",
					title: "Module Features"
				},
				{
					name: "module.installation",
					type: "markdown",
					title: "Module Installation"
				},
				{
					name: "module.author",
					type: "text",
					title: "Module Author"
				},
				{
					name: "module.license",
					type: "text",
					title: "Module License"
				},
				{
					name: "module.github",
					type: "text",
					title: "Module GitHub Repository"
				},
				{
					name: "module.issues",
					type: "text",
					title: "Module Issues"
				}
			]
		}
	});
	contentTypes.registerPageTemplate({
		name: "Documentation (content)",
		template: "documentation/content.html",
		forms: {
			settings: [
				...defaultPageSettingsForm
			]
		}
	});
	contentTypes.registerPageTemplate({
		name: "Documentation (index)",
		template: "documentation/index.html",
		forms: {
			settings: [
				...defaultPageSettingsForm
			]
		}
	});
	contentTypes.registerPageTemplate({
		name: "Globals (technical)",
		template: "globals.html",
		forms: {
			attributes: [
				TextField({
					name: "cms.version",
					title: "CMS Version"
				})
			]
		}
	});
	contentTypes.registerSectionTemplate({
		section: "features",
		name: "Feature",
		template: "sections/feature.html",
		forms: {
			attributes: [
				TextField({
					name: "title",
					title: "Title"
				}),
				TextField({
					name: "link",
					title: "Link"
				}),
				DateTimeField({
					name: "publish_date",
					title: "Publish Date"
				}),
				DateTimeField({
					name: "unpublish_date",
					title: "Unpublish Date"
				})
			]
		}
	});
	contentTypes.registerSectionTemplate({
		section: "content",
		name: "Text",
		template: "sections/content-text.html",
		forms: {
			attributes: [
				TextField({
					name: "title",
					title: "Title"
				}),
				DateTimeField({
					name: "publish_date",
					title: "Publish Date"
				}),
				DateTimeField({
					name: "unpublish_date",
					title: "Unpublish Date"
				})
			]
		}
	});
	contentTypes.registerSectionTemplate({
		section: "content",
		name: "Teaser",
		template: "sections/content-teaser.html",
		forms: {
			attributes: [
				TextField({
					name: "title",
					title: "Title"
				}),
				DateTimeField({
					name: "publish_date",
					title: "Publish Date"
				}),
				DateTimeField({
					name: "unpublish_date",
					title: "Unpublish Date"
				})
			]
		}
	});
	return contentTypes;
})