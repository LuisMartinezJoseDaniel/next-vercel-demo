import { CSSProperties, FC, PropsWithChildren } from "react";

import { useRouter } from "next/router"
import Link from 'next/link'

const style:CSSProperties = {
  color: '#0050f3',
  textDecoration: 'underline',

}

interface Props {
  href: string,
}

{/* Los Link no se pueden estilizar con style={} directamente */}
export const ActiveLink:FC<PropsWithChildren <Props>> = ( { children, href } ) => {
  const {asPath} = useRouter();//informacion del path actual

  return (
    <Link href={href}>
      <a style={ asPath === href? style: undefined}>{children}</a>
    </Link>
  );
}
