import Vue from 'vue'
import './style.scss'

import MovieFilter from './components/MovieFilter.vue'
import MovieList from './components/MovieList.vue'
import VueResourse from 'vue-resource'
Vue.use(VueResourse)

new Vue({
	el:'#app',
	data:{
		genre:[],
		time:[],
		movies:[]
	},
	methods:{
		checkFilter(category,title,checked){
			if(checked){
				this[category].push(title)
			}else{
				let index = this[category].indexOf(title);
				if(index>-1){
          this[category].splice(index,1);
        }
			}
		}
	},
	components:{
	MovieList,
	MovieFilter
	},
	created(){
      this.$http.get('/api').then(response => {
		  this.movies = response.data;
	  });
	}
});
