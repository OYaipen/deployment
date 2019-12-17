import Swal from 'sweetalert2'
import i18n from '~/plugins/i18n'

window.addEventListener('offline', function () {
    Swal.fire({
        icon: 'warning',
        title: i18n.t('error_alert_title'),
        text: i18n.t('error_conection'),
        reverseButtons: true,
        confirmButtonText: i18n.t('ok'),
    })
});
