import { defineDocumentType, makeSource } from 'contentlayer/source-files';

// 1. 定义 "Reading" (读书笔记) 数据模型
export const Reading = defineDocumentType(() => ({
  name: 'Reading',
  filePathPattern: `reading/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    excerpt: { type: 'string', required: true },
    image: { type: 'string', required: true },
    author: { type: 'string', required: false },
    category: { type: 'string', required: false, default: '读书笔记' },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.split('/').pop(),
    },
  },
}));

// 2. 定义 "TeaJournal" (做茶日记) 数据模型
export const TeaJournal = defineDocumentType(() => ({
  name: 'TeaJournal',
  filePathPattern: `tea-journal/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    excerpt: { type: 'string', required: true },
    image: { type: 'string', required: true }, // 头图
    category: { type: 'string', required: false, default: '做茶日记' },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.split('/').pop(),
    },
  },
}));

// 3. 定义 "Essay" (生活随笔) 数据模型
export const Essay = defineDocumentType(() => ({
  name: 'Essay',
  filePathPattern: `essays/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    excerpt: { type: 'string', required: true },
    image: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.split('/').pop(),
    },
  },
}));

// 4. 导出配置
export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Reading, TeaJournal, Essay],
});
