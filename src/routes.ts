import React from 'react'

interface RouteShape {
  name: string,
  path: string,
  component: React.LazyExoticComponent<React.ComponentType>,
}

const routes: RouteShape[] = [
  {
    name: 'antd form 表单',
    path: '/form',
    component: React.lazy(() => import('./js/components/Form'))
  },
  {
    name: 'React DnD with HOC',
    path: '/dnd-hoc',
    component: React.lazy(() => import('./js/components/DndWithHOC'))
  },
  {
    name: 'React DnD with HOOK',
    path: '/dnd-hook',
    component: React.lazy(() => import('./js/components/DndWithHook'))
  },
  {
    name: 'brick',
    path: '/brick',
    component: React.lazy(() => import('./js/components/Brick'))
  }
]

export default routes