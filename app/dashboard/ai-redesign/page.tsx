'use client'
import React from 'react'
import ImageUpload from './_components/ImageUpload'
import Room from './_components/Room'
import AIRedesign from './_components/AIRedesign'
import PromptArea from './_components/PromptArea'
import { Button } from '@/components/ui/button'

function AiRedesign() {
  const onHandleInputChange = (value: any, fieldName: string) => {
    // Function implementation
  }

  return (
    <div>
      
      {/* heading text*/}
      <div className='pt-10'>
      <h2 className='text-5xl font-bold text-colors-custom-purple text-center '>Never let Creative Block Stop you </h2>
      <h2 className='text-4xl font-bold text-colors-custom-purple text-center mb-5'></h2>
      <p className='text-colors-custom-purple text-center text-xl'>Upload Pic , Select a Style and see your new Redesigns </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2  mt-20 gap-20'>
      {/* Image Upload*/}
       <ImageUpload selectedImage={(value)=>onHandleInputChange(value,'image')} />

       {/* Form*/}
       <div>
       
       {/* Type of Room*/}
       <Room selectedRoomType={(value)=>onHandleInputChange(value,'room') } />
       {/* AI ReDesign Type */}
       <AIRedesign selectedAIRedesignType={(value)=>onHandleInputChange(value,'AIRedesign')}/>
       {/* Custom Additional Requirements*/}
       <PromptArea customPrompt={(value)=>onHandleInputChange(value,'CustomPrompt')}/>
       {/* AI Generate Image Button */}
       <div className="flex justify-end">
         <Button className='bg-colors-custom-purple mt-6'>Manifest Revamped Room </Button>
       </div>

       </div>


      </div>

    </div>
  )
}

export default AiRedesign
