import React from 'react'

const MyGrid = () => {
  return (
    <>
    {/* understand sm lg  */}
    <div className='@container border p-4'>
        <div className="grid grid-cols-1
         @sm:grid-cols-2 
         @lg:grid-cols-4 gap-4">
        <div className='bg-blue-500 h-40'>01</div>
        <div className='bg-green-500 h-40'>02</div>
        <div className='bg-blue-500 h-40'>03</div>
        <div className='bg-red-500 h-40'>04</div>
        </div>
      
    </div>
{/* understanding @max:jyada */}
    <div className='@container border p-4'>
        <div className="grid grid-cols-2
         @max md:grid-cols-4" 
         >
        <div className='bg-blue-500 h-40'>01</div>
        <div className='bg-green-500 h-40'>02</div>
        <div className='bg-blue-500 h-40'>03</div>
        <div className='bg-red-500 h-40'>04</div>
        </div>
      
    </div>
    {/* @min-* and @max-*comined apply styles within
      specify container width range */}
    <div className='@container border p-4'>
        <div className="flex gap-4" 
         >
        <div className='bg-blue-500 h-40 w-64'>01</div>
        <div className='bg-green-500 h-40 w-64 @min-md:@max-xl:hidden'>02</div>
        <div className='bg-blue-500 h-40 w-64'>03</div>
        <div className='bg-red-500 h-40 w-64'>04</div>
        </div>
        </div>
        {/* transform Gradient API's */}
        <div className="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
        {/* radial gradient conic gradient */}
        {/* inset ring and inset shadow */}
        {/* :not() */}
        {/* Use the not- variant to style an element when a condition is not true.

It's particularly powerful when combined with other pseudo-class variants, for example combining not-focus: with hover: to only apply hover styles when an element is not focused: */}
        <button className="bg-indigo-600 hover:not-focus:bg-indigo-700">
  click
</button>
{/* OKLCH Color Palette Meaning
OKLCH (O = Perceptually uniform, K = Color appearance, L = Lightness, C = Chroma, H = Hue) is a modern color space designed to be perceptually uniform and better suited for digital design. */}
{/* <p className='learn'>Good morning</p> */}
<p className='learn1'>hello</p>
    </>
  )
}

export default MyGrid
