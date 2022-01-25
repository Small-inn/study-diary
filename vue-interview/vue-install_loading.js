//调用：this.$load.show(颜色值)

var load = {};

load.install = function(Vue) {
    var load;
    var _show = (dotColor) => {
        load = document.getElementById('loading');
        if (!load) {
            load = document.createElement('div');
            load.id = 'loading';
            document.body.appendChild(load);
        }
        new Vue({
            el: '#loading',
            template: `
                <div class="wrapLoad">
                    <div class="load">
                        <div :style="dotStyle" class="double-bounce1"></div>
                        <div :style="dotStyle" class="double-bounce2"></div>
                    </div>
                </div>
            `,
            data: {
                dotStyle:{
                    backgroundColor:dotColor
                },
            }
        });
    }
   Vue.prototype.$load = {
        show: (dotColor) => {
            _show(dotColor);
        }
    }
}

export default load;