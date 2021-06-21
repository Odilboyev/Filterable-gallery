(function() {
    const buttons = document.querySelectorAll('#btn');
    const storeImages = document.querySelectorAll('.store-item');

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault()

            const filter = e.target.dataset.filter

            storeImages.forEach(item => {
                if(filter === 'all') {
                    item.style.width = '300px';
                    item.style.transform = 'rotate(0)'
                } else{
                    if(item.classList.contains(filter)){
                    item.style.transform = 'rotate(0)'
                    item.style.width = '300px'
                    } else{
                    item.style.transform = 'rotate(-90deg)'
                    item.style.width = '0'
                    }
                }
            })
        })
    })
}) ();
    // transform: skew(20px);
    // transform: rotate(20deg);