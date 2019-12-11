import Swal from 'sweetalert2'

/**
 * @author Gabriel Costa <gabriel.moura@gsw.com.br>
 * @const  notificação Toast
 * */

const Toast = Swal.mixin({
	toast: true,
	position: 'top',
	showConfirmButton: false,
	timer: 2500,
	background: '#280E27',
	timerProgressBar: true,
	onOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer)
		toast.addEventListener('mouseleave', Swal.resumeTimer)
	}
})
export default Toast
