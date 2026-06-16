import { $hooks } from 'system/hooks.mjs';
import { $links } from 'system/links.mjs';


$hooks.registerAction("system/content/shortcode", ({ shortCodes }) => {
    shortCodes.put(
        "code-tabs-container",
        (params) => {
            const tabs = Object.fromEntries(
                params.tabs.split(",").map(pair => {
                    const [id, name] = pair.split(":");
                    return [id, name];
                })
            );

            const nav = Object.entries(tabs)
                .map(([id, name], index) => {
                    return `
                    <button class="tab ${index === 0 ? "active" : ""}" data-tab="${id}">
                        ${name}
                    </button>
                    `;
                })
            .join("");

            return `
                <div class="code-tabs">
                    <div class="code-tabs-nav">
                    ${nav}
                    </div>
                    ${params._content}
                </div>
            `;
        }
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