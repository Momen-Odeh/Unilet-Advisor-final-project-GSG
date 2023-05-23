import Swal from "sweetalert2";
const swalFire=(navigate)=>{
    Swal.fire({
        title: 'Not permit access',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'LogIn',
        showCloseButton: true,
        didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = '#3c3c3b';
          },
      }).then((resp)=>{
        if(resp.isConfirmed){
        navigate("/login")
        }
    })
}

export default swalFire