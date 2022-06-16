function addelement()
{
    let input=document.getElementById("input").value;
    let Input = document.getElementById('input');
    Input.value = '';

    if(input==''){
    alert("Task can't be empty");
    }
    else{
    let table = document.getElementById("myTable");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = input;
    }
}