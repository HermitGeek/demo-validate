export default {
    name: 'main__demo'
};



window.addEventListener('resize', () => {
    // 方向
    const orientation = window.orientation;

    if (orientation === 180 || orientation === 0) {
        console.log('横向');
    }

    if (orientation === 90 || orientation === 270) {
        console.log('纵向');
    }
})
;
