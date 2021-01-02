import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import './index.css'

interface IProps {
  name: string
  age: number
}

const obj: IProps[] = [{ name: 'wxd', age: 18 }]

export default defineComponent({
  name: 'App',
  setup() {
    const List = <div>LIST: </div>

    return () => (
      <>
        <div
          id='nav'
          onClick={() => {
            console.log(111)
          }}
        >
          <RouterLink to='/'>Home</RouterLink>
        </div>
        <RouterView />

        {List}

        {obj.map(item => (
          <div>
            <div>{item.name}</div>
            <div>{item.age}</div>
          </div>
        ))}
      </>
    )
  }
})
