describe('index', () => {
  test('app renders to root element', () => {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
    require('../client/src/index');
  });
});
