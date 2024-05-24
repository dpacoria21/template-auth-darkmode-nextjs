'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    route: {
        path: string,
        label: string,
    }
}

export default function NavLink({route}: Props) {

    const {label, path} = route;

    const pathname = usePathname();

    return (
        <Link className={`py-2 px-2 rounded-sm ${pathname===path ? 'bg-blue-300' : ''} transition-all`} href={path}>
            {label}
        </Link>
    );
}
