/*jshint unused:false */

(function (exports) {

	'use strict';

	exports.todoStorage = {
		fetch: async function () {
			return await window.contract.getAllTodos();
		},
		save: async function (todos) {
      for (let todo of todos) {
        await window.contract.setTodo({id: todo.id.toString(), todo: todo});
      }
		}
	};

})(window);