window.addEventListener('load', () => {
    let dbSet = indexedDB.open('temp')
    dbSet.addEventListener('success', e => console.log('Success :', e))
    dbSet.addEventListener('error', e => console.log('Error :', e))
    dbSet.addEventListener('upgradeneeded', e => console.log('Upgrade :', e))
})

