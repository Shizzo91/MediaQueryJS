function StripStrictLoader(content) {
    content = content.replace(/('|")use strict('|");?/gm, '')
        .replace(/"__esModule"?/gm, '"__es"');
    if (this.cacheable) this.cacheable(true);
    return content;
}

module.exports = StripStrictLoader;
