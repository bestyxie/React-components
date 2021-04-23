import React, { useState } from 'react'

interface InnerChildProps {
  count: number
}

const InnerChild: React.FC<InnerChildProps> = React.memo(({
  count
}) => {
  const [innerCount, setCount] = useState<number>(0)

  return (
    <div>
      <div>props.count: {count}</div>
      <div>state.count: {innerCount}</div>
      <button onClick={() => setCount(innerCount + 1)}>change count</button>
    </div>
  )
})

const MemoTest: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>change child's count</button>
      <InnerChild
        count={count}
      />
    </div>
  )
}

export default MemoTest
