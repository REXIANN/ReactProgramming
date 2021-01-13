function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked) },
    text,
  );
}


function Container() {
  const [count, setCount] = React.useState(0);
  return React.createElement(
    'div',
    null,
    React.createElement(LikeButton),
    React.createElement(
      'div', 
      {
        style: {
          marginTop: 20,
        }
      },
      React.createElement('span', null, 'current count: '),
      React.createElement('span', { style: { marginTop: 10 } }, count),
      React.createElement(
        'button', 
        { onClick: () => setCount(count + 1) },
        'UP',
      ),
      React.createElement(
        'button', 
        { onClick: () => setCount(count - 1) },
        'DOWN',
      )
    )
  )
}

const domContainer = document.getElementById('root')
ReactDOM.render(React.createElement(Container), domContainer)