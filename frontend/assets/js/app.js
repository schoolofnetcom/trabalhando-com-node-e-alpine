const { response } = require("express");

function createTask() {
    return {
        formData: {
            title: '',
            done: false
        },
        submit() {
            fetch('http://localhost:9000/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
        }        
    }
}

function findAll() {
    return {
        loadData() {
            fetch('http://localhost:9000/tasks')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        }
    }
}