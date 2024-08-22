
import { Button } from '@/components/ui/button'
import React from 'react'

function chaipage() {
  return (
    <main className="h-full flex justify-center items-center flex-col">
    <div>page of chai lover </div>
    {//<button className="px-6 py-2 bg-orange-300 hover:bg-orange-700 rounded my-3">i am button</button><br></br> 
    }
    <Button variant="chai" size="sm">Shadcn button</Button>
    </main>
  )
}

export default chaipage