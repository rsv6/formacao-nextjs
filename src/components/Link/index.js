
import React from 'react'
import NextLink from 'next/link'

export default function index({ children, href, ...props}) {
  return (
    <NextLink href={href} passHref>
      <p {...props}>{children}</p>
    </NextLink>
  );
}
