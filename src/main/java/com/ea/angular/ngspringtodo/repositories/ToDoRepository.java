package com.ea.angular.ngspringtodo.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ea.angular.ngspringtodo.models.ToDo;

public interface ToDoRepository  extends CrudRepository<ToDo, String> {
    	
	@Override
	void delete(ToDo deleted);
	
	public List<ToDo> findByStatus(String name);
	
	public List<ToDo> findByPriority(String name);
	
}
