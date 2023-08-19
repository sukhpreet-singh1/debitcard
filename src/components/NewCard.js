import React from 'react'
import  "./NewCard.scss";

const NewCard = () => {
  return (
    <div className='phone'>
        <ul class="cards-wrapper">
      
      <li class="card yellow">
        <div class="card-header">
          <span class="menu">menu</span>
          <span class="close">
            <svg>
              {/* <use xlink:href="#cross" /> */}
            </svg>
          </span>
        </div>
        <div class="card-content">
          <div class="circle"></div>
          <div class="text"></div>
          <div class="text"></div>
        </div>
      </li>
      <li class="card sky">
        <div class="card-header">
          <span class="menu">menu</span>
          <span class="close">
            <svg>
              {/* <use xlink:href="#cross" /> */}
            </svg>
          </span>
        </div>
        <div class="card-content">
           <div class="circle"></div>
          <div class="text"></div>
          <div class="text"></div>
        </div>
      </li>
      <li class="card blue">
        <div class="card-header">
          <span class="menu">menu</span>
          <span class="close">
            <svg>
              {/* <use xlink:href="#cross" /> */}
            </svg>
          </span>
        </div>
        <div class="card-content">
           <div class="circle"></div>
          <div class="text"></div>
          <div class="text"></div>
        </div>
      </li>
      <li class="card green">
        <div class="card-header">
          <span class="menu">menu</span>
          <span class="close">
            <svg>
              {/* <use xlink:href="#cross" /> */}
            </svg>
          </span>
        </div>
        <div class="card-content">
           <div class="circle"></div>
          <div class="text"></div>
          <div class="text"></div>
        </div>
      </li>
      <li class="card pink">
        <div class="card-header">
          <span class="menu">menu</span>
          <span class="close">
            <svg>
              {/* <use xlink:href="#cross" /> */}
            </svg>
          </span>
        </div>
        <div class="card-content">
          <div class="circle"></div>
          <div class="text"></div>
          <div class="text"></div>
        </div>
      </li>
      
    </ul>
    </div>
  )
}

export default NewCard