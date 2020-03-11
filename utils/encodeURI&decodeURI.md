### decodeURI、encodeURI、encodeURIComponent 及 decodeURIComponent 区别

---

- encodeURI()：将 URI 中的每个字符编码为 1-4 个格式为 %xx 的转义序列（xx 为十六进制数），但不包括 ASCII 数字、字母、URL 分隔符（/、?、,、&、...）、以及其他部分 ASCII 字符。具体见 MDN。
- Example: encodeURI('http://example.com/端点?键=值') => 'http://example.com/%E7%AB%AF%E7%82%B9?%E9%94%AE=%E5%80%BC'

- decodeURI()：将已经编码的 URI 中的转义序列解码为它们表示的字符，但除了 encodeURI() 不会编码的字符。
- encodeURIComponent()：用于编码 URI 中的组成部分。它除了转义 - encodeURI() 指定的字符，还会转义 URL 分隔符（/、?、,、&、...）
- Example: encodeURIComponent('测试/测试?测试=测试') => '%E6%B5%8B%E8%AF%95%2F%E6%B5%8B%E8%AF%95%3F%E6%B5%8B%E8%AF%95%3D%E6%B5%8B%E8%AF%95'
- decodeURIComponent()：将已经编码的 URI 组成部分中的转义序列解码为它们表示的字符，但除了 encodeURIComponent() 不会编码的字符。
