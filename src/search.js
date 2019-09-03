const Fuse = require('fuse.js')
const blog = require('/Users/kaleocheng/Github/blog/public/index.json')

const  options = {
  keys: ['title', 'contents', 'categories', 'tags', 'permalink']
}
const fuse = new Fuse(blog, options)

module.exports = (pluginContext) => {
  return (search, env = {}) => {
    return new Promise((resolve, reject) => {
      fuse.search(search).then(res => {
      resolve([
        {
          icon: 'fa-safari',
          title: res.title,
          subtitle: res.contents,
          value: res.permalink,
        },
      ])
      })
    });
  };
};
