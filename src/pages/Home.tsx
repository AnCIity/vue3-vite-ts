import { defineComponent, reactive } from 'vue'

interface ITodo {
  content: string
  status: boolean
}

type ITodoList = ITodo[]

export default defineComponent({
  name: 'Home',
  setup() {
    const value = reactive({ current: '' })
    const list: { current: ITodoList } = reactive({ current: [] })

    const add = (content: string) => list.current.push({ content, status: false })

    return () => (
      <div>
        <h2>首页</h2>
        <input type='text' value={value.current} onChange={e => (value.current = e.target.value)} />
        <button
          onClick={() => {
            add(value.current)
            value.current = ''
          }}
        >
          添加
        </button>
      </div>
    )
  }
})
