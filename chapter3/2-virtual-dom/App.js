export default function App() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setSeconds(v => v + 1);
    }, 1000)
  })
  return (
    <div>
      <Counter key={seconds} />
      <h1 style={{ color: seconds % 2 ? 'blue' : 'red' }}>hi there</h1>
      <h2>{seconds} seconds now...</h2>
    </div>
  )
}

