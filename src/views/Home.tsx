import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getDemoDataAsync } from '@/store/modules/demo'

export default function Home() {
    const dispatch = useAppDispatch()
    const demoData = useAppSelector((state) => {
        return state.demo.demoData
    })
    useEffect(() => {
        dispatch(getDemoDataAsync)
    }, [])
    return (
        <div>
            <h1>HOME</h1>
            <h2>redux获取api异步数据</h2>
            {
                demoData.map((item: any) => <div key={item.id}>{item.title}</div>)
            }
        </div>
    )
}
