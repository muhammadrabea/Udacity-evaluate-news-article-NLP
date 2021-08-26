import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import handleSubmit from './js/formHandler'

 window.addEventListener('DOMContentLoaded', () => {
    console.log('The DOM is fully loaded and parsed');

    const form = document.getElementById('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        handleSubmit()
    })
});

export { handleSubmit }