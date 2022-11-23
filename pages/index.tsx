import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex w-screen h-1/2">
        <div className="w-1/2 h-full bg bg-green-700"/>
        <div className="w-1/2 h-full bg bg-yellow-700"/>
      </div>
      <div className="flex h-1/2">
        <div className="w-1/3 h-full bg-red-700"/>
        <div className="w-2/3 h-full bg bg-orange-700"/>
        <div className="w-1/3 h-full bg bg-pink-700"/>
      </div>
    </div>
  )
}
