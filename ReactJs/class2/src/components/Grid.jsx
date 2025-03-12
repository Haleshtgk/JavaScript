import React from 'react'
import Card from './Card'
import Image from './Image'

function Grid() {
  return (
    <div className='grid-container' style={{gridTemplateColumns:'repeat(4, 1fr)'}} >
        <Card address="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?cs=srgb&dl=pexels-pixabay-356056.jpg&fm=jpg" title="card1" subtitle="this is the subtitle"/>
        <Card address="https://us.123rf.com/450wm/peopleimages12/peopleimages122306/peopleimages12230618853/206343614-responding-to-client-emails-an-unrecognizable-woman-sitting-alone-and-using-her-computer-to-work.jpg?ver=6" title="card2" subtitle="this is the subtitle"/>
    </div>
  )
}

export default Grid