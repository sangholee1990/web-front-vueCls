export function parsedMarkdown(markdown) {
    const rawHtml = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(rawHtml);
    return `<div class="markdown-body">${sanitizedHtml}</div>`;
}