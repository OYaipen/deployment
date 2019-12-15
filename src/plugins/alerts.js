import Swal from 'sweetalert2'
import i18n from '~/plugins/i18n'

window.addEventListener('offline', function () {
    Swal.fire({
        icon: 'error',
        title: i18n.t('error_alert_title'),
        text: i18n.t('error_alert_text'),
        reverseButtons: true,
        confirmButtonText: i18n.t('ok'),
        cancelButtonText: i18n.t('cancel')
    })
});
