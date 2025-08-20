'use client'

import {PortableText, PortableTextComponents} from '@portabletext/react'
import Image from 'next/image'
import {urlFor} from '../sanity/image'

const components: PortableTextComponents = {
  types: {
    image: ({value}) => {
      const url = urlFor(value).width(1200).url()
      const alt = value?.alt || ''
      return (
        <Image
          src={url}
          alt={alt}
          width={1200}
          height={675}
          className="rounded-lg my-6"
        />
      )
    },
  },
}

export default function RichText({value}: {value: any}) {
  if (!value) return null
  return <PortableText value={value} components={components} />
}
