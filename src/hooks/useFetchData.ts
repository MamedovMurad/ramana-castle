"use client"
import { api } from '@/common/api';
import React, { useEffect, useState } from 'react';



export const useFetchData = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setloading] = useState(true)
    
    const fetchData = async () => {
     
        const data = await api.get<T>(url)
        if (data) {
            setData(data)
        }
        setloading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return {
        data, loading
    };
};


