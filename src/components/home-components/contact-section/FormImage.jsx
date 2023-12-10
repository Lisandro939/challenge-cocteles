import React from 'react'
import { Icon } from '@iconify/react'
import { IconWrapperCoctail, IconWrapperGlass, ImageContainer, ImageWrapper, MainCircle, SmallCircle, VerySmallCircle } from './FormImage.styles'

export default function FormImage() {
  return (
    <ImageContainer>
        <ImageWrapper>
            <IconWrapperCoctail>
                <Icon width="70px" icon="ep:cold-drink" />
            </IconWrapperCoctail>
            <IconWrapperGlass>
                <Icon width="80px" icon="fluent:drink-wine-20-regular" />
            </IconWrapperGlass>
            <MainCircle />
            <SmallCircle />
            <VerySmallCircle />
        </ImageWrapper>
    </ImageContainer>
  )
}
