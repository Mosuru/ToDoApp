package com.ea.angular.ngspringtodo.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ea.angular.ngspringtodo.models.ToDo;
import com.ea.angular.ngspringtodo.repositories.ToDoRepository;

	@RestController
	public class ToDoController {

	    @Autowired
	    ToDoRepository todoRepository;

	    @RequestMapping(method=RequestMethod.GET, value="/todos")
	    public Iterable<ToDo> todo() {
	        return todoRepository.findAll();
	    }

	    @RequestMapping(method=RequestMethod.GET, value="/todos/status/{status}")
	    public Iterable<ToDo> todobystatus(@PathVariable String status) {
	        if("All".equals(status))
		        return todoRepository.findAll();
	        else
	        	return todoRepository.findByStatus(status);
	    }
	    
	    @RequestMapping(method=RequestMethod.GET, value="/todos/priority/{priority}")
	    public Iterable<ToDo> todobypriority(@PathVariable String priority) {
	    	if("All".equals(priority))
		        return todoRepository.findAll();
	        else
	        	return todoRepository.findByPriority(priority);
	    }
	    
	    @RequestMapping(method=RequestMethod.POST, value="/todos")
	    public ToDo save(@RequestBody ToDo todo) {
	        todoRepository.save(todo);
	        return todo;
	    }

	    @RequestMapping(method=RequestMethod.GET, value="/todos/{id}")
	    public Optional<ToDo> show(@PathVariable String id) {
	        return todoRepository.findById(id);
	    }

	    @RequestMapping(method=RequestMethod.PUT, value="/todos/{id}")
	    public ToDo update(@PathVariable String id, @RequestBody ToDo todo) {
	        
	    	Optional<ToDo> todoOpt = todoRepository.findById(id);
	        ToDo t = todoOpt.get();
	        if(todo.getTask() != null)
	            t.setTask(todo.getTask());
	        if(todo.getTaskDetails() != null)
	            t.setTaskDetails(todo.getTaskDetails());
	        if(todo.getPriority() != null)
	            t.setPriority(todo.getPriority());
	        if(todo.getStatus() != null)
	            t.setStatus(todo.getStatus());
	        todoRepository.save(t);
	        return todo;
	    }

	    @RequestMapping(method=RequestMethod.DELETE, value="/todos/{id}")
	    public String delete(@PathVariable String id) {
	        Optional<ToDo> todo = todoRepository.findById(id);
	        todoRepository.delete(todo.get());
	        return "";
	    }
	}
