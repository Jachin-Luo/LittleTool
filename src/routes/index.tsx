import {RouteObject} from 'react-router-dom'
import loadable from '@/utils/loadable'
const Login=loadable(()=>import('@/views/Login'))
const Home=loadable(()=>import('@/views/Home'))
const routes:Array<RouteObject>=[
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/',
        element:<Home/>
    }
]
export default routes