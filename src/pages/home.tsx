import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gray-50">
      <p className="text-4xl">Deep Dive React</p>
      <div className="flex w-full flex-wrap justify-center gap-8 ">
        <Link to="/controller-render" className="cursor-pointer">
          <Button variant="outline">可控性渲染</Button>
        </Link>
        <Link to="/render-function" className="cursor-pointer">
          <Button variant="outline">
            {`<Component />
            和Component()的渲染区别`}
          </Button>
        </Link>

        <Link to="/static-property" className="cursor-pointer">
          <Button variant="outline">静态属性</Button>
        </Link>

        <Link to="/event-bus" className="cursor-pointer">
          <Button variant="outline">事件总线</Button>
        </Link>
      </div>
    </div>
  )
}
