"use client"
import { api } from '@/common/api';
import React, { useEffect, useState } from 'react';



export const useFetchData = <T>(url: string, dependency?:any) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setloading] = useState(true)
    
    const fetchData = async () => {
        setloading(true)
        const data = await api.get<T>(url)
        if (data) {
            setData(data)
        }
        setloading(false)
    }
    useEffect(() => {
        fetchData()
    }, [JSON.stringify(dependency)])

    return {
        data, loading
    };
};


