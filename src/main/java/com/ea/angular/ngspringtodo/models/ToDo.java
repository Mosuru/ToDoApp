package com.ea.angular.ngspringtodo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
   
@Document(collection = "todos")
public class ToDo {
    
	@Id
    String id;
	String task;
    String taskDetails;
    String priority;
    String status;
    
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public String getTaskDetails() {
		return taskDetails;
	}

	public void setTaskDetails(String taskDetails) {
		this.taskDetails = taskDetails;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

    public ToDo() {
    }
    
    public ToDo(String task, String taskDetails, String priority, String status) {
        this.task = task;
        this.taskDetails = taskDetails;
        this.priority = priority;
        this.status = status;
    }
    
}