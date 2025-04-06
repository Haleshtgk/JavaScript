import React from 'react'
import { emailContainer, heading, hero, heroLink, inputDesign, leftImage, mainBtn, subtitle, tag } from './styles'

function ObjectStyle2() {
  return (
    <div>
        <h1>Creating object styles in external js file and exporting in that module or file and importing anywahre if we want use that styles same like external css styles type</h1>
        <hr />

        <section style={hero}>
            {/* left  */}
            <div>
                <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/ba8ea1cca43e54c297b493d7/min-min.png" alt="" style={leftImage} />
            </div>

            {/* right  */}
            <div>
                <h3 style={tag}>What we do</h3>
                <h1 style={heading}>Ready to transform <br /> your customer <br /> experience?</h1>
                <p style={subtitle}>Duis aute irure dolor in reprehenderit in voluptate velit <br /> esse cillum dolore eu fugiat nulla pariatur.</p>

                {/* email  */}
                <div style={emailContainer}>
                    <input type="text" placeholder='Enter a valid email address' style={inputDesign} />
                    <button style={mainBtn}>START NOW</button>
                </div>

                <p style={heroLink}><i>Image from <a href="https://freepic.com" style={heroLink}>Freepik</a></i></p>
            </div>
        </section>
    </div>
  )
}

export default ObjectStyle2