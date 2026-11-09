let users = []

if(sessionStorage)

userform.addEventListener('click',(e)=>{

    e.preventDefault();

    const nameInput = Expname.value;
    const amountInput = Expamount.value;
    const categoryInput = category.value;
    const dateInput = date.value;

    if(nameInput && amountInput && categoryInput && dateInput)

    {
       

    tablebody.innerHTML = "";

    users.forEach((item, index) => {

        tablebody.innerHTML += `
            <tr>
                <th>${index + 1}</th>

                <td>${item.nameInput}</td>

                <td>${item.amountInput}</td>

                <td>${item.categoryInput}</td>

                <td>${item.dateInput}</td>              

                
            </tr>
        `;
        return
        

    });
}

})