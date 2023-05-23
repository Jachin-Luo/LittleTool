import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getDemoDataAsync } from '@/store/modules/demo'
import { formatParmas } from '@/utils/formatParmas'
import { Input, Button } from 'antd'
const { TextArea } = Input;
export default function Home() {
    const dispatch = useAppDispatch()
    const [transformData, settransformData] = useState('')
    const demoData = useAppSelector((state) => {
        return state.demo.demoData
    })

    const rowDataOnchange = (e: any) => {
        settransformData(JSON.stringify(formatParmas(e.target.value)))
    }
    useEffect(() => {
        dispatch(getDemoDataAsync)
    }, [])
    return (
        <div>
            <div style={{ width: '50%' }}>
                转化查询字符串
                <TextArea onPressEnter={(e) => rowDataOnchange(e)}></TextArea>
                <TextArea value={transformData}></TextArea>

            </div>
            <iframe src="https://apihelper.jccore.cn/jsontool" height={'800px'} width={'1600px'}></iframe>
        </div>

    )
}
