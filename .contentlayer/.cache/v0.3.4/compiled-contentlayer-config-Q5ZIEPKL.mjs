// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Reading = defineDocumentType(() => ({
  name: "Reading",
  filePathPattern: `reading/**/*.mdx`,
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    excerpt: { type: "string", required: true },
    image: { type: "string", required: true },
    author: { type: "string", required: false },
    category: { type: "string", required: false, default: "\u8BFB\u4E66\u7B14\u8BB0" }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.split("/").pop()
    }
  }
}));
var TeaJournal = defineDocumentType(() => ({
  name: "TeaJournal",
  filePathPattern: `tea-journal/**/*.mdx`,
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    excerpt: { type: "string", required: true },
    image: { type: "string", required: true },
    // 头图
    category: { type: "string", required: false, default: "\u505A\u8336\u65E5\u8BB0" }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.split("/").pop()
    }
  }
}));
var Essay = defineDocumentType(() => ({
  name: "Essay",
  filePathPattern: `essays/**/*.mdx`,
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    excerpt: { type: "string", required: true },
    image: { type: "string", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.split("/").pop()
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Reading, TeaJournal, Essay]
});
export {
  Essay,
  Reading,
  TeaJournal,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-Q5ZIEPKL.mjs.map
