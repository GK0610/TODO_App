const getList=async ()=>{
    try{
        const res=await axios.get('https://jsonplaceholder.typicode.com/todos');
        const lists=res.data;
        console.log(lists);
        let listcontent='';
        lists.forEach((el,index)=>{
            listcontent+=`<li class="list-group-item ${el.completed?'disabledList':''} ${index%2?'list-group-item-info':'list-group-item-success'}"> <input type="checkbox" class="checkbox" ${el.completed?' checked':''}/> <label for=""> ${el.title}</label></li>`
        });
        $('#todoList').html(listcontent);
        if(checkedCount){
            checkedCount=0;
        }

    }
    catch(e){
        console.log('failed to fetch lists data',e);
    }
}
// call getlist() when GET LIST is clicked.
$('#getList').on('click',(e)=>{
    e.preventDefault();
    getList();
});

//variable to keep track of cheking list items
let checkedCount=0;

const alertPromise= ()=>{
     return new Promise((resolve,reject)=>{

         
        if(checkedCount===5){
            resolve(checkedCount)
        }
        else{
            reject('count not equal to 5');
        }
    });
}

const promiseCall=()=>{
    alertPromise().then((data)=>{
        alert(`Congrats, We done ${data} activities today...`);
    })
    .catch((err)=>{
        console.log('promise rejected');
    })
}


getList();

$('#todoList').on('change','.checkbox',function(e){
    if($(this).prop('checked')===true){
        console.log('checked');
        checkedCount++; 
        $(this).parent().addClass('active');
    }
    else{
        checkedCount--;
        console.log('unchecked');
        $(this).parent().removeClass('active');
    }
    
    promiseCall();


});







// const todoListTableBody = document.getElementById('todo-list-table-body');

// // Get reference to the Todo List menu
// const todoListMenu = document.getElementById('todroptable');

// // Add click event listener to the Todo List menu
// todoListMenu.addEventListener('click', () => {
//   // Fetch the to-do lists from the API
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => {
//       // Clear the table body
//       todoListTableBody.innerHTML = '';

//       // Iterate through each to-do list item
//       data.forEach(todo => {
//         // Create a new table row
//         const row = document.createElement('tr');

//         // Set the ID column
//         const idCell = document.createElement('td');
//         idCell.textContent = todo.id;
//         row.appendChild(idCell);

//         // Set the title column
//         const titleCell = document.createElement('td');
//         titleCell.textContent = todo.title;
//         row.appendChild(titleCell);

//         // Set the completed column with a checkbox
//         const completedCell = document.createElement('td');
//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.addEventListener('change', handleCheckboxChange);
//         completedCell.appendChild(checkbox);
//         row.appendChild(completedCell);

//         // Append the row to the table body
//         todoListTableBody.appendChild(row);
//       });
//     })
//     .catch(error => console.log(error));
// });

// // Function to handle checkbox change event
// function handleCheckboxChange() {
//   // Get all checkboxes in the table
//   const checkboxes = Array.from(document.querySelectorAll('#todo-list-table-body input[type="checkbox"]'));

//   // Filter checked checkboxes
//   const checkedCheckboxes = checkboxes.filter(checkbox => checkbox.checked);

//   // Check if 5 tasks have been completed
//   if (checkedCheckboxes.length === 5) {
//     alert(`Congrats. ${checkedCheckboxes.length} Tasks have been Successfully Completed`);
//   }
// }
