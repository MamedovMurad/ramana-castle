
"use client"
import { IGenderWithCategory } from '@/common/model/products'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useFetchData } from '@/hooks/useFetchData'
import Link from 'next/link'
import { MainLogo } from '@/svg'



const inter = Inter({ subsets: ['latin'] })



export default function SecondLayout({
    children,
}: {
    children: React.ReactNode
}) {


    return (
        <>
            {children}
        </>




    )
}


