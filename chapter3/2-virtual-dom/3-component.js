function Title({ title, color }) {
  return <p style={{ color }}>{title}</p>
}

const element = <Title title="안녕하세요" color="blue" />

const consoleLogResult = {
  type: Title,
  props: { title: 'hello', color: 'blue' }
}