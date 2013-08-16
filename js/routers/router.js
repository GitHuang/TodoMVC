var Workspace = Backbone.Router.extend({
  routes:{
    '*filer': 'setFilter'
  },
  
  setFilter: function(param){
    //set the current filter to be used
	if(param){
	  param = param.trim();
	}
	app.TodoFilter = param || '';
	
	app.Todos.trigger('filter');
  }
});

app.TodoRouter = new Workspace();
Backbone.history.start();