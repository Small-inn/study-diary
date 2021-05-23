vue.directive('loading', {
  update(el, binding, vnode) {
    if (binding.value) {
      const div = document.createElement('div')
      div.innerText = '加载中...'
      div.setAttribute('id', 'loading')
      div.style.position = 'fixed'
      div.style.top = 0
      div.style.left = 0
      div.style.width = '100%'
      div.style.height = '100%'
      div.style.display = 'flex'
      div.style.justifyContent = 'center'
      div.style.alignItems = 'center'
      div.style.color = 'white'
      div.style.background = 'rgba(0, 0, 0, .7)'
      document.body.append(div)
    } else {
      document.body.removeChild(document.getElementById('loading'))
    }
  }
})