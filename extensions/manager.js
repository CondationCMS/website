import { $hooks } from 'system/hooks.mjs';

$hooks.registerFilter("manager/media/forms", (mediaForms) => {
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

const TextareaField = (overrides = {}) => ({
	type: "textarea",
	...overrides
});

const ListField = (overrides = {}) => ({
	type: "list",
	...overrides
});

const defaultSectionMetaFields = [
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

$hooks.registerFilter("manager/contentTypes/register", (contentTypes) => {
	contentTypes.registerPageTemplate({
		name: "StartPage",
		template: "start.html",
		forms: {
			settings: {
				fields: [
					...defaultPageSettingsForm
				]
			}
		}
	});
	contentTypes.registerPageTemplate({
		name: "Content",
		template: "content.html",
		forms: {
			settings: {
				fields: [
					...defaultPageSettingsForm
				]
			}
		}
	});
	contentTypes.registerPageTemplate({
		name: "Blog (entry)",
		template: "blog-entry.html",
		forms: {
			settings: {
				fields: [
					...defaultPageSettingsForm
				]
			}
		}
	});
	contentTypes.registerPageTemplate({
		name: "Module",
		template: "module.html",
		forms: {
			settings: {
				fields: [
					...defaultPageSettingsForm
				]
			},
			attributes: {
				fields: [
					{
						name: "module.description",
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
		}
	});
	contentTypes.registerPageTemplate({
		name: "Documentation (content)",
		template: "documentation/content.html",
		forms: {
			settings: {
				fields: [
					...defaultPageSettingsForm
				]
			}
		}
	});
	contentTypes.registerPageTemplate({
		name: "NEW Documentation (content)",
		template: "documentation/documentation.html",
		forms: {
			settings: {
				fields: [
					...defaultPageSettingsForm
				]
			}
		}
	});
	contentTypes.registerPageTemplate({
		name: "Documentation (index)",
		template: "documentation/index.html",
		forms: {
			settings: {
				fields: [
					...defaultPageSettingsForm
				]
			}
		}
	});
	contentTypes.registerPageTemplate({
		name: "Globals (technical)",
		template: "globals.html",
		forms: {
			attributes: {
				fields: [
					TextField({
						name: "cms.version",
						title: "CMS Version"
					})
				]
			}
		}
	});
	contentTypes.registerSectionEntryTemplate({
		section: "features",
		name: "Feature",
		template: "sections/feature.html",
		forms: {
			attributes: {
				fields: [
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
		}
	});
	contentTypes.registerSectionEntryTemplate({
		section: "content",
		name: "Text",
		template: "sections/content-text.html",
		forms: {
			attributes: {
				fields : [
					...defaultSectionMetaFields
				]
			}
		}
	});
	contentTypes.registerSectionEntryTemplate({
		section: "content",
		name: "Teaser",
		template: "sections/content-teaser.html",
		forms: {
			attributes: {
				fields : [
					TextField({
						name: "top_title",
						title: "Top Title"
					}),
					...defaultSectionMetaFields
				]
			}
		}
	});
	contentTypes.registerSectionEntryTemplate({
		section: "content",
		name: "Intro",
		template: "sections/content-intro.html",
		forms: {
			attributes: {
				fields : [
					TextField({
						name: "top_title",
						title: "Top Title"
					}),
					TextField({
						name: "title",
						title: "Title"
					}),
					TextareaField({
						name: "description",
						title: "Description"
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
		}
	});
	contentTypes.registerSectionEntryTemplate({
		section: "content",
		name: "Foundation",
		template: "sections/content-foundation.html",
		forms: {
			attributes: {
				fields : [
					TextField({
						name: "title",
						title: "Title"
					}),
					TextareaField({
						name: "description",
						title: "Description"
					}),
					ListField({
						name: "items",
						title: "Items",
						options: {
							nameField: "title"
						}
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
			},
			items: {
				fields: [
					TextField({
						name: "title",
						title: "Title"
					}),
				]
			}
		}
	});
	contentTypes.registerListItemType({
		name: "items",
		form: {
			fields: [
				{
					name: "title",
					title: "Title",
					type: "text"
				},
				{
					name: "description",
					title: "Description",
					type: "text"
				}
			]
		}
	});
	contentTypes.registerSectionEntryTemplate({
		section: "content",
		name: "Example",
		template: "sections/content-example.html",
		forms: {
			attributes: {
				fields : [
					TextField({
						name: "title",
						title: "Title"
					}),
					TextareaField({
						name: "description",
						title: "Description"
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
		}
	});
	return contentTypes;
})
