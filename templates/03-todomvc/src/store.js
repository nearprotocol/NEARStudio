/*jshint unused:false */

(function (exports) {

	'use strict';

	exports.todoStorage = {
		fetch: async function () {
      await window.initContract();
			return await window.contract.getAllTodos();
		},
		save: async function (todos) {
      await window.initContract();
      for (let todo of todos) {
        await window.contract.setTodo({id: todo.id.toString(), todo: todo});
      }
		}
	};

})(window);