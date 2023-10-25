import Image from 'next/image';

export const Logo = () => {
    return(
        <Image
            height={18}
            width={125}
            alt="Logo"
            src="/logo.png"
        />
    )
}