export default [{
    path: 'demo',
    name: 'main__demo',
    component(resolve) {
        require.ensure([], () => {
            resolve(require('@src/main/views/demo/index.vue'));
        }, 'views/main/demo/index');
    },
    meta: {
        keepAlive: true,
        rank: 20
    }
}];

