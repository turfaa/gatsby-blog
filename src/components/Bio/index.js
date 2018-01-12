import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from 'utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Turfa Auliarachman`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: rhythm(1),
            transform: 'rotate(90deg)',
            objectFit: 'cover'
          }}
        />
        <p>
          Written by <strong>Turfa Auliarachman</strong>,
          a student who just loves to code. You should befriend him on{' '}
          <a href="https://www.facebook.com/turfa.auliarachman" target="_blank">
            Facebook
          </a> and follow him on{' '}
          <a href="https://www.instagram.com/turfa.a" target="_blank">
            Instagram
          </a>.
        </p>
      </div>
    )
  }
}

export default Bio
