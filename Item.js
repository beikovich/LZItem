const list = document.querySelector('.list'),
    items = document.querySelectorAll('.blocks__item')
    listItems = document.querySelectorAll('.list__Item')


function filter() {
    list.addEventListener('click', event =>{
        const targetId = event.target.dataset.id
        const target = event.target

        listItems.forEach(listItem => listItem.classList.remove('active'))
        target.classList.add('active')

        switch(targetId) {
            case 'All':
                getItems('blocks__item')                
                break
            case 'BRIDGE':
                getItems(targetId)    
                break  
            case 'INFRASTRUCTURE':
                getItems(targetId)  
                break  
            case 'DEFI':
                getItems(targetId)  
                break  
            case 'NAMESERVICE':
                getItems(targetId)  
                break      
            case 'WALLET':
                getItems(targetId)    
                break  
            case 'GAMENFT':
                getItems(targetId)  
                break  
            case 'DEX':
                getItems(targetId)  
                break  
            case 'LAUNCHPAD':
                getItems(targetId)  
                break      
            case 'SOCIALFI':
                getItems(targetId)    
                break  
            case 'NFTCOLLECTION':
                getItems(targetId)  
                break  
            case 'NFT':
                getItems(targetId)  
                break  
            case 'MARKETPLACE':
                getItems(targetId)  
                break      
        }
    })
}
filter()


function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }  
    })
}
