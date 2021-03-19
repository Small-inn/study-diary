import loadingComponent from './loadingComponent'

const loading = {
  install: function(Vue) {
    const loadingConstructor = Vue.extend(loadingComponent)
    const instance = new loadingConstructor()
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)

    Vue.prototype.$loading = (booleanVal) => {
      instance.showLoading = booleanVal
    }
  }
}

export default loading